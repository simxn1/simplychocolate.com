import React from 'react';
import ReactCompareImage from 'react-compare-image';

const IntroDesktop = () => {


    return (
        <div className="desktop-section">
            <ReactCompareImage
                leftImage="/img/desktop/desktop-1.jpg"
                leftImageLabel={
                    (<h1 className="desktop-intro-first-heading desktop-heading">yes<br />you can<br />buy love</h1>)
                }
                rightImage="/img/desktop/desktop-1-2.jpg"
                rightImageLabel={
                    (
                        <>
                            <div className="desktop-left-section">
                                <h1 className="desktop-intro-hidden-heading desktop-heading">
                                    použité<br />
                                    výlučne<br />
                                    prírodné<br />
                                    suroviny
                                </h1>
                                <div className="desktop-icons">
                                    <img src="/img/desktop/cocoahorizons.png"></img>
                                    <img src="/img/desktop/earth.png"></img>
                                    <img src="/img/desktop/noartificials.png"></img>
                                </div>
                                <div className="desktop-icons-labels">
                                    <strong>we<br />care!</strong>
                                    <strong>all<br />natural</strong>
                                    <strong>no<br />artificials</strong>
                                </div>
                            </div>    
                            <div className="desktop-right-section">
                                <h1 className="desktop-intro-second-heading desktop-heading">o nás</h1>
                                <img src="/img/desktop/logo.png" className="desktop-logo"></img>
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
    )

}

export default IntroDesktop