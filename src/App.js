import React from "react";
import { Route, Switch } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@animated-burgers/burger-squeeze/dist/styles.css";
import "./css/mobileApp.css";
import "./css/desktopApp.css";
import "./css/menu.css";
import "./css/social.css";
import "./css/buyerInfo.css";
import "./css/mixedBox.css";
import "./css/finalCheck.css";
import "./css/shippingAndPaymentMethod.css";
import "./css/checkBuyerInfo.css";
import "./css/afterPayment.css";
import { isMobile } from "react-device-detect";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import ObchodnePodmienky from "./components/mutual/ObchodnePodmienky";
import ZasadyOchranyOsobnychUdajov from "./components/mutual/ZasadyOchranyOsobnychUdajov";
import BuyerInformation from "./components/mutual/BuyerInformation";
import MixedBox from "./components/mutual/MixedBox";
import FinalCheck from "./components/mutual/FinalCheck";
import ShippingAndPaymentMethod from "./components/mutual/ShippingAndPaymentMethod";
import CheckBuyerInformation from "./components/mutual/CheckBuyerInformation";
import AfterPayment from "./components/mutual/AfterPayment";


const App = () => {

  if (isMobile) return (
    <Switch>
      <Route exact path="/" component={Mobile} />
      <Route path="/mixed-box" component={MixedBox} />
      <Route path="/buyer-info" component={BuyerInformation} />
      <Route path="/final-check" component={FinalCheck} />
      <Route path="/shipping-and-payment-method" component={ShippingAndPaymentMethod} />
      <Route path="/buyer-info-check" component={CheckBuyerInformation} />
      <Route path="/obchodne-podmienky" component={ObchodnePodmienky} />
      <Route path="/zasady-ochrany-osobnych-udajov" component={ZasadyOchranyOsobnychUdajov} />
      <Route path="/paid" component={AfterPayment} />
      <Route component={Mobile} />
    </Switch>
  )
  else return (
    <Switch>
      <Route exact path="/" component={Desktop} />
      <Route path="/mixed-box" component={MixedBox} />
      <Route path="/buyer-info" component={BuyerInformation} />
      <Route path="/final-check" component={FinalCheck} />
      <Route path="/shipping-and-payment-method" component={ShippingAndPaymentMethod} />
      <Route path="/buyer-info-check" component={CheckBuyerInformation} />
      <Route path="/obchodne-podmienky" component={ObchodnePodmienky} />
      <Route path="/zasady-ochrany-osobnych-udajov" component={ZasadyOchranyOsobnychUdajov} />
      <Route path="/paid" component={AfterPayment} />
      <Route component={Desktop} />
    </Switch>
  )

}

export default App;
