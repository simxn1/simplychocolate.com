import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/App.css';
import Intro from "./componentsMobile/Intro";
import About from "./componentsMobile/About";
import Products from "./componentsMobile/Products";
import Contact from './componentsMobile/Contact';
import { MobileView, BrowserView } from 'react-device-detect';
import { Carousel } from 'react-responsive-carousel';
import IntroDesktop from './componentsDesktop/IntroDesktop';

const App = () => {

  const [productsQuantity, setProductsQuantity] = React.useState({
    grainyBilly: 0,
    creamyCarol: 0,
    crispyCarrie: 0,
    grainySue: 0,
    fitFiona: 0,
    richArnold: 0,
    speedyTom: 0
  })

  const grainyBillyAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      grainyBilly: ++productsQuantity.grainyBilly
    }))
  }

  const grainyBillyRemove = () => {
    if (productsQuantity.grainyBilly > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        grainyBilly: --productsQuantity.grainyBilly
      }))
    }
  }

  const creamyCarolAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      creamyCarol: ++productsQuantity.creamyCarol
    }))
  }

  const creamyCarolRemove = () => {
    if (productsQuantity.creamyCarol > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        creamyCarol: --productsQuantity.creamyCarol
      }))
    }
  }

  const crispyCarrieAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      crispyCarrie: ++productsQuantity.crispyCarrie
    }))
  }

  const crispyCarrieRemove = () => {
    if (productsQuantity.crispyCarrie > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        crispyCarrie: --productsQuantity.crispyCarrie
      }))
    }
  }

  const grainySueAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      grainySue: ++productsQuantity.grainySue
    }))
  }

  const grainySueRemove = () => {
    if (productsQuantity.grainySue > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        grainySue: --productsQuantity.grainySue
      }))
    }
  }

  const fitFionaAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      fitFiona: ++productsQuantity.fitFiona
    }))
  }

  const fitFionaRemove = () => {
    if (productsQuantity.fitFiona > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        fitFiona: --productsQuantity.fitFiona
      }))
    }
  }

  const richArnoldAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      richArnold: ++productsQuantity.richArnold
    }))
  }

  const richArnoldRemove = () => {
    if (productsQuantity.richArnold > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        richArnold: --productsQuantity.richArnold
      }))
    }
  }

  const speedyTomAdd = () => {
    setProductsQuantity(productsQuantity => ({
      ...productsQuantity,
      speedyTom: ++productsQuantity.speedyTom
    }))
    console.log(productsQuantity);
  }

  const speedyTomRemove = () => {
    if (productsQuantity.speedyTom > 0) {
      setProductsQuantity(productsQuantity => ({
        ...productsQuantity,
        speedyTom: --productsQuantity.speedyTom
      }))
    }
    console.log(productsQuantity);
  }

  return (
        <div className="mobile-components-container">
          <Intro />
          <About />
          <Products />
          <Contact />
        </div>
  )
}

export default App;
