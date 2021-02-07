import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory, useLocation } from 'react-router-dom';


const ShippingAndPaymentMethod = () => {

    const { register, handleSubmit } = useForm();

    let location = useLocation();
    let history = useHistory();

    const [boxContent, setBoxContent] = React.useState();
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState();
    const [price, setPrice] = React.useState();
    const [buyerInformation, setBuyerInformation] = React.useState();
    const [afterDiscount, setAfterDiscount] = React.useState(false);
    const [afterDiscountDisplay, setAfterDiscountDisplay] = React.useState("none");
    const [wrongCodeDisplay, setWrongCodeDisplay] = React.useState("none");
    const [paymentMethod, setPaymentMethod] = React.useState();
    const [paymentMethodFee, setPaymentMethodFee] = React.useState(0);
    const [shippingMethod, setShippingMethod] = React.useState();
    const [shippingMethodFee, setShippingMethodFee] = React.useState(0);

    const discountCodeInput = React.useRef();

    React.useEffect(() => {
        setBoxContent(location.boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity);
        setPrice(location.price);
        setBuyerInformation(location.buyerInformation);
    }, [])

    const discountCodes = ['SIMPLY5', 'SIMPLY10'];

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
                let priceAfterDiscount = formatToNumber(location.price, 'price') / 100 * pricePercentAfterDiscount;
                return formatToPrice(priceAfterDiscount);
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
        }
        else if (newShippingMethod === "deliveryPoint") {
            setNewShippingMethodFee(1.70);
        }
        else if (newShippingMethod === "pickUpAtStore") {
            setNewShippingMethodFee(0.0004);
        }

        setShippingMethod(newShippingMethod);
    }

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
                <h2>Ako chces box doručiť?</h2>
                <div>
                    <label>
                        <input onClick={handleSetShipping} value="courier" name="shipping-method" type="radio" />
                        Kuriérom k tebe domov
                    </label>
                    <p>+ 3,50 €</p>
                </div>
                <div>
                    <label>
                        <input onClick={handleSetShipping} value="deliveryPoint" name="shipping-method" type="radio" />
                        Odberné miesto
                    </label>
                    <p>+ 1,70 €</p>
                </div>
                <div>
                    <label>
                        <input onClick={handleSetShipping} value="pickUpAtStore" name="shipping-method" type="radio" />
                        Osobný odber
                    </label>
                    <p>+ 0,00 €</p>
                </div>
            </div>
        </div>
    )
    
}

export default ShippingAndPaymentMethod