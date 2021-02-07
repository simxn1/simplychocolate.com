import React from 'react';
import About from './mobile/About';
import Contact from './mobile/Contact';
import Intro from './mobile/Intro';
import Products from './mobile/Products';

const Mobile = () => {



    return (
        <div className="mobile-components-container">
            <Intro />
            <About />
            <Products />
            <Contact />
        </div>
    )
}

export default Mobile