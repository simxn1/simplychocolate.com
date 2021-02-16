import React from 'react';
import ReactCompareImage from 'react-compare-image';
import Typical from 'react-typical';

const IntroDesktop = () => {



    return (
        <>
            <div className="desktop-section">
                <ReactCompareImage
                    leftImage="/img/desktop/intro-left-image.jpg"
                    leftImageLabel={
                        (
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
            <div className="desktop-section" style={{ background: `url('/img/desktop/intro-third.png')` }}>
                <div className="desktop-intro-second-content">
                    <h1 className="desktop-heading">
                        viac<br />ako<br />čokoláda
                    </h1>
                    <h2 className="desktop-heading">It's Simply Chocolate.</h2>
                </div>
            </div>
        </>
    )

}

export default IntroDesktop