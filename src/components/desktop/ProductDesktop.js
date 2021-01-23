import React from 'react';
import ReactCompareImage from 'react-compare-image';

const ProductDesktop = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState('none');
    const [cartContent, setCartContent] = React.useState();

    const toggleCartDisplay = () => {
        if (cartDisplay == "block") {
            setCartDisplay("none");
            console.log(cartDisplay);
        }
        else {
            setCartDisplay("block");
            console.log(cartDisplay);
        }
    }

    return (
        <div style={{ position: `relative` }}>
            <ReactCompareImage
                leftImage="/img/desktop/grainybilly1.jpg"
                leftImageLabel={
                    (
                        <div className="desktop-product-shown-section">
                            <h1 className="desktop-product-shown-heading desktop-heading">
                                grainy<br />
                                billy<br />
                            </h1>
                            <p className="desktop-product-shown-desc">
                                kokos<br />
                                brusnice<br />
                                prémiová čokoláda
                            </p>
                            <button 
                                style={{ color: `rgb(170, 38, 52)` }} 
                                className="desktop-open-cart"
                                onClick={() => console.log('hello')}
                            >
                                chcem túto tyčinku
                            </button>
                            <img 
                                src="/img/desktop/four-icons.png" 
                                className="desktop-product-icons"
                            >
                            </img>
                        </div>
                    )
                }
                rightImage="/img/desktop/grainybilly2.jpg"
                rightImageLabel={
                    (
                        <div className="desktop-product-hidden-section">
                            <h1 
                                style={{ color: `#aa2634` }} 
                                className="desktop-product-hidden-heading"
                            >
                                grainy<br />
                                billy<br />
                            </h1>
                            <button 
                                onClick={toggleCartDisplay}
                                style={{ backgroundColor: `rgb(170, 38, 52)` }} 
                                className="desktop-open-cart"
                            >
                                chcem túto tyčinku
                            </button>
                            <p className="desktop-product-hidden-desc">
                                Grainy Billy je najlahodnejšia kokosová tyčinka, ktorá ťa
                                svojou chuťou a ľahkosťou nenechá prestať.
                            </p>
                        </div>
                    )
                }
                handle={<React.Fragment />}
            />
            <div style={{ display: cartDisplay }} className="desktop-cart">
                <i
                    class="fas fa-times"
                    onClick={toggleCartDisplay}
                >
                </i>
                <h2>
                    máš chuť na čokolásku?
                </h2>
                <h3>
                    objednaj si Simply Chocolate už dnes!
                </h3>
                <h2>
                    veľkosť
                </h2>
                <ul className="desktop-box-sizes">
                    <li><button><strong>S </strong>- 6ks</button></li>
                    <li><button><strong>M </strong>- 12ks</button></li>
                    <li><button><strong>L </strong>- 20ks</button></li>
                    <li><button><strong>XL </strong>- 30ks</button></li>
                </ul>
                <button>
                    chcem túto príchuť
                </button><br />
                <button>namixujem si vlastný box</button>
            </div>
        </div>
    )

}

export default ProductDesktop