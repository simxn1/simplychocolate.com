import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import FinalCheckProduct from './FinalCheckProduct';

const FinalCheck = () => {

    let location = useLocation();
    let history = useHistory();

    const [boxContent, setBoxContent] = React.useState({
        grainyBilly: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    });
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState(0);
    const [price, setPrice] = React.useState();
    const [buyerInformation, setBuyerInformation] = React.useState({});

    let secondBoxProducts = [];
    if (location.secondBoxContent && (location.secondBoxContent[0] || location.secondBoxContent[1])) {
        secondBoxProducts = [
            { name: "yesYouCanBuyLove", quantity: location.secondBoxContent[0] },
            { name: "insteadOfFlowers", quantity: location.secondBoxContent[1] }
        ]
    }

    React.useEffect(() => {
        setBoxContent(location.boxContent ? location.boxContent : boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity ? location.totalBoxQuantity : totalBoxQuantity);
        setBuyerInformation(location.buyerInformation);

        let totalPrice = 0;
        switch (location.totalBoxQuantity) {
            case 6:
                totalPrice += 13.50;
                break;
            case 12:
                totalPrice += 24.50;
                break;
            case 24:
                totalPrice += 47.50;
                break;
            case 30:
                totalPrice += 56.50;
                break;
        }

        totalPrice += location.secondBoxContent[0] * 20.00;
        totalPrice += location.secondBoxContent[1] * 12.00;

        setPrice(totalPrice.toFixed(2).toString().replace(".", ","));
    }, [])

    const handleContinue = () => {
        history.push({
            pathname: "/shipping-and-payment-method",
            boxContent: boxContent,
            secondBoxContent: location.secondBoxContent,
            totalBoxQuantity: totalBoxQuantity,
            price: price,
            buyerInformation: buyerInformation
        })
    }

    const handleBack = () => {
        history.push({ boxContent: boxContent, totalBoxQuantity: totalBoxQuantity });
        history.goBack();
    }

    if (location.boxContent && location.totalBoxQuantity || location.secondBoxContent) return (
        <div className="final-check">
            <h1>Lásku si za peniaze nekúpiš,<br />čokoládu ÁNO!</h1>
            <h2>Už skoro u teba doma...</h2>
            <ul className="products-to-purchase">
                {
                    Object.keys(boxContent).map((product) =>
                        <FinalCheckProduct
                            name={product}
                            quantity={boxContent[product]}
                        />
                    )
                }
                {
                    secondBoxProducts.map((product) =>
                        <FinalCheckProduct
                            name={product.name}
                            quantity={product.quantity}
                        />
                    )
                }
                <li>Celkom: <strong>{price}&nbsp;€</strong></li>
            </ul>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <a
                    onClick={handleBack}
                    style={{
                        fontFamily: 'Open Sans',
                        textDecoration: 'underline',
                        marginRight: '4em',
                        cursor: 'pointer',
                        fontSize: '1.05em'
                    }}
                >
                    Späť
            </a>
                <button onClick={handleContinue} className="continue">Pokračovať</button>
            </div>
        </div>
    )
    else return (
        <Redirect to="/" />
    )
}

export default FinalCheck