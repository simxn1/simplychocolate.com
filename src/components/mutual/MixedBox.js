import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const BuyerInformationForm = (props) => {

    let history = useHistory();

    const [boxSize, setBoxSize] = React.useState('unselected');
    const [boxContent, setBoxContent] = React.useState({
        grainyBilly: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    });
    const [currentBoxQuantity, setCurrentBoxQuantity] = React.useState(0);
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState(0);
    const [boxInfoDisplay, setBoxInfoDisplay] = React.useState('none');
    const [boxInfoNumberColor, setBoxInfoNumberColor] = React.useState('#000');
    const [price, setPrice] = React.useState('0');
    const [reminderDisplay, setReminderDisplay] = React.useState('none');

    const toggleBoxSize = (event) => {
        let listItems = event.target.parentNode.parentNode.children;
        for (const listItem of listItems) {
            let thisButton = listItem.children.item(0);

            if (thisButton.classList.contains('active')) {
                thisButton.classList.remove('active');
            }
        }

        event.target.classList.add('active');
        setBoxSize(event.target.textContent);
        
        changeTotalBoxQuantity(event.target.textContent);
        changeBoxInfoDisplay();
        setBoxInfoColor(currentBoxQuantity);
        changePriceAccToBox(event.target.textContent);
    }

    const changeTotalBoxQuantity = (size) => {
        switch (size) {
            case 'S':
                setTotalBoxQuantity(6);
                break;
            case 'M':
                setTotalBoxQuantity(12);
                break;
            case 'L':
                setTotalBoxQuantity(24);
                break;
            case 'XL':
                setTotalBoxQuantity(30);
                break;
        }

    }

    const changeBoxInfoDisplay = () => {
        if (boxSize !== "unselected") {
            setBoxInfoDisplay('block');
        }
    }

    const boxQuantityIncrement = (boxQuantity) => {
        
        setCurrentBoxQuantity((boxQuantity) => {
            boxQuantity = boxQuantity + 1;
            setBoxInfoColor(boxQuantity);

            return boxQuantity;
        });

    }

    const boxQuantityDecrement = (boxQuantity) => {

        setCurrentBoxQuantity((boxQuantity) => {
            boxQuantity = boxQuantity - 1;
            setBoxInfoColor(boxQuantity);

            return boxQuantity;
        });

    }

    const setBoxInfoColor = (boxQuantity) => {
        if (totalBoxQuantity == boxQuantity) {
            setBoxInfoNumberColor('#089348');
        }
        else if (totalBoxQuantity - boxQuantity > 0) {
            setBoxInfoNumberColor('#000000')
        }
        else if (totalBoxQuantity - boxQuantity < 0) {
            setBoxInfoNumberColor('#f00');
        }
    }

    const changePriceAccToBox = (size) => {
        switch (size) {
            case 'S':
                setPrice('13,50');
                break;
            case 'M':
                setPrice('24,50');
                break;
            case 'L':
                setPrice('47,50');
                break;
            case 'XL':
                setPrice('56,50');
                break;
        }
    }

    const validateAndContinue = () => {
        if (currentBoxQuantity !== totalBoxQuantity) {
            setReminderDisplay('block');
        }
        else {
            history.push({
                pathname: '/buyer-info',
                boxContent: boxContent,
                totalBoxQuantity: totalBoxQuantity
            });
        }
    }

    const grainyBillyAdd = () => {
        setBoxContent({
            ...boxContent,
            grainyBilly: boxContent.grainyBilly += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const grainyBillyRemove = (event) => {
        if (boxContent.grainyBilly != 0) {
            setBoxContent({
                ...boxContent,
                grainyBilly: boxContent.grainyBilly -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }

    const crispyCarrieAdd = () => {
        setBoxContent({
            ...boxContent,
            crispyCarrie: boxContent.crispyCarrie += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const crispyCarrieRemove = (event) => {
        if (boxContent.crispyCarrie != 0) {
            setBoxContent({
                ...boxContent,
                crispyCarrie: boxContent.crispyCarrie -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }

    /*const creamyCarolAdd = () => {
        setBoxContent({
            ...boxContent,
            creamyCarol: boxContent.creamyCarol += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }*/

    /*const creamyCarolRemove = (event) => {
        if (boxContent.creamyCarol != 0) {
            setBoxContent({
                ...boxContent,
                creamyCarol: boxContent.creamyCarol -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }*/

    const grainySueAdd = () => {
        setBoxContent({
            ...boxContent,
            grainySue: boxContent.grainySue += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const grainySueRemove = (event) => {
        if (boxContent.grainySue != 0) {
            setBoxContent({
                ...boxContent,
                grainySue: boxContent.grainySue -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }

    const fitFionaAdd = () => {
        setBoxContent({
            ...boxContent,
            fitFiona: boxContent.fitFiona += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const fitFionaRemove = (event) => {
        if (boxContent.fitFiona != 0) {
            setBoxContent({
                ...boxContent,
                fitFiona: boxContent.fitFiona -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }

    const richArnoldAdd = () => {
        setBoxContent({
            ...boxContent,
            richArnold: boxContent.richArnold += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const richArnoldRemove = (event) => {
        if (boxContent.richArnold != 0) {
            setBoxContent({
                ...boxContent,
                richArnold: boxContent.richArnold -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }

    const speedyTomAdd = () => {
        setBoxContent({
            ...boxContent,
            speedyTom: boxContent.speedyTom += 1
        })
        
        boxQuantityIncrement(currentBoxQuantity);
        changeBoxInfoDisplay();
    }

    const speedyTomRemove = (event) => {
        if (boxContent.speedyTom != 0) {
            setBoxContent({
                ...boxContent,
                speedyTom: boxContent.speedyTom -= 1
            })
        }
        
        if (event.target.nextSibling.value != 0) {
            boxQuantityDecrement(currentBoxQuantity);
            changeBoxInfoDisplay();
        }
    }



    return (
        <div className="mixed-box">
            <Link to="/#products" className="back">
                <i class="fas fa-long-arrow-alt-left"></i>
            </Link>
            <h1>Mám chuť na<br />na poriadnu čokoládu!</h1>
            <h2>veľkosť boxu</h2>
            <ul className="select-box-size">
                <li><button onClick={toggleBoxSize}>S</button></li>
                <li><button onClick={toggleBoxSize}>M</button></li>
                <li><button onClick={toggleBoxSize}>L</button></li>
                <li><button onClick={toggleBoxSize}>XL</button></li>
            </ul>
            <h2>tyčinky v boxe</h2>
            <ul className="select-box-content">
                <li>
                    <img src="/img/mutual/grainybilly-bar.png"></img>
                    Grainy Billy
                    <div className="bar-quantity">
                        <button onClick={grainyBillyRemove}>-</button>
                        <input value={boxContent.grainyBilly} type="text" readOnly />
                        <button onClick={grainyBillyAdd}>+</button>
                    </div>
                </li>
                {/*<li>
                    <img src="/img/mutual/creamycarol-bar.png"></img>
                    Creamy Carol
                    <div className="bar-quantity">
                        <button onClick={creamyCarolRemove}>-</button>
                        <input value={boxContent.creamyCarol} type="text" readOnly />
                        <button onClick={creamyCarolAdd}>+</button>
                    </div>
                </li>*/}
                <li>
                    <img src="/img/mutual/crispycarrie-bar.png"></img>
                    Crispy Carrie
                    <div className="bar-quantity">
                        <button onClick={crispyCarrieRemove}>-</button>
                        <input value={boxContent.crispyCarrie} type="text" readOnly />
                        <button onClick={crispyCarrieAdd}>+</button>
                    </div>
                </li>
                <li>
                    <img src="/img/mutual/grainysue-bar.png"></img>
                    Grainy Sue
                    <div className="bar-quantity">
                        <button onClick={grainySueRemove}>-</button>
                        <input value={boxContent.grainySue} type="text" readOnly />
                        <button onClick={grainySueAdd}>+</button>
                    </div>
                </li>
                <li>
                    <img src="/img/mutual/fitfiona-bar.png"></img>
                    Fit Fiona
                    <div className="bar-quantity">
                        <button onClick={fitFionaRemove}>-</button>
                        <input value={boxContent.fitFiona} type="text" readOnly />
                        <button onClick={fitFionaAdd}>+</button>
                    </div>
                </li>
                <li>
                    <img src="/img/mutual/richarnold-bar.png"></img>
                    Rich Arnold
                    <div className="bar-quantity">
                        <button onClick={richArnoldRemove}>-</button>
                        <input value={boxContent.richArnold} type="text" readOnly />
                        <button onClick={richArnoldAdd}>+</button>
                    </div>
                </li>
                <li>
                    <img src="/img/mutual/speedytom-bar.png"></img>
                    Speedy Tom
                    <div className="bar-quantity">
                        <button onClick={speedyTomRemove}>-</button>
                        <input value={boxContent.speedyTom} type="text" readOnly />
                        <button onClick={speedyTomAdd}>+</button>
                    </div>
                </li>
            </ul>
            <h3 style={{ display: boxInfoDisplay }}>
                Zostávajúci počet tyčiniek v boxe: 
                <strong style={{ color: boxInfoNumberColor }}>
                    {totalBoxQuantity - currentBoxQuantity}
                </strong>
            </h3>
            <h4 style={{ display: boxInfoDisplay }}>Celkom: <strong>{price}€</strong></h4>
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