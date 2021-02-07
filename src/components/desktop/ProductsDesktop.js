import React from "react";
import ProductDesktop from "./ProductDesktop";
import { Carousel } from "react-responsive-carousel";

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
            name: "creamy carol",
            icons: "four",
            textFirst: "tekutý karamel",
            textSecond: "prémiová tmavá čokoláda",
            textThird: "",
            desc: "Creamy Carol je najlahodnejšia karamelová tyčinka, ktorú vďaka poriadnej dávke karamelu neodložíš.",
            color: "#572698"
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

    return (
        <Carousel className="desktop-section" autoPlay={false} interval={10000} infiniteLoop>
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

/*
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
*/



export default ProductsDesktop