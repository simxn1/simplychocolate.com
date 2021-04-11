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

    React.useEffect(() => {
        setBoxContent(location.boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity);
        setBuyerInformation(location.buyerInformation);

        switch (location.totalBoxQuantity) {
            case 6:
                setPrice("13,50");
                break;
            case 12:
                setPrice("24,50");
                break;
            case 24:
                setPrice("47,50");
                break;
            case 30:
                setPrice("56,50");
                break;
        }
    }, [])

    const handleContinue = () => {
        history.push({
            pathname: "/shipping-and-payment-method",
            boxContent: boxContent,
            totalBoxQuantity: totalBoxQuantity,
            price: price,
            buyerInformation: buyerInformation
        })
    }

    const handleBack = () => {
        history.push({
            pathname: "/buyer-info",
            boxContent: boxContent,
            totalBoxQuantity: totalBoxQuantity,
        })
    }

    if (location.boxContent && location.totalBoxQuantity) return (
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