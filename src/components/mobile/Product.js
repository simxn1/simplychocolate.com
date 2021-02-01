import React from 'react';

const Product = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [cartContent, setCartContent] = React.useState([props.name, "unselected"]);
    const [hintDisplay, setHintDisplay] = React.useState("none");

    const openCart = () => {
        setCartDisplay("block");
        props.onOpenCart();
    }

    const closeCart = () => {
        setCartDisplay("none");
    }

    const setQuantity = (event) => {
        setCartContent([props.name, event.target.children.item(0).textContent.trim()])
    }

    const handleThisAromaBuy = () => {
        if (cartContent[1] === "unselected") {
            setHintDisplay("block");
        }
        else {
            console.log(cartContent);
        }
    }

    const handleMixAromaBuy = () => {
        console.log(cartContent);
    }
 
    return (
        <div style={{ backgroundColor: props.color }} className="section">
            <img 
                src={`img/mobile/mobile-${props.name.replace(" ", "")}.png`} 
                className="slide-bg product-bg"
            />
            <h1 
                style={{ color: props.color }} 
                className="product-heading"
            >
                {props.name.split(" ")[0]}<br />
                {props.name.split(" ")[1]}
            </h1>
            <strong style={{ color: props.color }} className="price">2,29€</strong>
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
                    vyber si veľkosť.
                </span>
                <button onClick={handleThisAromaBuy}>
                    chcem túto príchuť
                </button><br />
                <button onClick={handleMixAromaBuy}>namixujem si vlastný box</button>
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