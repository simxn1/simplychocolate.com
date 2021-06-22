import React from 'react';
import Burger from '@animated-burgers/burger-squeeze';
import Social from "../mutual/Social";
import { useHistory } from 'react-router-dom';
import { isMobile } from "react-device-detect";


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
            <Social style={{ display: isMobile ? "flex" : "none" }}/>
            <div>
                <img src="/img/desktop/logo.png" alt=""></img>
            </div>
            <ul>
                <li><a onClick={props.toggleBurger} href="#about">Simply Story</a></li>
                <li><a onClick={props.toggleBurger} href="#products">Simply e-shop</a></li>
                <li><a onClick={props.toggleBurger} href="#contact">Simply kontakt</a></li>
            </ul>
            <div className="legal">
                <a
                    onClick={() => { history.push({ pathname: "/odstupenie-od-kupnej-zmluvy" }) }}
                >
                    Odstúpenie od kúpnej zmluvy
                </a>
                <a
                    onClick={() => { history.push({ pathname: "/obchodne-podmienky" }) }}
                >
                    Všeobecné obchodné podmienky
                </a>
                <a
                    onClick={() => { history.push({ pathname: "/zasady-ochrany-osobnych-udajov" }) }}
                >
                    Zásady ochrany osobných údajov
                </a>
            </div>
        </div>
    )
}

export default Menu