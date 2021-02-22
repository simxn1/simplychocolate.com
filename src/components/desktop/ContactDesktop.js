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
            style={{ background: `url('/img/desktop/contact.jpg')`, position: "relative" }}
            className="desktop-section desktop-contact"
            onClick={hideSent}
        >
            <h1 className="desktop-heading desktop-contact-main-heading">
                máš <br />otázku?
            </h1>
            <h2 className="desktop-heading desktop-contact-secondary-heading">
                neváhaj nás <br />kontaktovať
            </h2>
            <div>
                <img
                    src="/img/mobile/logowithoutbreak.png"
                    style={{
                        position: "absolute",
                        top: "4%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "18vw"
                    }}
                ></img>
            </div>
            <div className="desktop-contact-methods">
                <a href="tel:+421918596972">+421 918 596 972</a>
                <a href="mailto:info@simplychocolate.sk">info@simplychocolate.sk</a>
            </div>
            <form onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Meno" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="text" name="phone" placeholder="Telefónne číslo" required />
                <input type="text" name="subject" placeholder="Predmet" required />
                <textarea name="message" placeholder="Správa" required></textarea>
                <label>
                    <input type="checkbox" required />
                    Súhlasím so <a href="/zasady-ochrany-osobnych-udajov" target="_blank">spracovaním osobných údajov</a>.
                </label>
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