import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ORDER } from "../../config/endpoints"
const URL = ORDER;

const AfterPayment = () => {

    const history = useHistory();

    const [orderPaid, setOrderPaid] = React.useState("not yet"); 

    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("id")

    useEffect(async () => {

        if (paymentId) {
            const response = await window.fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    paymentId: paymentId
                })
            });
            let orderState = await response.json();

            setOrderPaid(() => orderState);
            console.log(orderPaid, typeof orderPaid);
        }
        else {
            setOrderPaid("yes");
            console.log(orderPaid);
        }
        

    });

    let afterPaymentText;
    if (orderPaid == "yes") {
        afterPaymentText = "Skontrolujte si prosím Váš email."
        console.log(orderPaid, orderPaid.length);
    }
    else if (orderPaid != "yes"){
        afterPaymentText = "Uhraďte prosím platbu."
        console.log(orderPaid, orderPaid.length);
    }

    return (
        <div className="after-payment">
            <h1>Ďakujeme za Vašu objednávku!</h1>
            <h2>
                {afterPaymentText}
            </h2>
            <a onClick={() => history.push({ pathname: "/" })}>späť domov</a>
        </div>
    )
}

export default AfterPayment