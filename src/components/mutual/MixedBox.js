import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MixedBoxProduct from './MixedBoxProduct';
import MixedBoxBoxSize from './MixedBoxBoxSize';
import products from '../../constantData/products';
import boxSizes from '../../constantData/boxSizes';

const MixedBox = (props) => {

    const history = useHistory();
    const location = useLocation();

    const [boxSize, setBoxSize] = React.useState('unselected');
    const [currentTotalBoxQuantity, setCurrentTotalBoxQuantity] = React.useState(0);
    const [boxInfoDisplay, setBoxInfoDisplay] = React.useState('none');
    const [price, setPrice] = React.useState('0');
    const [reminderDisplay, setReminderDisplay] = React.useState('none');
    const [reminderSecondDisplay, setReminderSecondDisplay] = React.useState("none");

    const boxSizesList = React.useRef();
    const preselectedBoxSize = location.boxSize
    ? location.boxSize 
    : boxSizes.find(boxSizeToFind => boxSizeToFind.productCount === props.totalBoxQuantity) 
    ? boxSizes.find(boxSizeToFind => boxSizeToFind.productCount === props.totalBoxQuantity).size
    : null;

    React.useEffect(() => {
        if (preselectedBoxSize && preselectedBoxSize !== "unset") {
            const thisBoxSizeIndex = boxSizes.indexOf(boxSizes.find(boxSizeToFind => boxSizeToFind.size === preselectedBoxSize));
            const boxSizesElements = boxSizesList.current.children;

            setBoxSize(preselectedBoxSize);
            changeTotalBoxQuantityAndPrice(preselectedBoxSize);
            setBoxSizeBtnColor(boxSizesElements, boxSizesElements.item(thisBoxSizeIndex).children.item(0));
            showBoxInfo();
        }
    }, [])

    React.useEffect(() => {
        const newCurrentTotalBoxQuantity = props.boxQuantity.reduce((a, b) => a + b, 0);
        setCurrentTotalBoxQuantity(newCurrentTotalBoxQuantity);
    }, [props.boxQuantity])

    const setBoxSizeBtnColor = (boxSizesBtns, newBoxSizeBtn) => {
        for (const boxSizeBtn of boxSizesBtns) {
            let thisButtonElement = boxSizeBtn.children.item(0);

            if (thisButtonElement.classList.contains('active')) {
                thisButtonElement.classList.remove('active');
            }
        }
        newBoxSizeBtn.classList.add('active');
    }

    const toggleBoxSize = (event) => {
        const boxSizesElements = event.target.parentNode.parentNode.children;
        const boxSizeButton = event.target;
        setBoxSizeBtnColor(boxSizesElements, boxSizeButton);

        const boxSizeClicked = boxSizeButton.textContent;
        setBoxSize(boxSizeClicked);
        changeTotalBoxQuantityAndPrice(boxSizeClicked);
        showBoxInfo();
    }

    const changeTotalBoxQuantityAndPrice = (sizeClicked) => {
        const prevSize = boxSizes.find(boxSizeToFind => boxSizeToFind.size === boxSize)
        const newSize = boxSizes.find(boxSizeToFind => boxSizeToFind.size === sizeClicked)

        if (prevSize && prevSize.productCount > newSize.productCount) {
            props.setBoxQuantity(() => {
                let newBoxQuantity = [...props.boxQuantity].fill(0);
                return newBoxQuantity;
            })
        }

        props.setTotalBoxQuantity(newSize.productCount);
        setPrice((newSize.price / 100).toFixed(2).toString().replace(".", ","));
    }

    const showBoxInfo = () => {
        if (boxSize !== "unselected" || preselectedBoxSize) {
            setBoxInfoDisplay('block');
        }
    }

    const validateAndContinue = () => {
        if (currentTotalBoxQuantity !== props.totalBoxQuantity) {
            setReminderDisplay('block');
        }
        else {
            history.push({
                pathname: '/cart-check',
                from: "/mixed-box"
            });
        }
    }

    const handleChocolateBox = () => {
        if (currentTotalBoxQuantity !== props.totalBoxQuantity) {
            setReminderDisplay('block');
        }
        else {
            history.push({
                pathname: '/chocolate-box'
            });
        }
    }

    const changeQuantityOfThisProduct = (event) => {
        const thisProductElement = event.target.parentNode.parentNode;
        const productElements = thisProductElement.parentNode.children;
        const thisProductIndex = Array.prototype.indexOf.call(productElements, thisProductElement);
        const isIncrement = event.target.textContent.trim() == "+" ? true : false;
        const amountToChangeBy = isIncrement ? 1 : -1;

        if (boxSize === "unselected") {
            setReminderSecondDisplay("block");
        }
        else if (props.totalBoxQuantity >= currentTotalBoxQuantity + amountToChangeBy) {
            setReminderDisplay("none");
            setReminderSecondDisplay("none");
            props.setBoxQuantity(() => {
                let newBoxQuantity = [...props.boxQuantity];
    
                if (newBoxQuantity[thisProductIndex] != 0 || isIncrement) {
                    newBoxQuantity[thisProductIndex] = newBoxQuantity[thisProductIndex] + amountToChangeBy;
                }
                return newBoxQuantity;
            });
        }

        showBoxInfo();
    }

    const handleGoBack = () => {
        window.location.replace("/grainy-billy");
    }

    return (
        <div className="mixed-box">
            <span onClick={handleGoBack} className="back">
                <i class="fas fa-long-arrow-alt-left"></i>
            </span>
            <h1>Mám chuť na<br />na poriadnu čokoládu!</h1>
            <h2>veľkosť boxu</h2>
            <ul ref={boxSizesList} className="select-box-size">
                {
                    boxSizes.map(boxSize => 
                        <MixedBoxBoxSize 
                            boxSize={boxSize.size}
                            toggleBoxSize={toggleBoxSize}
                        />
                    )
                }
            </ul>
            <h2>tyčinky v boxe</h2>
            <ul className="select-box-content">
                {
                    products.map((product, index) =>
                        <MixedBoxProduct
                            name={product.name.replace(/\b\w/g, l => l.toUpperCase())}
                            changeQuantityOfThisProduct={changeQuantityOfThisProduct}
                            quantity={props.boxQuantity[index]}
                        />
                    )
                }
            </ul>
            <h3 style={{ display: boxInfoDisplay }}>
                Zostávajúci počet tyčiniek v boxe:
                <strong>
                    {props.totalBoxQuantity - currentTotalBoxQuantity}
                </strong>
            </h3>
            <h4 style={{ display: boxInfoDisplay }}>Cena za box: <strong>{price}€</strong></h4>
            <span style={{
                color: 'red',
                display: reminderDisplay,
                textAlign: 'center',
                fontFamily: 'Open Sans Bold',
                marginTop: '2vh'
            }}
            >
                Uveďte správny počet tyčiniek podľa veľkosti boxu.
            </span>
            <span style={{
                color: 'red',
                display: reminderSecondDisplay,
                textAlign: 'center',
                fontFamily: 'Open Sans Bold',
                marginTop: '2vh'
            }}
            >
                Vyberte si veľkosť boxu.
            </span>
            <div className="continue">
                <button onClick={handleChocolateBox} style={{ display: boxInfoDisplay }}>Mám chuť aj na bonboniéru!</button>
                <button onClick={validateAndContinue} style={{ display: boxInfoDisplay }}>Chcem platiť!</button>
            </div>
        </div>
    )
}

export default MixedBox