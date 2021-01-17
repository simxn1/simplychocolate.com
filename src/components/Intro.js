import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Intro = (props) => {

    const [currentSlide, setCurrentSlide] = React.useState(0)

    const nextSlide = () => {
        if (currentSlide < 1) {
            setCurrentSlide(currentSlide + 1)
        }
    }

    const prevSlide = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return (
        <Carousel autoPlay={false} selectedItem={currentSlide} className="intro component">
            <div style={{ backgroundImage: `url("img/mobile-1.jpg")`, backgroundPosition: `bottom` }} className="section">
                <h1 className="heading intro-first-heading">yes<br />you can<br />buy love</h1>
                <div className="slide-selectors">
                    <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                    <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
            <div style={{ backgroundColor: `#000` }} className="section">
                <h1 className="heading intro-second-heading">o nás</h1>
                <img className="logo-first" src="/img/logowithoutbreak.png"></img>
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
                <div className="slide-selectors">
                    <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
                    <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
                </div>
            </div>
        </Carousel>
    )

}

export default Intro