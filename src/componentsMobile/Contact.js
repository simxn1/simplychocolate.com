import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Contact = () => {

    return (
        <Carousel className="contact component">
            <div className="section">
                <img src="/img/contact.png" className="slide-bg" />
                <h1 className="heading contact-heading-first">máš <br />otázku?</h1>
                <h2 className="heading contact-heading-second">
                    neváhaj nás<br />
                    kontaktovať
                </h2>
                <form>
                    <input name="meno" placeholder="Meno" />
                    <input name="email" placeholder="Email" />
                    <input name="phone" placeholder="Telefónne číslo" />
                    <input name="subject" placeholder="Predmet" />
                    <textarea name="message" placeholder="Správa"></textarea>
                    <button type="submit">Odoslať</button>
                </form>
            </div>
        </Carousel>
    )

}

export default Contact