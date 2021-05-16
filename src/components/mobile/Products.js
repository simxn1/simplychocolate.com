import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from './Product';
import { useLocation } from "react-router-dom";
import { findProductIndexByUrlQuery } from "../desktop/ProductsDesktop";
import products from "../../constantData/products";

const Products = (props) => {
    
    const location = useLocation();
    const selectedProductIndex = findProductIndexByUrlQuery(location, products);

    const [autoPlay, setAutoPlay] = React.useState(true);

    const turnOffAutoPlay = () => {
        setAutoPlay(false);
    }

    return (
        <Carousel autoPlay={false} interval={5000} infiniteLoop selectedItem={selectedProductIndex} className="products component">

            {
                products.map(product =>
                    <Product
                        name={product.name}
                        icons={product.icons}
                        textFirst={product.textFirst}
                        textSecond={product.textSecond}
                        textThird={product.textThird}
                        nutritionDesc={product.nutritionDesc}
                        nutrition={product.nutrition}
                        color={product.color}
                        onOpenCart={turnOffAutoPlay}
                    />
                )
            }

        </Carousel>
    )

}

export default Products