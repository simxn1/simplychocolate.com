import React from "react";
import { Carousel } from 'react-responsive-carousel';
import ProductSecond from "./ProductSecond";
import productsSecond from "../../constantData/productsSecond";

const ProductsSecond = (props) => {

    return (
        <div className="desktop-section">
            <Carousel>
                {
                    productsSecond.map(product =>
                        <ProductSecond
                            firstLine={product.firstLine}
                            secondLine={product.secondLine}
                            color={product.color}
                            price={product.price}
                            priceColor={product.priceColor}
                            nutrition={product.nutrition}
                            nutritionDesc={product.nutritionDesc}
                            productsSecondQuantity={props.productsSecondQuantity}
                            setProductsSecondQuantity={props.setProductsSecondQuantity}
                        />
                    )
                }
            </Carousel>
        </div>
    )
}

export default ProductsSecond