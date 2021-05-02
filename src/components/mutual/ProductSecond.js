import React from "react";
import OpenProductNutrition from "./OpenProductNutrition";
import ProductNutritionDesktop from "../desktop/ProductNutritionDesktop";
import ProductNutrition from "../mobile/ProductNutrition";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router";

const ProductSecond = (props) => {

    const history = useHistory();

    const [nutritionDisplay, setNutritionDisplay] = React.useState("none");
    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [secondBoxContent, setSecondBoxContent] = React.useState([0, 0]);

    const name = props.firstLine + props.secondLine;
    const device = isMobile ? "mobile" : "desktop";

    const toggleNutritionDisplay = () => {
        if (nutritionDisplay === "none") {
            setNutritionDisplay("block");
        }
        else {
            setNutritionDisplay("none");
        }
    }

    const toggleCartDisplay = () => {
        if (cartDisplay == "none") {
            setCartDisplay("block");
        }
        else {
            setCartDisplay("none");
        }
    }

    const handleChangeQuantity = (event) => {
        const thisProductQuantity = event.target.parentNode;
        const isIncrement = event.target.textContent === "+" ? true : false;
        const amountToChangeBy = isIncrement ? 1 : -1;

        let allQuantities = [];
        for (const element of thisProductQuantity.parentNode.children) {
            if (element.tagName == "DIV") {
                allQuantities.push(element);
            }
        }
        const thisProductQuantityIndex = allQuantities.indexOf(thisProductQuantity);

        setSecondBoxContent(() => {
            let newSecondBoxContent = [...secondBoxContent];
            if (newSecondBoxContent[thisProductQuantityIndex] != 0 || isIncrement) {
                newSecondBoxContent[thisProductQuantityIndex] = newSecondBoxContent[thisProductQuantityIndex] + amountToChangeBy;
            }
            return newSecondBoxContent;
        });
    }

    const handleContinueShopping = () => {
        if (secondBoxContent[0] || secondBoxContent[1]) {
            history.push({
                pathname: "/mixed-box",
                secondBoxContent: secondBoxContent,
                from: "/#products"
            });
        }
    }

    const handleCheckout = () => {
        if (secondBoxContent[0] || secondBoxContent[1]) {
            history.push({
                pathname: "/buyer-info",
                secondBoxContent: secondBoxContent,
                from: "/#products"
            });
        }
    }

    return (
        <div className="desktop-section product-second" style={{ background: `url('/img/${device}/${name.replaceAll(" ", "-")}-bg.webp')` }}>
            <div className="product-info">
                <h1 className="heading" style={{ color: props.color }}>
                    {props.firstLine}<br />
                    {props.secondLine}
                </h1>
                <h2 className="price" style={{ color: props.priceColor }}>
                    {props.price.slice(0, 2) + "," + props.price.slice(2) + " €"}
                </h2>
                <p className="description">
                    {props.price == 2000 ? 24 : 12} kusov zmiešaných čokoládových bonbónov rôznych chutí.
                </p>
                <img src={`/img/mutual/${name.replaceAll(" ", "-")}.webp`}></img>
                <OpenProductNutrition 
                    handleClick={toggleNutritionDisplay} 
                    position="relative"
                    fontSize="1em"
                />
            </div>
            <img src={`/img/mutual/${name.replaceAll(" ", "-")}.webp`}></img>
            <button onClick={toggleCartDisplay} style={{ color: "#fff", backgroundColor: props.color }}>
                chcem bonboniéru!
            </button>
            {
                isMobile ? 
                <ProductNutrition
                    nutritionDisplay={nutritionDisplay}
                    toggleNutritionDisplay={toggleNutritionDisplay}
                    nutrition={props.nutrition}
                    nutritionDesc={props.nutritionDesc}
                /> :
                <ProductNutritionDesktop
                    nutritionDisplay={nutritionDisplay}
                    toggleNutritionDisplay={toggleNutritionDisplay}
                    nutrition={props.nutrition}
                    nutritionDesc={props.nutritionDesc}
                />
            }
            <div className="product-second-cart" style={{ display: cartDisplay }}>
                <i class="fas fa-times" onClick={toggleCartDisplay} />
                <h1>máš chuť na čokolásku?</h1>
                <p>objednaj si Simply Chocolate už dnes!</p>
                <div className="count">
                    <div className="product-pics">
                        <img src="/img/mutual/yes-you-can-buy-love.webp"></img>
                        <img src="/img/mutual/instead-of-flowers.webp"></img>
                    </div>
                    <div className="product-quantities">
                        <strong>množstvo</strong>
                        <div>
                            <button onClick={handleChangeQuantity}>-</button>
                            <span>{secondBoxContent[0]}</span>
                            <button onClick={handleChangeQuantity}>+</button>
                        </div>
                        <div>
                            <button onClick={handleChangeQuantity}>-</button>
                            <span>{secondBoxContent[1]}</span>
                            <button onClick={handleChangeQuantity}>+</button>
                        </div>
                    </div>
                </div>
                <button onClick={handleContinueShopping}>mám chuť aj na tyčinky</button>
                <button onClick={handleCheckout}>mám všetko a chcem platiť</button>
            </div> 
        </div>
    )
}

export default ProductSecond