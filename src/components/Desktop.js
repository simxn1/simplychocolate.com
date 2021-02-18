import React from 'react';
import AboutDesktop from './desktop/AboutDesktop';
import ContactDesktop from './desktop/ContactDesktop';
import IntroDesktop from './desktop/IntroDesktop';
import ProductsDesktop from './desktop/ProductsDesktop';

const Desktop = () => {



    return (
        <div className="desktop-components-container">
            <IntroDesktop />
            <div id="about">
                <AboutDesktop />
            </div>
            <div id="products">
            <ProductsDesktop />
            </div>
            <div id="contact">
                <ContactDesktop />
            </div>
        </div>
    )
}

export default Desktop