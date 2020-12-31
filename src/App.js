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
            <img src="/img/mobile-2.png"/>
            <div className="slide-selectors">
              <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div style={{ backgroundImage: `url("/img/mobile-3-4.png")`, backgroundSize: `cover` }} className="section">
            <div className="slide-selectors">
              <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="section">
            <img src="/img/mobile-3-4.png"/>
            <div className="slide-selectors">
              <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="section">
            <img src="/img/mobile-5-6.png"/>
            <div className="slide-selectors">
              <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
          <div className="section">
            <img src="/img/mobile-5-6.png"/>
            <div className="slide-selectors">
              <button onClick={prevSlide}><i class="fas fa-chevron-left"></i></button>
              <button onClick={nextSlide}><i class="fas fa-chevron-right"></i></button>
            </div>
          </div>
        </Carousel>
      </div>
  );
}

export default App;
