import React from 'react';

const AboutPage = (props) => {

    return (
        <div 
            style={{ 
                background: `url(/img/mobile/mobile-${props.bg}.webp) no-repeat`,
                backgroundSize: "cover"
            }} 
            className="section"
        >
            <img className="section-2-icon" src={`/img/mobile/${props.icon}.png`} />
            <h2 className="section-2-heading">{props.heading}</h2>
            <p className="section-2-text">{props.desc}</p>
        </div>
    )

}

export default AboutPage