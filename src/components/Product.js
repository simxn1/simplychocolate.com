import React, { useState } from 'react';

const Product = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState("none")

    const openCart = () => {
        setCartDisplay("block")
    }

    const closeCart = () => {
        setCartDisplay("none")
    }

    return (
        <div onClick={cartDisplay == "block" ? closeCart : undefined} style={{ backgroundColor: props.color }} className="section">
            <img src={`img/mobile-${props.name.replace(" ", "")}.png`} className="slide-bg product-bg" />
            <h1 style={{ color: props.color }} className="product-heading">
                {props.name.split(" ")[0]}<br />
                {props.name.split(" ")[1]}
            </h1>
            <div onClick={openCart} className="add-to-cart">
                <button style={{ color: props.color }}>Chcem túto tyčinku</button>
            </div>
            <div style={{ display: `${cartDisplay}` }} className="cart">
                <h2 style={{ fontFamily: "Social Gothic Demi-Bold", textTransform: "uppercase" }}>máš chuť na čokolásku?</h2>
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