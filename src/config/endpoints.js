const PRODUCTION_MODE = process.env.NODE_ENV === "production";

let SERVER = "http://localhost:9000";
if (PRODUCTION_MODE) {
    SERVER = "back";
    //console.log("production");
}
else {
    console.log("development");
}

const CHECK_SELECTED_PLACE = `${SERVER}/check-selected-place`;
const CHECKOUT = `${SERVER}/checkout`;
const ORDER = `${SERVER}/order`;
const CHECKOUT_CASH = `${SERVER}/checkout-cash`;


export { CHECK_SELECTED_PLACE, CHECKOUT, CHECKOUT_CASH, ORDER };