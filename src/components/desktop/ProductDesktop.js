import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { useHistory } from 'react-router-dom';
import Typical from "react-typical";
import CartDesktop from './CartDesktop';
import OpenProductNutrition from '../mutual/OpenProductNutrition';
import ProductNutritionDesktop from './ProductNutritionDesktop';

const ProductDesktop = (props) => {

    let history = useHistory();

    const [cartDisplay, setCartDisplay] = React.useState('none');
    const [boxContent, setBoxContent] = React.useState([{
        grainyBilly: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    }, 'unselected']);
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
                setBoxSize("S");
                setBoxContent(setNewBoxContent(6));
                break;
            case "M":
                setBoxSize("M");
                setBoxContent(setNewBoxContent(12));
                break;
            case "L":
                setBoxSize("L");
                setBoxContent(setNewBoxContent(24));
                break;
            case "XL":
                setBoxSize("XL");
                setBoxContent(setNewBoxContent(30));
                break;
        }
    }

    const handleThisFlavour = () => {
        if (boxContent[1] === "unselected") {
            setHintDisplay("inline");
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
            boxSize: boxSize,
            from: "/#products",
        })
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
                setQuantity={setQuantity}
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