import React from 'react';
import About from './mobile/About';
import Contact from './mobile/Contact';
import Intro from './mobile/Intro';
import Products from './mobile/Products';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import ProductsSecond from './mutual/ProductsSecond';

const Mobile = () => {



    return (
        <div className="mobile-components-container">
            <Intro />
            <About />
            <div id="products-second">
                <ProductsSecond />
            </div>
            <div id="products">
                <Products />
            </div>
            <div id="contact">
                <Contact />
            </div>
            <MessengerCustomerChat
                pageId="106129341216627"
                appId="277812317195737"
            />
        </div>
    )
}

export default Mobile