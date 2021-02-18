import React from 'react';
import Burger from '@animated-burgers/burger-squeeze'
import { useHistory } from 'react-router-dom';



const Menu = (props) => {

    let history = useHistory();

    return (
        <div 
            className="menu" 
            style={{ 
                display: props.display,
            }}
        >
            <Burger 
                    isOpen={props.burgerState}
                    onClick={props.toggleBurger}
                    style={{ 
                        position: 'absolute', 
                        zIndex: '2',
                        margin: '3em'
                    }}
                />
            <div>
                <img src="/img/desktop/logo.png"></img>
            </div>
            <ul>
                <li><a onClick={props.toggleBurger} href="#about">Simply Story</a></li>
                <li><a onClick={props.toggleBurger} href="#products">Simply e-shop</a></li>
                <li><a onClick={props.toggleBurger} href="#contact">Simply kontakt</a></li>
            </ul>
            <div className="legal">
                <a 
                    onClick={() => { history.push({ pathname: "/zasady-ochrany-osobnych-udajov" }) }} 
                >
                    Zásady ochrany osobných údajov
                </a>
                <a 
                    onClick={() => { history.push({ pathname: "/obchodne-podmienky" }) }}
                >
                    Všeobecné obchodné podmienky
                </a>
            </div>
        </div>
    )
}

export default Menu