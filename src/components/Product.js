import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Product = (props) => {

    const [overlayDisplay, setOverlayDisplay] = React.useState("none")

    const openCart = () => {
        setOverlayDisplay("block")
    }

    const closeCart = () => {
        setOverlayDisplay("none")
    }

    return (
        <div className="section">
            <img src={`img/mobile-${props.name.replace(" ", "")}.png`} className="product-bg" />
            <h1 style={{ color: props.color }} className="product-heading">
                {props.name.split(" ")[0]}<br />
                {props.name.split(" ")[1]}
            </h1>
            <div className="add-to-cart">
                <button onClick={openCart}><i class="fas fa-shopping-cart"></i></button>
            </div>
            <div onClick={closeCart} style={{ display: `${overlayDisplay}` }} className="cart">
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