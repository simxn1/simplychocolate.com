import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [sentDisplay, setSentDisplay] = React.useState('none');

    const showSent = () => {
        setSentDisplay('block');
    }

    const hideSent = () => {
        setSentDisplay('none');
    }

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_elvyfji', 'template_w39ybbx', event.target, 'user_uKRxzHXwrKpgUeezjJZMo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        
        event.target.reset();
        showSent();
    }

    return (
        <Carousel className="contact component">
            <div onClick={hideSent} className="section">
                <img src="/img/mobile/contact.png" className="slide-bg" />
                <h1 className="heading contact-heading-first">máš <br />otázku?</h1>
                <h2 className="heading contact-heading-second">
                    neváhaj nás<br />
                    kontaktovať
                </h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Meno" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="phone" placeholder="Telefónne číslo" required />
                    <input type="text" name="subject" placeholder="Predmet" required />
                    <textarea name="message" placeholder="Správa" required></textarea>
                    <button type="submit">Odoslať</button>
                </form>
                <div style={{ display: sentDisplay }} className="sent">
                    správa odoslaná!<br />
                    <i class="fas fa-check"></i>
                </div>
            </div>
        </Carousel>
    )

}

export default Contact