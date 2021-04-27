import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Burger from '@animated-burgers/burger-squeeze';
import Typical from 'react-typical';
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
            <Burger
                onClick={toggleBurger}
                style={{
                    margin: "3em",
                    zIndex: "3"
                }}
            />
            <Menu
                display={burgerState ? 'block' : 'none'}
                burgerState={burgerState}
                toggleBurger={toggleBurger}
            />
            <Carousel autoPlay={false} selectedItem={currentSlide} className="intro component">
                <div style={{ backgroundImage: `url("img/mobile/intro-first.webp")`, backgroundPosition: `bottom` }} className="section">
                    <h1 className="heading intro-first-heading">
                        yes<br />you can
                    </h1>
                    <Typical
                        steps={['', 1400, 'BUY LOVE', 1200]}
                        loop={Infinity}
                        wrapper="h1"
                        className="intro-first-heading heading"
                    />
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{
                    backgroundImage: `url("img/mobile/intro-second.webp")`,
                    backgroundPosition: 'bottom center'
                }} className="section">
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundColor: '#fff' }} className="section">
                    <h1 className="heading intro-second-heading">o nás</h1>
                    <img className="logo-first" src="/img/mobile/logoblackwithoutbreak.webp"></img>
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
                    <img src="/img/mobile/icons-black.webp"></img>
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("img/mobile/intro-forth.webp")` }} className="section">
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
                <div style={{ backgroundImage: `url("img/mobile/intro-fifth.webp")` }} className="section">
                    <img className="logo-vertical" src="img/mobile/logo-vertical.webp"></img>
                    <div className="slide-selectors">
                        <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                        <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                    </div>
                </div>
            </Carousel>
            <div className="component" style={{ overflowY: 'hidden' }}>
                <div className="section" style={{ backgroundImage: 'url("/img/mobile/in-products-background.webp")' }}>
                    <div
                        style={{
                            background: "transparent",
                            width: "100vw",
                            height: "100vh"
                        }}
                        className="where-to-find-us"
                    >
                        <h1 className="heading">
                            šampióni
                        </h1>
                        <Typical
                            steps={['', 1400, 'CHUTÍ', 1200]}
                            loop={Infinity}
                            wrapper="h1"
                            className="heading"
                        />
                        <div className="bars">
                            <img src="/img/mutual/bars.png"></img>
                        </div>
                        <h2 className="heading">
                            nájdete<br />nás
                        </h2>
                        <div className="logo">
                            <img src="/img/mutual/terno.webp"></img>
                        </div>
                        <div className="logos">
                            <img src="/img/mutual/kraj.webp"></img>
                            <img src="/img/mutual/shell.webp"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Intro