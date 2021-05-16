import React from "react";
import ProductDesktop from "./ProductDesktop";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import products from "../../constantData/products";

export const findProductIndexByUrlQuery = (location, products) => {
    const query = location.pathname.replace("/", "");
    if (query.length) {
        if (location.hash === "#products") {
            const productName = query.replace("-", " ");
            const foundProduct = products.find(product => product.name == productName);

            return products.indexOf(foundProduct) ? products.indexOf(foundProduct) : 0;
        }
        else {
            return window.location.replace(window.location.origin + "/" + query + "#products");
        }
    }
    else return;
}

const ProductsDesktop = (props) => {

    const location = useLocation();
    const selectedProductIndex = findProductIndexByUrlQuery(location, products);

    return (
        <Carousel className="desktop-section" autoPlay={true} interval={7500} infiniteLoop selectedItem={selectedProductIndex}>
            {
                products.map((product) =>
                    <ProductDesktop
                        name={product.name}
                        icons={product.icons}
                        desc={product.desktopDesc}
                        textFirst={product.textFirst}
                        textSecond={product.textSecond}
                        textThird={product.textThird}
                        nutritionDesc={product.nutritionDesc}
                        nutrition={product.nutrition}
                        color={product.color}
                        boxQuantity={props.boxQuantity}
                        setBoxQuantity={props.setBoxQuantity}
                        setTotalBoxQuantity={props.setTotalBoxQuantity}
                    />
                )
            }
        </Carousel>
    )

}

export default ProductsDesktop