import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/mobileApp.css";
import Intro from "./components/mobile/Intro";
import About from "./components/mobile/About";
import Products from "./components/mobile/Products";
import Contact from "./components/mobile/Contact";
import { isBrowser, isMobile } from "react-device-detect";
import IntroDesktop from "./components/desktop/IntroDesktop";
import AboutDesktop from "./components/desktop/AboutDesktop";
import ProductsDesktop from "./components/desktop/ProductsDesktop";

if (isBrowser) {
  import('./css/desktopApp.css')
}
else {
  import('./css/mobileApp.css')
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
  else return (
    <div className="desktop-components-container">
      <IntroDesktop />
      <AboutDesktop />
      <ProductsDesktop />
    </div>
  )

}

export default App;
