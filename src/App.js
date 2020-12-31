import React, { useState } from 'react';
import './css/App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';


const App = () => {
  
  const [currentSlide, setCurrentSlide] = React.useState(0)

  const nextSlide = () => {
    //if (currentSlide < x) {
      setCurrentSlide(currentSlide + 1)
    //}
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
      <div>
        <Carousel autoPlay={false} selectedItem={currentSlide}>
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
          <div style={{ backgroundImage: `url("/img/mobile-3-4.png")`, backgroundSize: `cover` }} className="section">
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
        </Carousel>
      </div>
  );
}

export default App;
