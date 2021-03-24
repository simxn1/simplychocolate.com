import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import 'whatwg-fetch';

import { CHECK_SELECTED_PLACE } from '../../config/endpoints';
const URL = CHECK_SELECTED_PLACE;

const ShippingAndPaymentMethod = () => {

    let location = useLocation();
    let history = useHistory();

    const [boxContent, setBoxContent] = React.useState();
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState();
    const [price, setPrice] = React.useState();
    const [buyerInformation, setBuyerInformation] = React.useState();
    const [afterDiscount, setAfterDiscount] = React.useState(false);
    const [afterDiscountDisplay, setAfterDiscountDisplay] = React.useState("none");
    const [wrongCodeDisplay, setWrongCodeDisplay] = React.useState("none");
    const [paymentMethod, setPaymentMethod] = React.useState(false);
    const [paymentMethodFee, setPaymentMethodFee] = React.useState(0);
    const [shippingMethod, setShippingMethod] = React.useState(false);
    const [shippingMethodFee, setShippingMethodFee] = React.useState(0);
    const [depoDisplay, setDepoDisplay] = React.useState("none");
    const [selectDeliveryPointDisplay, setSelectDeliveryPointDisplay] = React.useState("none");

    const discountCodeInput = React.useRef();

    React.useEffect(() => {
        setBoxContent(location.boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity);
        setPrice(location.price);
        setBuyerInformation(location.buyerInformation);
    }, [])

    const discountCodes = ["BEA20", "NIKOLETA20", "NICOL20"];

    const formatToNumber = (string, typeOfString) => {
        if (typeOfString === 'price') {
            return parseFloat(string.replace(/,/g, '.'));
        }
        else if (typeOfString === 'discountCode') {
            return parseFloat(string.replace(/\D/g, ''));
        }
    }

    const formatToPrice = (number) => {
        return number.toFixed(2).toString().replace(/\./g, ",");
    }

    const handleDiscount = () => {
        let discountCode = discountCodeInput.current.value.toUpperCase();

        if (!afterDiscount && discountCodes.includes(discountCode)) {
            let discountPercent = formatToNumber(discountCode, 'discountCode');
            let pricePercentAfterDiscount = 100 - discountPercent;

            setPrice(() => {
                let priceAfterDiscount = (formatToNumber(price, 'price') - shippingMethodFee - paymentMethodFee) / 100 * pricePercentAfterDiscount;
                return formatToPrice(priceAfterDiscount + shippingMethodFee + paymentMethodFee);
            });

            setAfterDiscount(true);
            setWrongCodeDisplay("none");
            setAfterDiscountDisplay("block");
        }
        else if (discountCode !== "" && !afterDiscount && !discountCodes.includes(discountCode)) {
            setWrongCodeDisplay("block");
        }
    }

    const setNewPaymentMethodFee = (newPaymentMethodFee) => {
        setPaymentMethodFee(() => {
            setPrice(
                formatToPrice(formatToNumber(price, "price") - paymentMethodFee + newPaymentMethodFee)
            )
            return newPaymentMethodFee;
        });
    }

    const setNewShippingMethodFee = (newShippingMethodFee) => {
        setShippingMethodFee(() => {
            setPrice(
                formatToPrice(formatToNumber(price, "price") - shippingMethodFee + newShippingMethodFee)
            )
            return newShippingMethodFee;
        });
    }

    const toggleDepoDisplay = (selectedShippingMethod) => {
        if (selectedShippingMethod === "deliveryPoint") {
            setDepoDisplay(() => "block");
        }
        else {
            setDepoDisplay(() => "none");
        }
    }

    const handleSetPayment = (event) => {
        let newPaymentMethod = event.target.value;

        if (newPaymentMethod === "cash") {
            setNewPaymentMethodFee(1);
        }
        else if (newPaymentMethod === "online") {
            setNewPaymentMethodFee(0);
        }

        setPaymentMethod(newPaymentMethod);
    }

    const handleSetShipping = (event) => {
        let newShippingMethod = event.target.value;

        if (newShippingMethod === "courier") {
            setNewShippingMethodFee(3.50);
            toggleDepoDisplay(newShippingMethod);
        }
        else if (newShippingMethod === "deliveryPoint") {
            setNewShippingMethodFee(1.70);
            toggleDepoDisplay(newShippingMethod);
        }
        else if (newShippingMethod === "pickUpAtStore") {
            setNewShippingMethodFee(0.00);
            toggleDepoDisplay(newShippingMethod);
        }

        setShippingMethod(newShippingMethod);
    }

    let orderId;
    const generateOrderId = () => {
        let now = Date.now().toString(); // 13 char number
        // pad with extra random digit
        now += now + Math.floor(Math.random() * 10);
        // format
        orderId = [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
        return orderId;
    }

    let placeSelected;
    const selectedPlaceForDeliveryPoint = async () => {
        if (shippingMethod === "deliveryPoint") {
            const response = await window.fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ orderId: orderId })
            });

            placeSelected = await response.json();
            console.log(placeSelected);

            if (placeSelected.is_selected === 1) {
                setSelectDeliveryPointDisplay(() => "none");
                return true
            }
            else {
                setSelectDeliveryPointDisplay(() => "block");
                return false
            }
        }
        else {
            placeSelected = "unnecessary";
            return true
        }
    }

    const handleContinue = async () => {
        if (paymentMethod && shippingMethod) {
            const isPlaceSelected = await selectedPlaceForDeliveryPoint();

            if (isPlaceSelected) {
                history.push({
                    pathname: "/buyer-info-check",
                    boxContent: boxContent,
                    totalBoxQuantity: totalBoxQuantity,
                    price: price,
                    buyerInformation: buyerInformation,
                    paymentMethod: paymentMethod,
                    shippingMethod: shippingMethod,
                    afterDiscount: afterDiscount,
                    selectedPlace: placeSelected,
                    orderId: orderId
                });
            }
        }
    }

    if (location.boxContent && location.totalBoxQuantity && location.price && location.buyerInformation)
        return (
            <div className="shipping-and-payment-method">
                <h1>Táto čokoláda stojí za to <strong>{price}&nbsp;€</strong></h1>
                <span style={{ display: afterDiscountDisplay }}>(po zľave)</span>
                <span style={{ display: wrongCodeDisplay, color: 'red' }}>Nesprávny zľavový kód.</span>
                <div className="discount">
                    <h2>Mám zľavový kupón</h2>
                    <input ref={discountCodeInput} type="text" />
                    <button onClick={handleDiscount}><i class="fas fa-check"></i></button>
                </div>
                <div className="payment-method">
                    <h2>Ako budeš platiť?</h2>
                    <div>
                        <label>
                            <input onClick={handleSetPayment} value="online" name="payment-method" type="radio" />
                        Online platba
                    </label>
                        <p>+ 0,00 €</p>
                    </div>
                    <div>
                        <label>
                            <input onClick={handleSetPayment} value="cash" name="payment-method" type="radio" />
                        Dobierka
                    </label>
                        <p>+ 1,00 €</p>
                    </div>
                </div>
                <div className="shipping-method">
                    <h2>Ako chceš box doručiť?</h2>
                    <div>
                        <label>
                            <input onClick={handleSetShipping} value="courier" name="shipping-method" type="radio" />
                        Kuriérom k tebe domov
                    </label>
                        <p>+ 3,50 €</p>
                    </div>
                    <div>
                        <label>
                            <input onClick={handleSetShipping} value="pickUpAtStore" name="shipping-method" type="radio" />
                        Osobný odber <small style={{ fontSize: "0.75em" }} >(Jarabinkova 2/C, 821 09 Bratislava)</small>
                    </label>
                        <p>+ 0,00 €</p>
                    </div>
                    <div>
                        <label>
                            <input onClick={handleSetShipping} value="deliveryPoint" name="shipping-method" type="radio" />
                        Odberné miesto
                    </label>
                        <p>+ 1,70 €</p>
                    </div>
                    <iframe
                        className="depo-integration"
                        style={{ display: depoDisplay }}
                        src={`https://admin.depo.sk/eshop?c=223&o=${generateOrderId()}`}
                        frameBorder="0"
                    >
                    </iframe>
                </div>
                <span
                    style={{
                        display: selectDeliveryPointDisplay,
                        color: "red",
                        marginTop: "3vh"
                    }}
                >
                    Vyber si odberné miesto.
            </span>
                <div className="flex">
                    <button onClick={handleContinue} className="confirm">Pokračovať</button>
                </div>
            </div>
        )
    else return (
        <Redirect to="/" />
    )

}

export default ShippingAndPaymentMethod