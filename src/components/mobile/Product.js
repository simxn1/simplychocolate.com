import React from 'react';

const Product = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState("none");
    const [cartContent, setCartContent] = React.useState([props.name, "unselected"]);

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
                    <li><button onClick={setQuantity}><strong>S </strong>- 6ks</button></li>
                    <li><button onClick={setQuantity}><strong>M </strong>- 12ks</button></li>
                    <li><button onClick={setQuantity}><strong>L </strong>- 20ks</button></li>
                    <li><button onClick={setQuantity}><strong>XL </strong>- 30ks</button></li>
                </ul>
                <button onClick={() => console.log(cartContent)}>
                    chcem túto príchuť
                </button><br />
                <button>namixujem si vlastný box</button>
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