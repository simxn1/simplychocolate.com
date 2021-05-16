import React from "react";
import { useHistory } from "react-router";
import ProductsSecondCount from "./ProductsSecondCount";

const ChocolateBox = (props) => {

    let history = useHistory();

    const [reminderDisplay, setReminderDisplay] = React.useState("none");

    const handleCheckout = () => {
        if (props.productsSecondQuantity[0] || props.productsSecondQuantity[1]) {
            history.push({
                pathname: "/cart-check"
            })
        }
        else {
            setReminderDisplay("block");
        }
    }

    const handleGoBack = () => {
        history.push({
            pathname: "/mixed-box"
        })
    }

    return (
        <div className="chocolate-box">
            <span onClick={handleGoBack} className="back">
                <i class="fas fa-long-arrow-alt-left"></i>
            </span>
            <h1>
                Mám chuť aj na bonboniéry!
            </h1>
            <h2>
                Objednaj si Simply Chocolate už dnes!
            </h2>
            <ProductsSecondCount
                productsSecondQuantity={props.productsSecondQuantity}
                setProductsSecondQuantity={props.setProductsSecondQuantity}
            />
            <span style={{
                color: 'red',
                display: reminderDisplay,
                textAlign: 'center',
                fontFamily: 'Open Sans Bold',
                marginTop: '2vh'
            }}
            >
                Vyberte si množstvo bonboniér.
            </span>
            <button onClick={handleCheckout}>
                Mám všetko a chcem platiť
            </button>
        </div>
    )
}

export default ChocolateBox