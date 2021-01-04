import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Products = () => {

    const [productsQuantity, setProductsQuantity] = React.useState({
        grainyBilly: 0,
        creamyCarol: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    })

    const grainyBillyAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            grainyBilly: ++productsQuantity.grainyBilly
        }))
    }

    const grainyBillyRemove = () => {
        if (productsQuantity.grainyBilly > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                grainyBilly: --productsQuantity.grainyBilly
            }))
        }
    }

    const creamyCarolAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            creamyCarol: ++productsQuantity.creamyCarol
        }))
    }

    const creamyCarolRemove = () => {
        if (productsQuantity.creamyCarol > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                creamyCarol: --productsQuantity.creamyCarol
            }))
        }
    }

    const crispyCarrieAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            crispyCarrie: ++productsQuantity.crispyCarrie
        }))
    }

    const crispyCarrieRemove = () => {
        if (productsQuantity.crispyCarrie > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                crispyCarrie: --productsQuantity.crispyCarrie
            }))
        }
    }

    const grainySueAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            grainySue: ++productsQuantity.grainySue
        }))
    }

    const grainySueRemove = () => {
        if (productsQuantity.grainySue > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                grainySue: --productsQuantity.grainySue
            }))
        }
    }

    const fitFionaAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            fitFiona: ++productsQuantity.fitFiona
        }))
    }

    const fitFionaRemove = () => {
        if (productsQuantity.fitFiona > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                fitFiona: --productsQuantity.fitFiona
            }))
        }
    }

    const richArnoldAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            richArnold: ++productsQuantity.richArnold
        }))
    }

    const richArnoldRemove = () => {
        if (productsQuantity.richArnold > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                richArnold: --productsQuantity.richArnold
            }))
        }
    }

    const speedyTomAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            speedyTom: ++productsQuantity.speedyTom
        }))
        console.log(productsQuantity);
    }

    const speedyTomRemove = () => {
        if (productsQuantity.speedyTom > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                speedyTom: --productsQuantity.speedyTom
            }))
        }
        console.log(productsQuantity);
    }

    return (

        <Carousel id="carousel-2" autoPlay={false}>
            <div style={{ backgroundImage: `url("img/mobile-7-grainybilly.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={grainyBillyRemove}>-</button>
                        <input className="quantity" value={productsQuantity.grainyBilly} />
                        <button onClick={grainyBillyAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">kokos<br />brusnice<br />prémiová čokoláda</p>
                <img className="product-icons" src="/img/mobile-four-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-8-creamycarol.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={creamyCarolRemove}>-</button>
                        <input className="quantity" value={productsQuantity.creamyCarol} />
                        <button onClick={creamyCarolAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">tekutý karamel<br />prémiová tmavá čokoláda</p>
                <img className="product-icons" src="/img/mobile-four-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-9-crispycarrie.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={crispyCarrieRemove}>-</button>
                        <input className="quantity" value={productsQuantity.crispyCarrie} />
                        <button onClick={crispyCarrieAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">chrumkavý karamel<br />morská soľ<br />prémiová mliečna čokoláda</p>
                <img className="product-icons" src="/img/mobile-four-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-10-grainysue.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={grainySueRemove}>-</button>
                        <input className="quantity" value={productsQuantity.grainySue} />
                        <button onClick={grainySueAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">ovos a špalda<br />arašidy<br />karamel<br />prémiová tmavá čokoláda</p>
                <img className="product-icons" src="/img/mobile-three-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-11-fitfiona.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={fitFionaRemove}>-</button>
                        <input className="quantity" value={productsQuantity.fitFiona} />
                        <button onClick={fitFionaAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">proteínová tyčinka<br />ríbezle<br />prémiová tmavá čokoláda</p>
                <img className="product-icons" src="/img/mobile-five-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-12-richarnold.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={richArnoldRemove}>-</button>
                        <input className="quantity" value={productsQuantity.richArnold} />
                        <button onClick={richArnoldAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">proteínová tyčinka<br />karamel<br />arašidy<br />prémiová tmavá čokoláda</p>
                <img className="product-icons" src="/img/mobile-five-icons.png" />
            </div>
            <div style={{ backgroundImage: `url("img/mobile-13-speedytom.png")` }} className="section">
                <div className="add-to-cart-container">
                    <div className="add-to-cart">
                        <button onClick={speedyTomRemove}>-</button>
                        <input className="quantity" value={productsQuantity.speedyTom} />
                        <button onClick={speedyTomAdd}>+</button>
                    </div>
                </div>
                <p className="product-desc">proteínová tyčinka<br />acai a kokos<br />passion fruit<br />prémiová tmavá čokoláda</p>
                <img className="product-icons" src="/img/mobile-five-icons.png" />
            </div>
            <div style={{ backgroundColor: `#fff` }} className="section">
                <img className="next-section-logo" src="/img/logo-black.png" />
                <Link style={{ color: `#000` }} to={{
                    pathname: "/cart",
                    cart: productsQuantity
                }} className="next-section-link">
                    košík/kontakt
            </Link>
            </div>
        </Carousel>

    )
}

export default Products