import React from 'react';
import { useForm } from 'react-hook-form';
import { Redirect, useHistory, useLocation } from 'react-router-dom';


const CheckBuyerInformation = () => {

    const { register, handleSubmit } = useForm();

    let location = useLocation();

    const [boxContent, setBoxContent] = React.useState();
    const [totalBoxQuantity, setTotalBoxQuantity] = React.useState();

    React.useEffect(() => {
        setBoxContent(location.boxContent);
        setTotalBoxQuantity(location.totalBoxQuantity);
    }, [])

    const validateAndContinue = (formData) => {
        
    }

    //if (location.boxContent && location.totalBoxQuantity) 
    return (
        <div className="buyer-info-check">
            <h1>Máme správne údaje?</h1>
            <div></div>
        </div>
    )
    /*else return (
        <Redirect to="/" />
    )*/
}

export default CheckBuyerInformation