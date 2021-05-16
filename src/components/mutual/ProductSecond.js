import React from "react";
import OpenProductNutrition from "./OpenProductNutrition";
import ProductNutritionDesktop from "../desktop/ProductNutritionDesktop";
import ProductNutrition from "../mobile/ProductNutrition";
import ProductsSecondCount from "./ProductsSecondCount";
import { isMobile } from "react-device-detect";
import { useHistory } from "react-router";

const ProductSecond = (props) => {

    const history = useHistory();

    const [nutritionDisplay, setNutritionDisplay] = React.useState("none");
    const [cartDisplay, setCartDisplay] = React.useState("none");

    const price = props.price.toString().slice(0, 2) + "," + props.price.toString().slice(2);
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

    const handleContinueShopping = () => {
        if (props.productsSecondQuantity[0] || props.productsSecondQuantity[1]) {
            history.push({
                pathname: "/mixed-box",
                from: "/#products"
            });
        }
    }

    const handleCheckout = () => {
        if (props.productsSecondQuantity[0] || props.productsSecondQuantity[1]) {
            history.push({
                pathname: "/cart-check",
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
                    {price + " €"}
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
                <ProductsSecondCount 
                    productsSecondQuantity={props.productsSecondQuantity}
                    setProductsSecondQuantity={props.setProductsSecondQuantity}
                />
                <button onClick={handleContinueShopping}>mám chuť aj na tyčinky</button>
                <button onClick={handleCheckout}>mám všetko a chcem platiť</button>
            </div> 
        </div>
    )
}

export default ProductSecond