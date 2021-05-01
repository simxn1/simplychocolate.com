import React from 'react';
import AboutDesktop from './desktop/AboutDesktop';
import ContactDesktop from './desktop/ContactDesktop';
import IntroDesktop from './desktop/IntroDesktop';
import ProductsDesktop from './desktop/ProductsDesktop';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ProductsSecond from './mutual/ProductsSecond';

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
            <div>
                <ProductsSecond />
            </div>
            <div id="contact">
                <ContactDesktop />
            </div>
            <MessengerCustomerChat
                pageId="106129341216627"
                appId="277812317195737"
            />
        </div>
    )
}

export default Desktop