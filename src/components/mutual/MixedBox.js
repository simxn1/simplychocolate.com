import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import MixedBoxProduct from './MixedBoxProduct';
import MixedBoxBoxSize from './MixedBoxBoxSize';

const BuyerInformationForm = (props) => {

    const history = useHistory();
    const location = useLocation();

    const [boxSize, setBoxSize] = React.useState('unselected');
    const [boxContent, setBoxContent] = React.useState([0, 0, 0, 0, 0, 0]);
    const [currentBoxQuantity, setCurrentBoxQuantity] = React.useState(0);
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState(0);
    const [boxInfoDisplay, setBoxInfoDisplay] = React.useState('none');
    const [boxInfoNumberColor, setBoxInfoNumberColor] = React.useState('#000');
    const [price, setPrice] = React.useState('0');
    const [reminderDisplay, setReminderDisplay] = React.useState('none');

    const boxSizesList = React.useRef();
    const preselectedBoxSize = location.boxSize;

    const products = [
        "Grainy Billy",
        "Crispy Carrie",
        "Grainy Sue",
        "Fit Fiona",
        "Rich Arnold",
        "Speedy Tom"
    ];

    const boxSizes = [
        "S",
        "M",
        "L",
        "XL"
    ];

    React.useEffect(() => {
        if (preselectedBoxSize) {
            const thisBoxSizeIndex = boxSizes.indexOf(preselectedBoxSize);
            const boxSizesElements = boxSizesList.current.children;

            changeTotalBoxQuantityAndPrice(preselectedBoxSize);
            setBoxSizeBtnColor(boxSizesElements, boxSizesElements.item(thisBoxSizeIndex).children.item(0));
            showBoxInfo();
        }
    }, [])

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
        setBoxInfoNumberColor(() => {
            if (totalBoxQuantity == currentBoxQuantity) return "#089348";
            else if (totalBoxQuantity - currentBoxQuantity > 0) return "#000000";
            else if (totalBoxQuantity - currentBoxQuantity < 0) return "#f00";
        })
    }

    const changeTotalBoxQuantityAndPrice = (sizeClicked) => {
        switch (sizeClicked) {
            case 'S':
                setTotalBoxQuantity(6);
                setPrice('13,50');
                break;
            case 'M':
                setTotalBoxQuantity(12);
                setPrice('24,50');
                break;
            case 'L':
                setTotalBoxQuantity(24);
                setPrice('47,50');
                break;
            case 'XL':
                setTotalBoxQuantity(30);
                setPrice('56,50');
                break;
        }
    }

    const showBoxInfo = () => {
        if (boxSize !== "unselected" || preselectedBoxSize) {
            setBoxInfoDisplay('block');
        }
    }

    const determineInfoNumberColor = (newBoxQuantity) => {
        if (totalBoxQuantity == newBoxQuantity) setBoxInfoNumberColor("#089348");
        else if (totalBoxQuantity - newBoxQuantity > 0) setBoxInfoNumberColor("#000000");
        else if (totalBoxQuantity - newBoxQuantity < 0) setBoxInfoNumberColor("#f00");
    }

    const changeBoxQuantity = (amountToChangeBy) => {
        setCurrentBoxQuantity(() => {
            const newBoxQuantity = currentBoxQuantity + amountToChangeBy;

            determineInfoNumberColor(newBoxQuantity);
            return newBoxQuantity;
        });
    }

    const validateAndContinue = () => {
        if (currentBoxQuantity !== totalBoxQuantity) {
            setReminderDisplay('block');
        }
        else {
            history.push({
                pathname: '/buyer-info',
                boxContent: {
                    grainyBilly: boxContent[0],
                    crispyCarrie: boxContent[1],
                    grainySue: boxContent[2],
                    fitFiona: boxContent[3],
                    richArnold: boxContent[4],
                    speedyTom: boxContent[5],
                },
                secondBoxContent: location.secondBoxContent ? location.secondBoxContent : [0, 0],
                totalBoxQuantity: totalBoxQuantity ? totalBoxQuantity : 0,
                from: "/mixed-box"
            });
        }
    }

    const changeQuantityOfThisProduct = (event) => {
        const thisProductElement = event.target.parentNode.parentNode;
        const productElements = thisProductElement.parentNode.children;
        const thisProductIndex = Array.prototype.indexOf.call(productElements, thisProductElement);
        const isIncrement = event.target.textContent.trim() == "+" ? true : false;
        const amountToChangeBy = isIncrement ? 1 : -1;

        setBoxContent(() => {
            let newBoxContent = [...boxContent];
            if (newBoxContent[thisProductIndex] != 0 || isIncrement) {
                newBoxContent[thisProductIndex] = newBoxContent[thisProductIndex] + amountToChangeBy;
                changeBoxQuantity(amountToChangeBy);
            }
            return newBoxContent;
        });

        showBoxInfo();
    }

    const handleGoBack = () => {
        history.goBack();
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
                            boxSize={boxSize}
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
                            name={product}
                            changeQuantityOfThisProduct={changeQuantityOfThisProduct}
                            quantity={boxContent[index]}
                        />
                    )
                }
            </ul>
            <h3 style={{ display: boxInfoDisplay }}>
                Zostávajúci počet tyčiniek v boxe:
                <strong style={{ color: boxInfoNumberColor }}>
                    {totalBoxQuantity - currentBoxQuantity}
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
            <button onClick={validateAndContinue} style={{ display: boxInfoDisplay }} className="continue">Mám vybraté!</button>
        </div>
    )
}

export default BuyerInformationForm