import React from 'react';
import ReactCompareImage from 'react-compare-image';
import { useHistory } from 'react-router-dom';

const ProductDesktop = (props) => {

    let history = useHistory();

    const [cartDisplay, setCartDisplay] = React.useState('none');
    const [boxContent, setBoxContent] = React.useState([{
        grainyBilly: 0,
        creamyCarol: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    }, 'unselected']);
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
            setHintDisplay("inline");
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


    if (props.name) return (
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
                    <li>
                        <button style={{ cursor: 'pointer' }} onClick={setQuantity}><div><strong>S </strong></div>- 6ks</button>
                    </li>
                    <li>
                        <button style={{ cursor: 'pointer' }} onClick={setQuantity}><div><strong>M </strong></div>- 12ks</button>
                    </li>
                    <li>
                        <button style={{ cursor: 'pointer' }} onClick={setQuantity}><div><strong>L </strong></div>- 20ks</button>
                    </li>
                    <li>
                        <button style={{ cursor: 'pointer' }} onClick={setQuantity}><div><strong>XL </strong></div>- 30ks</button>
                    </li>
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
                <button style={{ color: `#fff` }} onClick={handleThisFlavour}>
                    chcem túto príchuť
                </button>
                <br />
                <button onClick={handleMixOwn}>namixujem si vlastný box</button>
            </div>
        </div>
    )
    else return (
        <div className="desktop-where-to-find-us">
            <h1 className="desktop-heading">
                šampióni<br />chutí
            </h1>
            <h2 className="desktop-heading">
                kde<br /> nás<br /> nájdete?
            </h2>
            <div className="logos">
                <img src="/img/mutual/terno.png"></img>
                <img src="/img/mutual/kraj.png"></img>
            </div>
        </div>
    )

}

export default ProductDesktop