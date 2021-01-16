import React from 'react';

const Product = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState("none")

    const openCart = () => {
        setCartDisplay("block")
    }

    const closeCart = () => {
        setCartDisplay("none")
    }

    return (
        <div style={{ backgroundColor: props.color }} className="section">
            <img 
                src={`img/mobile-${props.name.replace(" ", "")}.png`} 
                className="slide-bg product-bg"
                onClick={cartDisplay == "block" ? closeCart : undefined} 
            />
            <h1 
                style={{ color: props.color }} 
                className="product-heading"
                onClick={cartDisplay == "block" ? closeCart : undefined}
            >
                {props.name.split(" ")[0]}<br />
                {props.name.split(" ")[1]}
            </h1>
            <div onClick={openCart} className="open-cart">
                <button style={{ color: props.color }}>Chcem túto tyčinku</button>
            </div>
            <div style={{ display: `${cartDisplay}` }} className="cart">
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
                    <li><button><strong>S </strong>- 6ks</button></li>
                    <li><button><strong>M </strong>- 12ks</button></li>
                    <li><button><strong>L </strong>- 20ks</button></li>
                    <li><button><strong>XL </strong>- 30ks</button></li>
                </ul>
                <button>chcem túto príchuť</button><br />
                <button>namixujem si vlastný box</button>
            </div>
            <p className="product-desc">
                {props.textFirst}<br />
                {props.textSecond}<br />
                {props.textThird}
            </p>
            <img className="product-icons" src={`/img/mobile-${props.icons}-icons.png`} />
        </div>
    )

}

export default Product