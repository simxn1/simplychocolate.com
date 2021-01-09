import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from './Product';

const Products = (props) => {

    const [productsQuantity, setProductsQuantity] = React.useState({
        grainyBilly: 0,
        creamyCarol: 0,
        crispyCarrie: 0,
        grainySue: 0,
        fitFiona: 0,
        richArnold: 0,
        speedyTom: 0
    })

    const grainyBillyAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            grainyBilly: ++productsQuantity.grainyBilly
        }))
    }

    const grainyBillyRemove = () => {
        if (productsQuantity.grainyBilly > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                grainyBilly: --productsQuantity.grainyBilly
            }))
        }
    }

    const creamyCarolAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            creamyCarol: ++productsQuantity.creamyCarol
        }))
    }

    const creamyCarolRemove = () => {
        if (productsQuantity.creamyCarol > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                creamyCarol: --productsQuantity.creamyCarol
            }))
        }
    }

    const crispyCarrieAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            crispyCarrie: ++productsQuantity.crispyCarrie
        }))
    }

    const crispyCarrieRemove = () => {
        if (productsQuantity.crispyCarrie > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                crispyCarrie: --productsQuantity.crispyCarrie
            }))
        }
    }

    const grainySueAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            grainySue: ++productsQuantity.grainySue
        }))
    }

    const grainySueRemove = () => {
        if (productsQuantity.grainySue > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                grainySue: --productsQuantity.grainySue
            }))
        }
    }

    const fitFionaAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            fitFiona: ++productsQuantity.fitFiona
        }))
    }

    const fitFionaRemove = () => {
        if (productsQuantity.fitFiona > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                fitFiona: --productsQuantity.fitFiona
            }))
        }
    }

    const richArnoldAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            richArnold: ++productsQuantity.richArnold
        }))
    }

    const richArnoldRemove = () => {
        if (productsQuantity.richArnold > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                richArnold: --productsQuantity.richArnold
            }))
        }
    }

    const speedyTomAdd = () => {
        setProductsQuantity(productsQuantity => ({
            ...productsQuantity,
            speedyTom: ++productsQuantity.speedyTom
        }))
        console.log(productsQuantity);
    }

    const speedyTomRemove = () => {
        if (productsQuantity.speedyTom > 0) {
            setProductsQuantity(productsQuantity => ({
                ...productsQuantity,
                speedyTom: --productsQuantity.speedyTom
            }))
        }
        console.log(productsQuantity);
    }


    const products = [

        {
            name: "grainy billy",
            icons: "four",
            textFirst: "kokos",
            textSecond: "brusnice",
            textThird: "prémiová čokoláda",
            color: "#a82737"
        },

        {
            name: "creamy carol",
            icons: "four",
            textFirst: "tekutý karamel",
            textSecond: "prémiová tmavá čokoláda",
            textThird: "",
            color: "#572698"
        },

        {
            name: "crispy carrie",
            icons: "four",
            textFirst: "chrumkavý karamel",
            textSecond: "morská soľ",
            textThird: "prémiová mliečna čokoláda",
            color: "#b4531a"
        },

        {
            name: "grainy sue",
            icons: "three",
            textFirst: "ovos, špalda a arašidy",
            textSecond: "karamel",
            textThird: "prémiová tmavá čokoláda",
            color: "#d19c2a"
        },

        {
            name: "fit fiona",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "ríbezle",
            textThird: "prémiová tmavá čokoláda",
            color: "#bd79b8"
        },

        {
            name: "rich arnold",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "karamel, arašidy",
            textThird: "prémiová tmavá čokoláda",
            color: "#eccd5c"
        },

        {
            name: "speedy tom",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "acai, kokos a passion fruit",
            textThird: "prémiová tmavá čokoláda",
            color: "#82babd"
        },

    ];

    return (
        <Carousel autoPlay={false} className="products">

            {
                products.map(product =>
                    <Product
                        name={product.name}
                        icons={product.icons}
                        textFirst={product.textFirst}
                        textSecond={product.textSecond}
                        textThird={product.textThird}
                        color={product.color}
                    />
                )
            }

        </Carousel>
    )

}

export default Products