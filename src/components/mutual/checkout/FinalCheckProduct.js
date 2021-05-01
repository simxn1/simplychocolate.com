import React from 'react';

const FinalCheckProduct = (props) => {

    const name = props.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
    
    return (
        <li>
            <img src={`/img/mutual/${props.name.replace(" ", "").toLowerCase()}-bar.png`} />{name}
            <strong>{props.quantity}</strong>
        </li>
    )
}

export default FinalCheckProduct