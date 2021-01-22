import React from 'react';
import ReactCompareImage from 'react-compare-image';

const ProductDesktop = () => {


    return (
        <div>
            <ReactCompareImage
                leftImage="/img/desktop/grainybilly1.jpg"
                leftImageLabel={
                    (
                        <div className="desktop-product-shown-section">
                            <h1 className="desktop-product-shown-heading desktop-heading">
                                grainy<br />
                                billy<br />
                            </h1>
                            <p className="desktop-product-shown-desc">
                                kokos<br />
                                brusnice<br />
                                prémiová čokoláda
                            </p>
                            <img src="/img/desktop/four-icons.png" className="desktop-product-icons"></img>
                        </div>
                    )
                }
                rightImage="/img/desktop/grainybilly2.jpg"
                rightImageLabel={
                    (
                        <div className="desktop-product-hidden-section">
                            <h1 style={{ color: `#aa2634` }} className="desktop-product-hidden-heading">
                                grainy<br />
                                billy<br />
                            </h1>
                            <p className="desktop-product-hidden-desc">
                                Grainy Billy je najlahodnejšia kokosová tyčinka, ktorá ťa 
                                svojou chuťou a ľahkosťou nenechá prestať.
                            </p>
                        </div>
                    )
                }
                handle={<React.Fragment />}
            />
        </div>
    )

}

export default ProductDesktop