import React from 'react';
import ReactCompareImage from 'react-compare-image';

const ProductDesktop = (props) => {

    const [cartDisplay, setCartDisplay] = React.useState('none');
    const [cartContent, setCartContent] = React.useState([props.name, "unselected"]);
    const [hintDisplay, setHintDisplay] = React.useState("none");

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

    const setQuantity = (event) => {
        setCartContent([props.name, event.target.children.item(0).textContent.trim()]);
    }

    const handleBuyClick = () => {
        if (cartContent[1] === "unselected") {
            setHintDisplay("inline");
        }
        else {
            console.log(cartContent);
        }
    }


    return (
        <div style={{ position: `relative` }}>
            <button onClick={toggleCartDisplay} style={{ color: props.color }} className="desktop-open-cart">chcem túto tyčinku!</button>
            <ReactCompareImage
                leftImage={`/img/desktop/${props.name.replace(/ /g, '')}.png`}
                leftImageLabel={
                    (
                        <div onClick={toggleCartDisplay} className="desktop-product-shown-section">
                            <h1 className="desktop-product-shown-heading desktop-heading">
                                {props.name.split(" ")[0]}<br />
                                {props.name.split(" ")[1]}<br />
                            </h1>
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
                            <p className="desktop-product-hidden-desc">
                                {props.desc}
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
                    <li><button onClick={setQuantity}><strong>S </strong>- 6ks</button></li>
                    <li><button onClick={setQuantity}><strong>M </strong>- 12ks</button></li>
                    <li><button onClick={setQuantity}><strong>L </strong>- 20ks</button></li>
                    <li><button onClick={setQuantity}><strong>XL </strong>- 30ks</button></li>
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
                <button style={{ color: `#fff` }} onClick={handleBuyClick}>
                    chcem túto príchuť
                </button><br />
                <button>namixujem si vlastný box</button>
            </div>
        </div>
    )

}

export default ProductDesktop