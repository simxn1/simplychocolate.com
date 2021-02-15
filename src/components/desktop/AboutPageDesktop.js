import React from 'react';

const AboutPageDesktop = (props) => {


    return (
        <div className="desktop-section" style={{ background: `url('/img/desktop/desktop-${props.bg}.png')` }}>
            <div className="desktop-about-page-content">
                <img className="desktop-about-icon" src={`/img/mobile/${props.icon}.png`} />
                <h2 className="desktop-about-heading desktop-heading">{props.heading}</h2>
                <p className="desktop-about-desc">{props.desc}</p>
            </div>
        </div>
    )

}

export default AboutPageDesktop