import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';

const FinalCheck = () => {

    let location = useLocation();
    let history = useHistory();

    const [boxContent, setBoxContent] = React.useState({
        grainyBilly: 0,
        creamyCarol: 0,
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
                setPrice("56,60");
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

    if (location.boxContent && location.totalBoxQuantity) return (
        <div className="final-check">
            <h1>Lásku si za peniaze nekúpiš,<br />čokoládu ÁNO!</h1>
            <h2>Už skoro u teba doma...</h2>
            <ul className="products-to-purchase">
                <li><img src="/img/mutual/grainybilly-bar.png" />Grainy Billy <strong>{boxContent.grainyBilly}</strong></li>
                <li><img src="/img/mutual/creamycarol-bar.png" />Creamy Carol <strong>{boxContent.creamyCarol}</strong></li>
                <li><img src="/img/mutual/crispycarrie-bar.png" />Crispy Carrie <strong>{boxContent.crispyCarrie}</strong></li>
                <li><img src="/img/mutual/grainysue-bar.png" />Grainy Sue <strong>{boxContent.grainySue}</strong></li>
                <li><img src="/img/mutual/fitfiona-bar.png" />Fit Fiona<strong>{boxContent.fitFiona}</strong></li>
                <li><img src="/img/mutual/richarnold-bar.png" />Rich Arnold <strong>{boxContent.richArnold}</strong></li>
                <li><img src="/img/mutual/speedytom-bar.png" />Speedy Tom <strong>{boxContent.speedyTom}</strong></li>
                <li>Celkom: <strong>{price}&nbsp;€</strong></li>
            </ul>
            <button onClick={handleContinue} className="continue">Pokračovať</button>
        </div>
    )
    else return (
        <Redirect to="/" />
    )
}

export default FinalCheck