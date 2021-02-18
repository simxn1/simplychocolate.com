import React from 'react';
import Burger from '@animated-burgers/burger-squeeze'
import { Link } from 'react-router-dom';



const Menu = (props) => {



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
                <Link to="/zasady-ochrany-osobnych-udajov" target="_blank">Zásady ochrany osobných údajov</Link>
                <Link to="/obchodne-podmienky" target="_blank">Všeobecné obchodné podmienky</Link>
            </div>
        </div>
    )
}

export default Menu