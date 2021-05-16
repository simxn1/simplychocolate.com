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
import "./css/chocolateBox.css";
import "./css/cartCheck.css";
import "./css/shippingAndPaymentMethod.css";
import "./css/checkBuyerInfo.css";
import "./css/afterPayment.css";
import { isMobile } from "react-device-detect";
import Desktop from "./components/Desktop";
import Mobile from "./components/Mobile";
import ObchodnePodmienky from "./components/mutual/ObchodnePodmienky";
import ZasadyOchranyOsobnychUdajov from "./components/mutual/ZasadyOchranyOsobnychUdajov";
import BuyerInformation from "./components/mutual/checkout/BuyerInformation";
import MixedBox from "./components/mutual/MixedBox";
import ChocolateBox from "./components/mutual/ChocolateBox";
import CartCheck from "./components/mutual/checkout/CartCheck";
import ShippingAndPaymentMethod from "./components/mutual/checkout/ShippingAndPaymentMethod";
import CheckBuyerInformation from "./components/mutual/checkout/CheckBuyerInformation";
import AfterPayment from "./components/mutual/checkout/AfterPayment";
import products from "./constantData/products";
import productsSecond from "./constantData/productsSecond";
import boxSizes from "./constantData/boxSizes";

const App = () => {

  const fillProductsQuantityArray = (productsArray) => {
    let productsQuantityArray = [];
    for (let i = 0; i < productsArray.length; i++) {
      productsQuantityArray.push(0);
    }
    return productsQuantityArray;
  }

  const [boxQuantity, setBoxQuantity] = React.useState(fillProductsQuantityArray(products));
  const [totalBoxQuantity, setTotalBoxQuantity] = React.useState(0);
  const [productsSecondQuantity, setProductsSecondQuantity] = React.useState(fillProductsQuantityArray(productsSecond));
  const [totalPrice, setTotalPrice] = React.useState(0.00);

  React.useEffect(() => {
    let newTotalPrice = 0;

    if (totalBoxQuantity) {
      const selectedBoxSize = boxSizes.find(boxSizeToFind => boxSizeToFind.productCount === totalBoxQuantity);
      newTotalPrice += selectedBoxSize.price;
    }

    for (let i = 0; i < productsSecondQuantity.length; i++) {
      newTotalPrice += productsSecondQuantity[i] * productsSecond[i].price;
    }

    setTotalPrice(newTotalPrice);
  }, [totalBoxQuantity, productsSecondQuantity])

  return (
    <Switch>
      {
        isMobile
          ? <Route exact path="/" render={
            () => <Mobile
              boxQuantity={boxQuantity}
              setBoxQuantity={setBoxQuantity}
              setTotalBoxQuantity={setTotalBoxQuantity}
              productsSecondQuantity={productsSecondQuantity}
              setProductsSecondQuantity={setProductsSecondQuantity}
            />
          } />
          : <Route exact path="/" render={
            () => <Desktop
              boxQuantity={boxQuantity}
              setBoxQuantity={setBoxQuantity}
              setTotalBoxQuantity={setTotalBoxQuantity}
              productsSecondQuantity={productsSecondQuantity}
              setProductsSecondQuantity={setProductsSecondQuantity}
            />
          } />
      }
      <Route path="/mixed-box" render={
        () => <MixedBox
          boxQuantity={boxQuantity}
          setBoxQuantity={setBoxQuantity}
          totalBoxQuantity={totalBoxQuantity}
          setTotalBoxQuantity={setTotalBoxQuantity}
        />
      } />
      <Route path="/chocolate-box" render={
        () => <ChocolateBox
          productsSecondQuantity={productsSecondQuantity}
          setProductsSecondQuantity={setProductsSecondQuantity}
        />
      } />
      <Route path="/cart-check" render={
        () => <CartCheck
          boxQuantity={boxQuantity}
          setBoxQuantity={setBoxQuantity}
          totalBoxQuantity={totalBoxQuantity}
          productsSecondQuantity={productsSecondQuantity}
          setProductsSecondQuantity={setProductsSecondQuantity}
          totalPrice={totalPrice}
        />
      } />
      <Route path="/buyer-info" render={
        () => <BuyerInformation
          totalBoxQuantity={totalBoxQuantity}
          productsSecondQuantity={productsSecondQuantity}
        />
      } />
      <Route path="/shipping-and-payment-method" render={
        () => <ShippingAndPaymentMethod 
          totalPrice={totalPrice}
          setTotalPrice={setTotalPrice}
        />
      } />
      <Route path="/buyer-info-check" render={
        () => <CheckBuyerInformation 
            boxQuantity={boxQuantity}
            totalBoxQuantity={totalBoxQuantity}
            productsSecondQuantity={productsSecondQuantity}
            totalPrice={totalPrice}
        />
      } />
      <Route path="/obchodne-podmienky" component={ObchodnePodmienky} />
      <Route path="/zasady-ochrany-osobnych-udajov" component={ZasadyOchranyOsobnychUdajov} />
      <Route path="/paid" component={AfterPayment} />
      {
        isMobile
          ? <Route render={
            () => <Mobile
              boxQuantity={boxQuantity}
              setBoxQuantity={setBoxQuantity}
              setTotalBoxQuantity={setTotalBoxQuantity}
              productsSecondQuantity={productsSecondQuantity}
              setProductsSecondQuantity={setProductsSecondQuantity}
            />
          } />
          : <Route render={
            () => <Desktop
              boxQuantity={boxQuantity}
              setBoxQuantity={setBoxQuantity}
              setTotalBoxQuantity={setTotalBoxQuantity}
              productsSecondQuantity={productsSecondQuantity}
              setProductsSecondQuantity={setProductsSecondQuantity}
            />
          } />
      }
    </Switch>
  )

}

export default App;
