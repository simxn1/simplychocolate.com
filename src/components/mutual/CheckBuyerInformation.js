import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

import { CHECKOUT } from "../../config/endpoints";
const URL = CHECKOUT;

const CheckBuyerInformation = () => {


    let location = useLocation();

    //const [boxContent, setBoxContent] = React.useState();
    //const [totalBoxQuantity, setTotalBoxQuantity] = React.useState();
    const [billingInformation, setBillingInformation] = React.useState(location.buyerInformation);
    const [deliveryInformation, setDeliveryInformation] = React.useState({
        firstName: "-",
        lastName: "-",
        address: "-",
        city: "-",
        zipCode: "-"
    });
    const [secondFormDisplay, setSecondFormDisplay] = React.useState("none");
    const [buttonMarginTop, setButtonMarginTop] = React.useState("10vh");

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
        console.log(location);
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

    const handleCheckboxChange = (event) => {
        if (secondFormDisplay === "none") {
            setSecondFormDisplay("block");
            setButtonMarginTop("4vh");
        }
        else {
            setSecondFormDisplay("none");
            setButtonMarginTop("10vh");
        }
    }

    const handleConfirmCheckout = async () => {
        if (deliveryFirstNameInput.current.value.length == 0 ||
            deliveryLastNameInput.current.value.length == 0 ||
            deliveryAddressInput.current.value.length == 0 ||
            deliveryCityInput.current.value.length == 0 ||
            deliveryZipCodeInput.current.value.length == 0 
        ) {
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
        
        /*console.log(
            location.afterDiscount,
            location.boxContent,
            location.totalBoxQuantity,
            location.price,
            billingInformation,
            deliveryInformation,
            location.paymentMethod,
            location.shippingMethod
        );*/
        
        const gopayResponse = await window.fetch(URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                boxContent: location.boxContent,
                totalBoxQuantity: location.totalBoxQuantity,
                price: parseFloat(location.price.replace(/,/g, "")),
                billingInfo: billingInformation,
                deliveryInfo: deliveryInformation,
                paymentMethod: location.paymentMethod,
                shippingMethod: location.shippingMethod,
                afterDiscount: location.afterDiscount,
                orderNumber: location.orderId
            })
        });

        const gopayResponseJson = await gopayResponse.json();
        window.location.href = gopayResponseJson.gw_url;
    }

    if (location.buyerInformation && location.boxContent && location.totalBoxQuantity) 
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
            <div className="flex">
                <button onClick={handleConfirmCheckout} style={{ marginTop: buttonMarginTop }} className="confirm">
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