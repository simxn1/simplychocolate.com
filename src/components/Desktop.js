import React from 'react';
import AboutDesktop from './desktop/AboutDesktop';
import ContactDesktop from './desktop/ContactDesktop';
import IntroDesktop from './desktop/IntroDesktop';
import ProductsDesktop from './desktop/ProductsDesktop';

const Desktop = () => {



    return (
        <div className="desktop-components-container">
            <IntroDesktop />
            <AboutDesktop />
            <ProductsDesktop />
            <ContactDesktop />
        </div>
    )
}

export default Desktop