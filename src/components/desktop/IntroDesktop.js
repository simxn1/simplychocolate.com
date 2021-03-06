import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Typical from 'react-typical';
import Burger from '@animated-burgers/burger-squeeze'
import Menu from '../mutual/Menu';
import Social from "../mutual/Social";

const IntroDesktop = () => {

    const [burgerState, setBurgerState] = React.useState(false);

    const toggleBurger = () => {
        if (burgerState) {
            setBurgerState(false);
        }
        else {
            setBurgerState(true);
        }
    }

    return (
        <>
            <div className="desktop-section" style={{ position: "relative" }}>
                <Burger
                    isOpen={burgerState}
                    onClick={toggleBurger}
                    style={{
                        position: 'absolute',
                        zIndex: '2',
                        margin: '3em'
                    }}
                />
                <Menu
                    display={burgerState ? 'block' : 'none'}
                    burgerState={burgerState}
                    toggleBurger={toggleBurger}
                />
                <Social />
                <i
                    class="fas fa-arrow-down"
                    style={{
                        position: 'absolute',
                        color: '#fff',
                        bottom: '2%',
                        left: '50%',
                        transform: 'translate(-50%, 0)',
                        zIndex: '2',
                        fontSize: '1.24em',
                    }}
                >
                </i>
                <ReactCompareImage
                    leftImage="/img/desktop/intro-left-image.jpg"
                    leftImageLabel={
                        (
                            <>
                                <div className="desktop-intro-shown">
                                    <h1
                                        className="desktop-intro-first-heading desktop-heading"
                                        style={{ marginBottom: '0' }}
                                    >
                                        yes<br />you can
                                </h1>
                                    <Typical
                                        steps={['', 1400, 'BUY LOVE', 1200]}
                                        loop={Infinity}
                                        wrapper="h1"
                                        className="desktop-intro-first-heading desktop-heading"
                                    />
                                    <img className="desktop-intro-icons" src="/img/desktop/icons-white.png"></img>
                                </div>
                            </>
                        )
                    }
                    rightImage="/img/desktop/intro-right-image.jpg"
                    rightImageLabel={
                        (
                            <>
                                <div className="desktop-intro-hidden-section">
                                    <div className="desktop-intro-hidden-text">
                                        <h1 className="desktop-intro-hidden-heading desktop-heading">o nás</h1>
                                        <img src="/img/desktop/logo-black.png" className="desktop-logo"></img>
                                        <div className="desktop-intro-company-desc">
                                            <p>
                                                Spoločnosť Simply Chocolate verí, že pravá
                                                čokoládová láska vyžaduje nádych niečoho
                                                nového
                                                a zmysel pre humor.
                                </p>
                                            <p>
                                                Kakao na čokoládu pochádza z Afriky.
                                                Simply Chocolate je súčasťou neziskovej
                                                organizácie Cocoa Horizons, ktorá sa snaží
                                                zabezpečiť, aby kakaovým farmárom, ich rodinám
                                                a miestnym komunitám obklopujúcim kakaové
                                                polia prospievali
                                                a mali príležitosť zlepšovať svoj život.
                                                Rovnako ako zabezpečenie toho,
                                                aby súčasťou výroby nebola žiadna nelegálna
                                                detská práca.
                                </p>
                                            <p>
                                                Spoločnosť má vlastný systém solárnych panelov,
                                                vďaka ktorému je 100% energeticky sebestačná.
                                                Keď svieti slnko, umožňuje spoločnosti vyrábať
                                                čokoládu
                                                s nulovými emisiami CO2.
                                </p>
                                        </div>
                                    </div>
                                    <img className="desktop-intro-icons" src="img/desktop/icons-black.png"></img>
                                </div>
                            </>
                        )
                    }
                    handle={<div
                        style={{ color: "white", position: "relative", top: "12em", fontSize: "1.75em" }}
                    >
                        <i style={{ position: "absolute", right: "0.5em" }} className="fas fa-chevron-left intro-left-arrow"></i>
                        <i style={{ position: "absolute", left: "0.5em" }} className="fas fa-chevron-right intro-right-arrow"></i>
                    </div>}
                    sliderLineWidth={4}
                />
            </div>
            <div className="desktop-section" style={{ backgroundImage: `url('/img/desktop/in-products-background.webp')`, backgroundSize: 'cover' }}>
                <div
                    className="desktop-where-to-find-us"
                    style={{
                        backgroundColor: "transparent",
                        position: "relative",
                        width: "100vw",
                        height: "100vh"
                    }}
                >
                    <h1 className="desktop-heading">
                        šampióni
                        <br />
                        <Typical
                            steps={['', 1400, 'CHUTÍ', 1200]}
                            loop={Infinity}
                            wrapper="div"
                            className="desktop-heading"
                        />
                    </h1>
                    <h2 className="desktop-heading">
                        kde<br /> nás<br /> nájdete?
                    </h2>
                    <div className="desktop-logos">
                        <img src="/img/mutual/terno.webp"></img>
                        <img src="/img/mutual/kraj.webp"></img>
                        <img src="/img/mutual/shell.webp" style={{ marginTop: "0.75%" }}></img>
                    </div>
                    <div className="desktop-bars">
                        <img src="/img/desktop/bar-1.png"></img>
                        <img src="/img/desktop/bar-2.png"></img>
                        <img src="/img/desktop/bar-3.png"></img>
                    </div>
                </div>
            </div>
        </>
    )

}

export default IntroDesktop