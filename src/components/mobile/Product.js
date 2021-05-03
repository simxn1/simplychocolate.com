import React from 'react';
import { useHistory } from 'react-router-dom';
import Typical from "react-typical";
import OpenProductNutrition from '../mutual/OpenProductNutrition';
import Cart from "./Cart";
import ProductNutrition from "./ProductNutrition";

const Product = (props) => {

    let history = useHistory();

    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [boxContent, setBoxContent] = React.useState([{
        grainyBilly: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    }, "unselected"]);
    const [hintDisplay, setHintDisplay] = React.useState("none");
    const [nutritionDisplay, setNutritionDisplay] = React.useState("none");

    const openCart = () => {
        setCartDisplay("block");
        props.onOpenCart();
    }

    const closeCart = () => {
        setCartDisplay("none");
    }

    const toggleNutritionDisplay = () => {
        if (nutritionDisplay == "none") {
            setNutritionDisplay("block");
        }
        else {
            setNutritionDisplay("none");
        }
    }

    const productNameToObjectKey = (name) => {
        let firstName = name.split(" ")[0];
        let secondName = name.split(" ")[1];
        let secondNameCapitalized = secondName.charAt(0).toUpperCase() + secondName.slice(1);
        let objectKey = firstName + secondNameCapitalized;

        return objectKey
    }

    const setNewBoxContent = (productsCount) => {
        let newBoxContent = boxContent;
        newBoxContent[0][productNameToObjectKey(props.name)] = productsCount;
        newBoxContent[1] = productsCount;

        return newBoxContent;
    }

    const setQuantity = (event) => {
        let boxSizeSelected = event.target.children.item(0) ? event.target.children.item(0).textContent.trim() : event.target.textContent.trim();

        switch (boxSizeSelected) {
            case "S":
                setBoxContent(setNewBoxContent(6));
                break;
            case "M":
                setBoxContent(setNewBoxContent(12));
                break;
            case "L":
                setBoxContent(setNewBoxContent(24));
                break;
            case "XL":
                setBoxContent(setNewBoxContent(30));
                break;
        }

        const boxSizes = event.target.parentElement.parentElement.children;
        for (let item of boxSizes) {
            item.children[0].classList.remove("active");
        }

        event.target.classList.add("active");
    }

    const handleThisFlavour = () => {
        if (boxContent[1] === "unselected") {
            setHintDisplay("block");
        }
        else {
            history.push({
                pathname: '/buyer-info',
                boxContent: boxContent[0],
                totalBoxQuantity: boxContent[1],
                from: "/#products"
            });
        }
    }

    const handleMixOwn = () => {
        history.push({
            pathname: '/mixed-box',
            from: "/#products"
        })
    }

    return (
        <div
            style={{
                background: `url(img/mobile/${props.name.replace(" ", "")}-bg.webp) no-repeat`,
                backgroundPosition: '50% 40%',
                backgroundSize: 'cover'
            }}
            className="section product-section"
        >
            <OpenProductNutrition 
                handleClick={toggleNutritionDisplay} 
                top="35%" 
                left="65%" 
                fontSize="0.9em" 
            />
            <h1
                style={{ color: props.color }}
                className="product-heading"
            >
                {props.name.split(" ")[0]}
                <Typical
                    steps={['', 1400, props.name.split(" ")[1], 1200]}
                    loop={Infinity}
                    wrapper="div"
                />
            </h1>
            <strong style={{ color: props.color }} className="price">2,29€</strong>
            <img
                src={`/img/mobile/${props.name.replace(" ", "")}-bar.webp`}
                className="product"
                data-aos="fade-right"
            >
            </img>
            <div onClick={openCart} className="open-cart">
                <button style={{ color: props.color }}>Chcem túto tyčinku</button>
            </div>
            <p className="product-desc">
                {props.textFirst}<br />
                {props.textSecond}<br />
                {props.textThird}
            </p>
            <img className="product-icons" src={`/img/mobile/mobile-${props.icons}-icons.webp`} />
            <Cart
                cartDisplay={cartDisplay}
                closeCart={closeCart}
                hintDisplay={hintDisplay}
                handleThisFlavour={handleThisFlavour}
                handleMixOwn={handleMixOwn}
                setQuantity={setQuantity}
            />
            <ProductNutrition 
                nutritionDisplay={nutritionDisplay}
                toggleNutritionDisplay={toggleNutritionDisplay}
                nutritionDesc={props.nutritionDesc}
                nutrition={props.nutrition}
            />
        </div>
    )
}

export default Product