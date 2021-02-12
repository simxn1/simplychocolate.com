import React from "react";
import { Redirect, Route } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./css/mobileApp.css";
import "./css/desktopApp.css";
import "./css/buyerInfo.css";
import "./css/mixedBox.css";
import "./css/finalCheck.css";
import "./css/shippingAndPaymentMethod.css";
import "./css/checkBuyerInfo.css";
import { isMobile } from "react-device-detect";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import BuyerInformation from "./components/mutual/BuyerInformation";
import MixedBox from "./components/mutual/MixedBox";
import FinalCheck from "./components/mutual/FinalCheck";
import ShippingAndPaymentMethod from "./components/mutual/ShippingAndPaymentMethod";
import CheckBuyerInformation from "./components/mutual/CheckBuyerInformation";


const App = () => {



  if (isMobile) return (
    <>
      <Route exact path="/" component={Mobile} />
      <Route path="/mixed-box" component={MixedBox} />
      <Route path="/buyer-info" component={BuyerInformation} />
      <Route path="/final-check" component={FinalCheck} />
      <Route path="/shipping-and-payment-method" component={ShippingAndPaymentMethod} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </>
  )
  else return (
    <>
      <Route exact path="/" component={Desktop} />
      <Route path="/mixed-box" component={MixedBox} />
      <Route path="/buyer-info" component={BuyerInformation} />
      <Route path="/final-check" component={FinalCheck} />
      <Route path="/shipping-and-payment-method" component={ShippingAndPaymentMethod} />
      <Route path="/buyer-info-check" component={CheckBuyerInformation} />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </>
  )

}

export default App;
