import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { useHistory } from 'react-router-dom';
import Typical from "react-typical";
import CartDesktop from './CartDesktop';
import OpenProductNutrition from '../mutual/OpenProductNutrition';
import ProductNutritionDesktop from './ProductNutritionDesktop';
import products from '../../constantData/products';

const ProductDesktop = (props) => {

    let history = useHistory();
    
    const boxQuantity = props.boxQuantity;
    const setBoxQuantity = props.setBoxQuantity;

    const [cartDisplay, setCartDisplay] = React.useState('none');
    const [boxSize, setBoxSize] = React.useState("unset");
    const [hintDisplay, setHintDisplay] = React.useState("none");
    const [nutritionDisplay, setNutritionDisplay] = React.useState("none");

    const toggleCartDisplay = (event) => {
        event.preventDefault();

        if (cartDisplay == "block") {
            setCartDisplay("none");
            setHintDisplay("none");
        }
        else {
            setCartDisplay("block");
            setHintDisplay("none");
        }
    }

    const toggleNutritionDisplay = (event) => {
        event.preventDefault();

        if (nutritionDisplay == "block") {
            return setNutritionDisplay("none");
        }
        else {
            return setNutritionDisplay("block");
        }
    }

    const newBoxQuantity = (productsCount) => {
        let newBoxQuantity = [...boxQuantity.fill(0)];
        const thisProductIndex = products.indexOf(products.find(product => product.name === props.name));

        newBoxQuantity[thisProductIndex] = productsCount;
        props.setTotalBoxQuantity(newBoxQuantity.reduce((a, b) => a + b, 0));

        return newBoxQuantity;
    }

    const handleSetThisProductQuantity = (event) => {
        let boxSizeSelected = event.target.children.item(0) ? event.target.children.item(0).textContent.trim() : event.target.textContent.trim();
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
    }

    const handleThisFlavour = () => {
        if (boxSize === "unset") {
            setHintDisplay("inline");
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
            boxSize: boxSize,
            from: "/#products",
        });
    }


    return (
        <div style={{ position: `relative` }}>
            <button onClick={toggleCartDisplay} style={{ color: props.color }} className="desktop-open-cart">
                chcem túto tyčinku!
            </button>
            <ReactCompareImage
                leftImage={`/img/desktop/${props.name.replace(/ /g, '')}.png`}
                leftImageLabel={
                    (
                        <div onClick={toggleCartDisplay} className="desktop-product-shown-section">
                            <h1 className="desktop-product-shown-heading desktop-heading">
                                {props.name.split(" ")[0]}
                            </h1>
                            <Typical
                                steps={['', 1400, props.name.split(" ")[1], 1200]}
                                loop={Infinity}
                                wrapper="h1"
                                className="desktop-product-shown-heading desktop-heading"
                            />
                            <strong className="desktop-price">2,29 €</strong>
                            <p className="desktop-product-shown-desc">
                                {props.textFirst}<br />
                                {props.textSecond}<br />
                                {props.textThird}
                            </p>
                            <img
                                src={`/img/desktop/${props.icons}-icons.png`}
                                className="desktop-product-icons"
                            >
                            </img>
                        </div>
                    )
                }
                rightImage={`/img/desktop/${props.name.replace(/ /g, '')}-white.png`}
                rightImageLabel={
                    (
                        <div className="desktop-product-hidden-section">
                            <h1
                                style={{ color: props.color }}
                                className="desktop-product-hidden-heading"
                            >
                                {props.name.split(" ")[0]}<br />
                                {props.name.split(" ")[1]}<br />
                            </h1>
                            <strong style={{ color: props.color }} className="desktop-price">2,29 €</strong>
                            <OpenProductNutrition 
                                handleClick={toggleNutritionDisplay} 
                                top="5vh" 
                                left="23vw" 
                                fontSize="1.5em"
                            />
                            <p className="desktop-product-hidden-desc">
                                {props.desc}
                            </p>
                        </div>
                    )
                }
                handle={<React.Fragment />}
            />
            <CartDesktop 
                cartDisplay={cartDisplay} 
                toggleCartDisplay={toggleCartDisplay} 
                handleSetThisProductQuantity={handleSetThisProductQuantity}
                hintDisplay={hintDisplay}
                handleThisFlavour={handleThisFlavour}
                handleMixOwn={handleMixOwn}
            />
            <ProductNutritionDesktop
                nutritionDisplay={nutritionDisplay}
                toggleNutritionDisplay={toggleNutritionDisplay}
                nutrition={props.nutrition}
                nutritionDesc={props.nutritionDesc}
            />
        </div>
    )

}

export default ProductDesktop