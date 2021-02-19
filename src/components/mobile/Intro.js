import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Burger from '@animated-burgers/burger-squeeze';
import Menu from '../mutual/Menu';

const Intro = (props) => {

    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [burgerState, setBurgerState] = React.useState(false);

    const nextSlide = () => {
        if (currentSlide < 4) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

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
            <Menu
                display={ burgerState ? 'block' : 'none' }
                burgerState={burgerState}
                toggleBurger={toggleBurger}
            />
            <Carousel autoPlay={false} selectedItem={currentSlide} className="intro component">
                <div style={{ backgroundImage: `url("img/mobile/intro-first.png")`, backgroundPosition: `bottom` }} className="section">
                    <Burger 
                        onClick={toggleBurger}
                        style={{
                            margin: '3em'
                        }}
                    />
                    <h1 className="heading intro-first-heading">yes<br />you can<br />buy love</h1>
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ 
                    backgroundImage: `url("img/mobile/intro-second.jpg")`,
                    backgroundPosition: 'bottom center'
                }} className="section">
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff' }} className="section">
                    <h1 className="heading intro-second-heading">o nás</h1>
                    <img className="logo-first" src="/img/mobile/logoblackwithoutbreak.png"></img>
                    <div className="company-desc">
                        <p className="company-desc-p">
                            Spoločnosť Simply Chocolate verí,
                            že pravá čokoládová láska vyžaduje
                            nádych niečoho nového a zmysel
                            pre humor.
                    </p>
                        <br />
                        <p className="company-desc-p">
                            Kakao na čokoládu pochádza z Afriky.
                            Simply Chocolate je súčasťou
                            neziskovej organizácie Cocoa
                            Horizons, ktorá sa snaží zabezpečiť,
                            aby kakaovým farmárom, ich
                            rodinám a miestnym komunitám
                            obklopujúcim kakaové polia
                            prospievali
                            a mali príležitosť zlepšovať svoj
                            život.
                            Rovnako ako zabezpečenie toho,
                            aby súčasťou výroby nebola žiadna
                            nelegálna detská práca.
                    </p>
                        <br />
                        <p className="company-desc-p">
                            Spoločnosť má vlastný systém
                            solárnych panelov, vďaka ktorému je
                            100% energeticky sebestačná. Keď
                            svieti slnko, umožňuje spoločnosti
                            vyrábať čokoládu s nulovými
                            emisiami CO2.
                    </p>
                    </div>
                    <img src="/img/mobile/icons-black.png"></img>
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("img/mobile/intro-forth.jpg")` }} className="section">
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("img/mobile/intro-fifth.png")` }} className="section">
                    <img className="logo-vertical" src="img/mobile/logo-vertical.png"></img>
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </Carousel>
            <div className="component" style={{ overflowY: 'hidden' }}>
                <div className="section" style={{ backgroundImage: 'url("/img/mobile/intro-sixth.png")' }}>
                    <div
                        style={{ 
                            position: 'relative',
                            top: '53%',
                            left: '13%',
                            fontSize: '1.3em'
                        }}
                    >
                        <h1 style={{
                            color: "#fff",
                            textTransform: 'uppercase',
                            fontFamily: 'Social Gothic Bold',
                            lineHeight: '1.2em',
                            marginBottom: '0'
                        }}>
                            viac<br />ako<br />čokoláda
                    </h1>
                        <h3
                            style={{
                                fontFamily: 'Cormonant Garamond Medium',
                                color: '#fff',
                                marginTop: '2%'
                            }}
                        >
                            It's Simply Chocolate.
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Intro