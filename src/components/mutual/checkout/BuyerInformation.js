import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory, useLocation, Link } from 'react-router-dom';


const BuyerInformation = () => {

    const { register, handleSubmit } = useForm();

    let location = useLocation();
    let history = useHistory();

    const [boxContent, setBoxContent] = React.useState();
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState();

    React.useEffect(() => {
        setBoxContent(location.boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity);
    }, [])

    const validateAndContinue = (formData) => {
        history.push({
            pathname: "/final-check",
            boxContent: boxContent,
            secondBoxContent: location.secondBoxContent ? location.secondBoxContent : [0, 0],
            totalBoxQuantity: totalBoxQuantity ? totalBoxQuantity : 0,
            buyerInformation: formData
        })
    }

    const handleGoBack = () => {
        const previousLocation = window.location.href.replace(location.pathname, location.from);
        window.location.replace(previousLocation);
    }

    if (location.boxContent && location.totalBoxQuantity || location.secondBoxContent) 
    return (
        <div className="buyer-info">
            <span onClick={handleGoBack} className="back">
                <i class="fas fa-long-arrow-alt-left"></i>
            </span>
            <img className="logo-checkout" src="/img/desktop/logo-black.png"></img>
            <h1>Čokoláda je odpoveď,<br />koho zaujíma aká je otázka?</h1>
            <h2>Priamo k tebe domov!</h2>
            <form onSubmit={handleSubmit(validateAndContinue)}>
                <input type="text" name="firstName" placeholder="Meno" ref={register({ required: true })} />
                <input type="text" name="lastName" placeholder="Priezvisko" ref={register({ required: true })} />
                <input type="email" name="email" placeholder="Email" ref={register({ required: true })} />
                <input type="text" name="phone" placeholder="Telefónne číslo (09XX...)" ref={register({ required: true })} />
                <input type="text" name="address" placeholder="Ulica s číslom" ref={register({ required: true })} />
                <input type="text" name="city" placeholder="Mesto" ref={register({ required: true })} />
                <input type="text" name="country" placeholder="Krajina" ref={register({ required: true })} />
                <input type="text" name="zipCode" placeholder="PSČ" ref={register({ required: true })} />
                <button type="submit">Už iba krok k dokonalosti!</button>
            </form>
        </div>
    )
    else return (
        <Redirect to="/" />
    )
}

export default BuyerInformation