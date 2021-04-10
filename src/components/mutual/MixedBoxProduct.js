import React from 'react';

const MixedBoxProduct = (props) => {

    
    return (
        <li>
            <img src={`/img/mutual/${props.name.replace(" ", "").toLowerCase()}-bar.png`}></img>
                {props.name}
            <div className="bar-quantity">
                <button onClick={props.changeQuantityOfThisProduct}>-</button>
                <input value={props.quantity} type="text" readOnly />
                <button onClick={props.changeQuantityOfThisProduct}>+</button>
            </div>
        </li>
    )
}

export default MixedBoxProduct