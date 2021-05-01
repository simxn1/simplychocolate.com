import React from "react";
import { Carousel } from 'react-responsive-carousel';
import ProductSecond from "./ProductSecond";

const ProductsSecond = () => {

    const products = [
        {
            firstLine: "yes you ",
            secondLine: "can buy love",
            color: "#82bbbd",
            price: "2000",
            priceColor: "#536d71",
            nutrition: [
                "2311 kJ/552 kCal",
                "36 g",
                "22 g",
                "46 g",
                "44 g",
                "8,4 g",
                "0,26 g"
            ],
            nutritionDesc: "Kakaová hmota, cukor, kakaové maslo, celé MLIEKO v prášku, MANDLE, sušený kokos, karamelové chrumky, SÓJOVÁ bielkovina, emulgátor SÓJOVÝ lecitín, prírodná vanilková príchuť, sladké drievko, maliny (sušené mrazom), nerafinovaná morská soľ, soľ, citrónový olej, kávové zrná."
        },
        {
            firstLine: "instead ",
            secondLine: "of flowers",
            color: "#ef8599",
            price: "1200",
            priceColor: "#803547",
            nutrition: [
                "2123 kJ/507 kCal",
                "32 g",
                "19 g",
                "46 g",
                "44 g",
                "8,2 g",
                "0,24 g"
            ],
            nutritionDesc: "Kakaová hmota, cukor, kakaové maslo, celé MLIEKO v prášku, MANDLE, sušený kokos, karamelové chrumky, SÓJOVÁ bielkovina, emulgátor SÓJOVÝ lecitín, prírodná vanilková príchuť, sladké drievko, maliny (sušené mrazom), nerafinovaná morská soľ, soľ, citrónový olej, kávové zrná."
        }
    ]

    return (
        <div className="desktop-section">
            <Carousel>
                {
                    products.map(product =>
                        <ProductSecond
                            firstLine={product.firstLine}
                            secondLine={product.secondLine}
                            color={product.color}
                            price={product.price}
                            priceColor={product.priceColor}
                            nutrition={product.nutrition}
                            nutritionDesc={product.nutritionDesc}
                        />
                    )
                }
            </Carousel>
        </div>
    )
}

export default ProductsSecond