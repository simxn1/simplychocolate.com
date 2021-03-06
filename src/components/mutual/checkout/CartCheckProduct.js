import React from 'react';

const CartCheckProduct = (props) => {

    const name = props.name.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
    
    return (
        <li>
            <img src={`/img/mutual/${props.name.replaceAll(" ", "").toLowerCase()}-bar.png`} />{name}
            <strong>{props.quantity}ks</strong>
        </li>
    )
}

export default CartCheckProduct