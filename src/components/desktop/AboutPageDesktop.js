import React from 'react';

const AboutPageDesktop = (props) => {


    return (
        <div className="section" style={{ background: `url('/img/desktop/desktop-${props.bg}.jpg')` }}>
            <div className="about-page-content">
                <img className="about-icon" src={`/img/mobile/${props.icon}.png`} />
                <h2 className="about-heading">{props.heading}</h2>
                <p className="about-desc">{props.desc}</p>
            </div>
        </div>
    )

}

export default AboutPageDesktop