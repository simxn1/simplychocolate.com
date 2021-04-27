import React from "react";
import ProductDesktop from "./ProductDesktop";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

export const findProductIndexByUrlQuery = (location, products) => {
    const query = location.search.replace("?", "");
    if (query.length) {
        if (location.hash === "#products") {
            const productName = query.replace("-", " ");
            const foundProduct = products.find(product => product.name == productName);

            return products.indexOf(foundProduct) ? products.indexOf(foundProduct) : 0;
        }
        else {
            return window.location.replace(window.location.origin + "?" + query + "#products");
        }
    }
    else return;
}

const ProductsDesktop = () => {

    const products = [

        {
            name: "grainy billy",
            icons: "four",
            textFirst: "kokos",
            textSecond: "brusnice",
            textThird: "prémiová čokoláda",
            desc: "Grainy Billy je najlahodnejšia kokosová tyčinka, ktorá ťa svojou chuťou a ľahkosťou nenechá prestať.",
            color: "#a82737"
        },

        {
            name: "crispy carrie",
            icons: "four",
            textFirst: "chrumkavý karamel",
            textSecond: "morská soľ",
            textThird: "prémiová mliečna čokoláda",
            desc: "Crispy Carrie nie je žiadna poledancerka! Je to jednoducho jedinečná tyčinka z mliečnej čokolády so slaným karamelom.",
            color: "#b4531a"
        },

        {
            name: "grainy sue",
            icons: "three",
            textFirst: "ovos, špalda a arašidy",
            textSecond: "karamel",
            textThird: "prémiová tmavá čokoláda",
            desc: "Grainy Sue je vynikajúca muesli tyčinka, ktorá ťa ráno nakopne na celý deň.",
            color: "#d19c2a"
        },

        {
            name: "fit fiona",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "ríbezle",
            textThird: "prémiová tmavá čokoláda",
            desc: "Fit fiona je pravá športovkyňa, ktorá ťa vďaka svojej skvelej chuti a proteínom nenechá len tak ležať pri telke.",
            color: "#bd79b8"
        },

        {
            name: "rich arnold",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "karamel, arašidy",
            textThird: "prémiová tmavá čokoláda",
            desc: "Rich Arnold je proteínová tyčinka, ktorá je nabitá chuťami. Táto tyčinka ťa nenechá o hlade.",
            color: "#eccd5c"
        },

        {
            name: "speedy tom",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "acai, kokos a passion fruit",
            textThird: "prémiová tmavá čokoláda",
            desc: "Speedy Tom je proteinová tyčinka, ktorá obsahuje kombináciu surovín, ktoré Ti dodajú energiu na celý deň.",
            color: "#82babd"
        }

    ];

    const location = useLocation();
    const selectedProductIndex = findProductIndexByUrlQuery(location, products);

    return (
        <Carousel className="desktop-section" autoPlay={true} interval={7500} infiniteLoop selectedItem={selectedProductIndex}>
            {
                products.map((product) =>

                    <ProductDesktop
                        name={product.name}
                        icons={product.icons}
                        desc={product.desc}
                        textFirst={product.textFirst}
                        textSecond={product.textSecond}
                        textThird={product.textThird}
                        desc={product.desc}
                        color={product.color}
                    />
                )
            }
        </Carousel>
    )

}

export default ProductsDesktop