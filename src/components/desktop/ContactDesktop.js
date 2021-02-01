import React from "react";
import emailjs from "emailjs-com"

const ContactDesktop = () => {

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
        <div 
            style={{ background: `url('/img/desktop/contact.jpg')` }} 
            className="desktop-section desktop-contact"
            onClick={hideSent}
        >
            <h1 className="desktop-heading desktop-contact-main-heading">
                máš <br />otázku?
            </h1>
            <h2 className="desktop-heading desktop-contact-secondary-heading">
                neváhaj nás <br />kontaktovať
            </h2>
            <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Meno" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="phone" placeholder="Telefónne číslo" required />
                    <input type="text" name="subject" placeholder="Predmet" required />
                    <textarea name="message" placeholder="Správa" required></textarea>
                    <button type="submit">Odoslať</button>
            </form>
            <div style={{ display: sentDisplay }} className="desktop-sent">
                    správa<br />odoslaná!<br />
                    <i class="fas fa-check"></i>
            </div>
        </div>
    )
}

export default ContactDesktop