import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { CHECKOUT, CHECKOUT_CASH } from "../../../config/endpoints";
const URL_CHECKOUT = CHECKOUT;
const URL_CHECKOUT_CASH = CHECKOUT_CASH;

const CheckBuyerInformation = (props) => {

    let location = useLocation();
    let history = useHistory();

    const boxQuantity = {
        grainyBilly: props.boxQuantity[0],
        crispyCarrie: props.boxQuantity[1],
        grainySue: props.boxQuantity[2],
        fitFiona: props.boxQuantity[3],
        richArnold: props.boxQuantity[4],
        speedyTom: props.boxQuantity[5]
    };

    const [billingInformation, setBillingInformation] = React.useState(location.buyerInformation);
    const [deliveryInformation, setDeliveryInformation] = React.useState({
        firstName: "-",
        lastName: "-",
        address: "-",
        city: "-",
        zipCode: "-"
    });
    const [secondFormDisplay, setSecondFormDisplay] = React.useState("none");
    const [termsAgreed, setTermsAgreed] = React.useState(true);
    const [buttonMarginTop, setButtonMarginTop] = React.useState("5vh");

    const firstNameInput = React.useRef();
    const lastNameInput = React.useRef();
    const adressInput = React.useRef();
    const cityInput = React.useRef();
    const zipCodeInput = React.useRef();
    const phoneInput = React.useRef();
    const emailInput = React.useRef();

    const deliveryFirstNameInput = React.useRef();
    const deliveryLastNameInput = React.useRef();
    const deliveryAddressInput = React.useRef();
    const deliveryCityInput = React.useRef();
    const deliveryZipCodeInput = React.useRef();

    React.useEffect(() => {
        firstNameInput.current.value = billingInformation.firstName;
        lastNameInput.current.value = billingInformation.lastName;
        adressInput.current.value = billingInformation.address;
        cityInput.current.value = billingInformation.city;
        zipCodeInput.current.value = billingInformation.zipCode;
        phoneInput.current.value = billingInformation.phone;
        emailInput.current.value = billingInformation.email;
    }, [])

    const changeBillingInformation = (event) => {
        setBillingInformation(() => {
            let newBillingInformation = billingInformation;
            newBillingInformation[event.target.name] = event.target.value;
       
            return newBillingInformation;
        });
    }

    const changeDeliveryInformation = (event) => {
        setDeliveryInformation(() => {
            let newDeliveryInformation = deliveryInformation;
            newDeliveryInformation[event.target.name] = event.target.value;

            return newDeliveryInformation;
        });
    }

    const handleCheckboxChange = () => {
        if (secondFormDisplay === "none") {
            setSecondFormDisplay("block");
            setButtonMarginTop("4vh");
        }
        else {
            setSecondFormDisplay("none");
            setButtonMarginTop("10vh");
        }
    }

    const toggleTermsAgreed = () => {
        setTermsAgreed(!termsAgreed);
    }

    const handleConfirmCheckout = async () => {
        if (location.shippingMethod !== "courier") {
            setDeliveryInformation(() => {
                let newDeliveryInformation = deliveryInformation;
    
                newDeliveryInformation.firstName = billingInformation.firstName;
                newDeliveryInformation.lastName = billingInformation.lastName;
                newDeliveryInformation.address = billingInformation.address;
                newDeliveryInformation.city = billingInformation.city;
                newDeliveryInformation.zipCode = billingInformation.zipCode;

                return newDeliveryInformation
            })
        }
        else {
            setDeliveryInformation(() => {
                let newDeliveryInformation = deliveryInformation;
    
                newDeliveryInformation.firstName = deliveryFirstNameInput.current.value;
                newDeliveryInformation.lastName = deliveryLastNameInput.current.value;
                newDeliveryInformation.address = deliveryAddressInput.current.value;
                newDeliveryInformation.city = deliveryCityInput.current.value;
                newDeliveryInformation.zipCode = deliveryZipCodeInput.current.value;
            })
        }
        
        const gopayResponse = await window.fetch(URL_CHECKOUT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                boxContent: boxQuantity,
                secondBoxContent: props.productsSecondQuantity,
                totalBoxQuantity: props.totalBoxQuantity,
                price: parseFloat(props.totalPrice.replace(/,/g, "")),
                billingInfo: billingInformation,
                deliveryInfo: deliveryInformation,
                paymentMethod: location.paymentMethod,
                shippingMethod: location.shippingMethod,
                afterDiscount: location.afterDiscount,
                orderNumber: location.orderId,
                discountCode: location.discountCode,
                placeSelectedID: location.placeSelectedID
            })
        });

        const gopayResponseJson = await gopayResponse.json();
        window.location.href = gopayResponseJson.gw_url;
    }

    const handleConfirmCashCheckout = async () => {
        const response = await fetch(URL_CHECKOUT_CASH, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                boxContent: boxQuantity,
                secondBoxContent: props.productsSecondQuantity,
                totalBoxQuantity: props.totalBoxQuantity,
                price: parseFloat(props.totalPrice.replace(/,/g, "")),
                billingInfo: billingInformation,
                deliveryInfo: deliveryInformation,
                paymentMethod: location.paymentMethod,
                shippingMethod: location.shippingMethod,
                afterDiscount: location.afterDiscount,
                orderNumber: location.orderId,
                discountCode: location.discountCode,
                placeSelectedID: location.placeSelectedID
            })
        });

        const cashCheckoutResponse = await response.json();
        history.push({
            pathname: cashCheckoutResponse.url
        });
    };

    const handleContinue = () => {
        if (termsAgreed) {
            return location.paymentMethod === "cash" ? handleConfirmCashCheckout() : handleConfirmCheckout() 
        }
    }

    const differentDeliveryElement = location.shippingMethod === "courier" ? 
    <>
        <label><input onChange={handleCheckboxChange} type="checkbox" />Na doručenie použiť odlišnú adresu</label>
        <div style={{ display: secondFormDisplay }} className="different-address-delivery">
            <form>
                <input onChange={changeDeliveryInformation} ref={deliveryFirstNameInput} type="text" placeholder="Meno" name="deliverToFirstName"></input>
                <input onChange={changeDeliveryInformation} ref={deliveryLastNameInput} type="text" placeholder="Priezvisko" name="deliverToLastName"></input>
                <input onChange={changeDeliveryInformation} ref={deliveryAddressInput} type="text" placeholder="Adresa" name="deliverToAddress"></input>
                <input onChange={changeDeliveryInformation} ref={deliveryCityInput} type="text" placeholder="Mesto" name="deliverToCity"></input>
                <input onChange={changeDeliveryInformation} ref={deliveryZipCodeInput} type="text" placeholder="PSČ" name="deliverToZipCode"></input>
            </form>
        </div>
    </>
    : null;

    if (location.buyerInformation && props.boxQuantity && props.totalBoxQuantity || props.productsSecondQuantity) 
    return (
        <div className="check-buyer-info">
            <h1>Máme správne údaje?</h1>
            <h3>(Upravíte kliknutím na údaj)</h3>
            <div className="billing-information">
                <ul>
                    <li>Meno:</li>
                    <li>Priezvisko:</li>
                    <li>Ulica:</li>
                    <li>Mesto:</li>
                    <li>PSČ:</li>
                    <li>Telefónne číslo:</li>
                    <li>Email:</li>
                </ul>
                <form>
                    <input onChange={changeBillingInformation} type="text" name="firstName" ref={firstNameInput} />
                    <input onChange={changeBillingInformation} type="text" name="lastName" ref={lastNameInput} />
                    <input onChange={changeBillingInformation} type="text" name="address" ref={adressInput} />
                    <input onChange={changeBillingInformation} type="text" name="city" ref={cityInput} />
                    <input onChange={changeBillingInformation} type="text" name="zipCode" ref={zipCodeInput} />
                    <input onChange={changeBillingInformation} type="text" name="phone" ref={phoneInput} />
                    <input onChange={changeBillingInformation} type="email" name="email" ref={emailInput} />
                </form>
            </div>
            {differentDeliveryElement && differentDeliveryElement}
            <div className="flex">
                <label className="terms-agree">
                    <input type="checkbox" checked={termsAgreed} onClick={toggleTermsAgreed} />
                    Súhlasím s<a href="/obchodne-podmienky" target="_blank">&nbsp;obchodnými podmienkami</a>
                </label>
                <button 
                    onClick={handleContinue} 
                    style={{ marginTop: buttonMarginTop }} 
                    className="confirm"
                >
                    Objednať
                </button>
            </div>
        </div>
    )
    else return (
        <Redirect to="/" />
    )
}

export default CheckBuyerInformation