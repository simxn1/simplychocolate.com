import React from "react";
import { useHistory } from "react-router-dom";

import { ORDER } from "../../config/endpoints"
const URL = ORDER;

const AfterPayment = () => {

    const history = useHistory();

    const urlParams = new URLSearchParams(window.location.search);
    const paymentId = urlParams.get("id")

    React.useEffect(async () => {

        if (paymentId) {
            const response = await window.fetch(URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    paymentId: paymentId
                })
            })
            console.log(response.json());
        }

    }, []);

    return (
        <div className="after-payment">
            <h1>Ďakujeme za Vašu objednávku!</h1>
            <h2>Skontrolujte si prosím Váš e-mail.</h2>
            <a onClick={() => history.push({ pathname: "/" })}>späť domov</a>
        </div>
    )
}

export default AfterPayment