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
            <form onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Meno" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <input type="text" name="phone" placeholder="Telefónne číslo" required />
                    <input type="text" name="subject" placeholder="Predmet" required />
                    <textarea name="message" placeholder="Správa" required></textarea>
                    <button type="submit">Odoslať</button>
            </form>
            <div className="desktop-contact-methods">
                <a href="tel:+421918596972">+421 918 596 972</a>&nbsp;&nbsp;&nbsp;
                <a href="mailto:info@simplychocolate.sk">info@simplychocolate.sk</a>
            </div>
            <p
                className="desktop-contact-legal"
                style={{ 
                    color: "#fff", 
                    fontFamily: "Open Sans", 
                    position: "absolute",
                    textAlign: "center",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}
            >
                Odoslaním formuláru dávam spoločnosti P-REDOMA s.r.o., Banskobystrická 148/1 940 02 Nové Zámky, 
                IČO: 51408741, súhlas na spracovanie a uchovávanie hore uvedených osobných údajov. 
                Viac informácií v dokumente&nbsp;
                <a 
                    href="/zasady-ochrany-osobnych-udajov"
                    style={{ 
                        cursor: "pointer"
                    }}
                >   
                    Zásady ochrany osobných údajov
                </a>.
            </p>
            <div style={{ display: sentDisplay }} className="desktop-sent">
                    správa<br />odoslaná!<br />
                    <i class="fas fa-check"></i>
            </div>
        </div>
    )
}

export default ContactDesktop