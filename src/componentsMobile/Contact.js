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
                <img src="/img/contact.png" className="slide-bg" />
                <h1 className="heading contact-heading-first">máš <br />otázku?</h1>
                <h2 className="heading contact-heading-second">
                    neváhaj nás<br />
                    kontaktovať
                </h2>
                <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Meno" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="text" name="phone" placeholder="Telefónne číslo" />
                    <input type="text" name="subject" placeholder="Predmet" />
                    <textarea name="message" placeholder="Správa"></textarea>
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