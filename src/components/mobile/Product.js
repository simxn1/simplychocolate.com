import React from 'react';
import { useHistory } from 'react-router-dom';
import Typical from "react-typical";
import OpenProductNutrition from '../mutual/OpenProductNutrition';
import Cart from "./Cart";
import ProductNutrition from "./ProductNutrition";
import products from "../../constantData/products";

const Product = (props) => {

    let history = useHistory();

    const boxQuantity = props.boxQuantity;
    const setBoxQuantity = props.setBoxQuantity;
    const setTotalBoxQuantity = props.setTotalBoxQuantity;

    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [boxSize, setBoxSize] = React.useState("unset");
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

    const newBoxQuantity = (productsCount) => {
        let newBoxQuantity = [...boxQuantity.fill(0)];
        const thisProductIndex = products.indexOf(products.find(product => product.name === props.name));

        newBoxQuantity[thisProductIndex] = productsCount;
        setTotalBoxQuantity(newBoxQuantity.reduce((a, b) => a + b, 0));

        return newBoxQuantity;
    }

    const addBorderToSelectedSize = (clickedSizeElement) => {
        const boxSizes = clickedSizeElement.parentElement.parentElement.children;
        for (let item of boxSizes) {
            item.children[0].classList.remove("active");
        }

        clickedSizeElement.classList.add("active");
    }

    const handleSetThisProductQuantity = (event) => {
        const clickedSizeElement = event.target;
        let boxSizeSelected = clickedSizeElement.children.item(0) ? clickedSizeElement.children.item(0).textContent.trim() : clickedSizeElement.textContent.trim();
        setBoxSize(boxSizeSelected);

        switch (boxSizeSelected) {
            case "S":
                setBoxQuantity(newBoxQuantity(6));
                break;
            case "M":
                setBoxQuantity(newBoxQuantity(12));
                break;
            case "L":
                setBoxQuantity(newBoxQuantity(24));
                break;
            case "XL":
                setBoxQuantity(newBoxQuantity(30));
                break;
        }

        addBorderToSelectedSize(clickedSizeElement);
    }

    const handleThisFlavour = () => {
        if (boxSize === "unset") {
            setHintDisplay("block");
        }
        else {
            history.push({
                pathname: '/cart-check',
                from: "/#products"
            });
        }
    }

    const handleMixOwn = () => {
        history.push({
            pathname: '/mixed-box',
            from: "/#products",
            boxSize: boxSize
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
                handleSetThisProductQuantity={handleSetThisProductQuantity}
                hintDisplay={hintDisplay}
                handleThisFlavour={handleThisFlavour}
                handleMixOwn={handleMixOwn}
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