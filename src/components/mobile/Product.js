import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = (props) => {

    let history = useHistory();

    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [boxContent, setBoxContent] = React.useState([{
        grainyBilly: 0,
        creamyCarol: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    }, "unselected"]);
    const [hintDisplay, setHintDisplay] = React.useState("none");

    const openCart = () => {
        setCartDisplay("block");
        props.onOpenCart();
    }

    const closeCart = () => {
        setCartDisplay("none");
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
        //setBoxContent([props.name, event.target.children.item(0).textContent.trim()])
        let boxSizeSelected = event.target.children.item(0).textContent.trim();

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
    }

    const handleThisFlavour = () => {
        if (boxContent[1] === "unselected") {
            setHintDisplay("block");
        }
        else {
            history.push({
                pathname: '/buyer-info',
                boxContent: boxContent[0],
                totalBoxQuantity: boxContent[1]
            });
        }
    }

    const handleMixOwn = () => {
        history.push({
            pathname: '/mixed-box'
        })
    }
 
    return (
        <div 
            style={{ 
                background: `url(img/mobile/${props.name.replace(" ", "")}-bg.jpg) no-repeat`,
                backgroundPosition: '50% 32.5%',
                backgroundSize: 'cover'
            }}
            className="section"
        >
            <h1 
                style={{ color: props.color }} 
                className="product-heading"
            >
                {props.name.split(" ")[0]}<br />
                {props.name.split(" ")[1]}
            </h1>
            <strong style={{ color: props.color }} className="price">2,29€</strong>
            <img src={`/img/mobile/${props.name.replace(" ", "")}-bar.png`} className="product">
            </img>
            <div onClick={openCart} className="open-cart">
                <button style={{ color: props.color }}>Chcem túto tyčinku</button>
            </div>
            <div style={{ display: cartDisplay }} className="cart"> 
                <i 
                    class="fas fa-times" 
                    onClick={cartDisplay == "block" ? closeCart : undefined}
                >
                </i>
                <h2>
                    máš chuť na čokolásku?
                </h2>
                <h3>
                    objednaj si Simply Chocolate už dnes!
                </h3>
                <h2 style={{ marginTop: "7%" }}>
                    veľkosť
                </h2>
                <ul className="box-sizes">
                    <li><button onClick={setQuantity}>6ks - <strong>S</strong> - 13,50€</button></li>
                    <li><button onClick={setQuantity}>12ks - <strong>M</strong> - 24,50€</button></li>
                    <li><button onClick={setQuantity}>24ks - <strong>L</strong> - 47,50€</button></li>
                    <li><button onClick={setQuantity}>30ks - <strong>XL</strong> - 56,60€</button></li>
                </ul>
                <span 
                    style={{ 
                            display: hintDisplay,
                            color: `red`, 
                            fontFamily: `Social Gothic Demi-Bold`, 
                            textTransform: `uppercase` 
                        }}
                >
                    vyber si veľkosť boxu.
                </span>
                <button onClick={handleThisFlavour}>
                    chcem túto príchuť
                </button><br />
                <button onClick={handleMixOwn}>namixujem si vlastný box</button>
            </div>
            <p className="product-desc">
                {props.textFirst}<br />
                {props.textSecond}<br />
                {props.textThird}
            </p>
            <img className="product-icons" src={`/img/mobile/mobile-${props.icons}-icons.png`} />
        </div>
    );

}

export default Product