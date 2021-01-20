import React from 'react';

const AboutPage = (props) => {

    return (
        <div className="section">
            <img src={`/img/mobile/mobile-${props.bg}.png`} className="slide-bg" />
            <img className="section-2-icon" src={`/img/mobile/${props.icon}.png`} />
            <h2 className="section-2-heading">{props.heading}</h2>
            <p className="section-2-text">{props.desc}</p>
        </div>
    )

}

export default AboutPage