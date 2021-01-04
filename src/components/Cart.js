import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import { Carousel } from 'react-responsive-carousel';

const Cart = (props) => {

    const location = useLocation()
    
    return (
        <div>
            <ul>
                {Object.keys(props.location.cart).map((productName, key) => (
                    <li key={key}>
                        {productName}&nbsp;-&nbsp;
                        {props.location.cart[productName]}
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default Cart