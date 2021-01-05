import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/App.css';
import { Carousel } from 'react-responsive-carousel';

const App = () => {

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [productsQuantity, setProductsQuantity] = React.useState({
    grainyBilly: 0,
    creamyCarol: 0,
    crispyCarrie: 0,
    grainySue: 0,
    fitFiona: 0,
    richArnold: 0,
    speedyTom: 0
  })

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1)
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }


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
    <Carousel className="carousel-1" autoPlay={false} selectedItem={currentSlide}>
      <div className="section">
        <img src="/img/mobile-1.png"></img>
        <div className="slide-selectors">
          <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
          <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
      <div className="section">
        <img src="/img/mobile-2.png" />
        <div className="slide-selectors">
          <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
          <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
        </div>
      </div>
      <div style={{ backgroundImage: `url("/img/mobile-3-4.png")` }} className="section">
        <img className="section-2-icon" src="/img/cocoahorizons.png" />
        <h2 className="section-2-heading">we care</h2>
        <p className="section-2-text">Čokoláda, ktorú používame, pochádza z kakaa získavaného etickým poľnohospodárstvom.</p>
      </div>
      <div style={{ backgroundImage: `url("img/mobile-3-4.png")` }} className="section">
        <img className="section-2-icon" src="/img/earth.png" />
        <h2 className="section-2-heading">all natural</h2>
        <p className="section-2-text">Pokiaľ ide o naše ingrediencie, sme veľmi vyberaví. Využívame iba to najlepšie, čo príroda ponúka.</p>
      </div>
      <div style={{ backgroundImage: `url("img/mobile-5-6.png")` }} className="section">
        <img className="section-2-icon" src="/img/noartificials.png" />
        <h2 className="section-2-heading">no artificials</h2>
        <p className="section-2-text">Chuť a kvalita sú všetkým. Využívame pomerne veľa času hľadaním skvelých ingrediencií a zaujímavých chutí.</p>
      </div>
      <div style={{ backgroundImage: `url("img/mobile-5-6.png")` }} className="section">
        <img className="section-2-icon" src="/img/glutenfree.png" />
        <h2 className="section-2-heading">gluten free</h2>
        <p className="section-2-text">Myslíme na všetkých milovníkov čokolády, a preto je väčšina z našich tyčiniek vhodná aj pre ľudí s alergiou na lepok.</p>
      </div>


      <div style={{ backgroundImage: `url("img/mobile-7-grainybilly.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={grainyBillyRemove}>-</button>
            <div className="quantity">{productsQuantity.grainyBilly}</div>
            <button onClick={grainyBillyAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">kokos<br />brusnice<br />prémiová čokoláda</p>
        <img className="product-icons" src="/img/mobile-four-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-8-creamycarol.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={creamyCarolRemove}>-</button>
            <div className="quantity">{productsQuantity.creamyCarol}</div>
            <button onClick={creamyCarolAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">tekutý karamel<br />prémiová tmavá čokoláda</p>
        <img className="product-icons" src="/img/mobile-four-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-9-crispycarrie.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={crispyCarrieRemove}>-</button>
            <div className="quantity">{productsQuantity.crispyCarrie}</div>
            <button onClick={crispyCarrieAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">chrumkavý karamel<br />morská soľ<br />prémiová mliečna čokoláda</p>
        <img className="product-icons" src="/img/mobile-four-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-10-grainysue.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={grainySueRemove}>-</button>
            <div className="quantity">{productsQuantity.grainySue}</div>
            <button onClick={grainySueAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">ovos a špalda<br />arašidy<br />karamel<br />prémiová tmavá čokoláda</p>
        <img className="product-icons" src="/img/mobile-three-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-11-fitfiona.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={fitFionaRemove}>-</button>
            <div className="quantity">{productsQuantity.fitFiona}</div>
            <button onClick={fitFionaAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">proteínová tyčinka<br />ríbezle<br />prémiová tmavá čokoláda</p>
        <img className="product-icons" src="/img/mobile-five-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-12-richarnold.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={richArnoldRemove}>-</button>
            <div className="quantity">{productsQuantity.richArnold}</div>
            <button onClick={richArnoldAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">proteínová tyčinka<br />karamel<br />arašidy<br />prémiová tmavá čokoláda</p>
        <img className="product-icons" src="/img/mobile-five-icons.png" />
      </div>
      <div style={{ backgroundImage: `url("img/mobile-13-speedytom.png")` }} className="section">
        <div className="add-to-cart-container">
          <div className="add-to-cart">
            <button onClick={speedyTomRemove}>-</button>
            <div className="quantity">{productsQuantity.speedyTom}</div>
            <button onClick={speedyTomAdd}>+</button>
          </div>
        </div>
        <p className="product-desc">proteínová tyčinka<br />acai a kokos<br />passion fruit<br />prémiová tmavá čokoláda</p>
        <img className="product-icons" src="/img/mobile-five-icons.png" />
      </div>
      <div style={{ backgroundColor: `#fff` }} className="section">
        hello
      </div>
    </Carousel>
  )
}

export default App;
