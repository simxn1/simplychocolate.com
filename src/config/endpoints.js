const PRODUCTION_MODE = process.env.NODE_ENV === "production";

let SERVER = "http://localhost:9000";
if (PRODUCTION_MODE) {
    SERVER = "";
    console.log("production");
}
else {
    console.log("development");
}

const CHECK_SELECTED_PLACE = `${SERVER}/check-selected-place`;


export default CHECK_SELECTED_PLACE;