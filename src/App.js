import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Intro from "./components/mobile/Intro";
import About from "./components/mobile/About";
import Products from "./components/mobile/Products";
import Contact from './components/mobile/Contact';
import { MobileView, BrowserView, isMobile, isBrowser } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import IntroDesktop from './components/desktop/IntroDesktop';
import AboutDesktop from "./components/desktop/AboutDesktop";

if (isMobile) {
  import('./css/mobileApp.css')
}
else if (isBrowser) {
  import('./css/desktopApp.css')
}


const App = () => {



  if (isMobile) return (
    <div className="mobile-components-container">
      <Intro />
      <About />
      <Products />
      <Contact />
    </div>
  )
  else if (isBrowser) return (
    <div className="desktop-components-container">
      <IntroDesktop />
      <AboutDesktop />
    </div>
  )

}

export default App;
