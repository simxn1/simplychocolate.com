import React from "react";
import ProductDesktop from "./ProductDesktop";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";

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

const ProductsDesktop = () => {

    const products = [

        {
            name: "grainy billy",
            icons: "four",
            textFirst: "kokos",
            textSecond: "brusnice",
            textThird: "prémiová čokoláda",
            desc: "Grainy Billy je najlahodnejšia kokosová tyčinka, ktorá ťa svojou chuťou a ľahkosťou nenechá prestať.",
            nutritionDesc: "Cukor, kokos (18%), kakaová hmota, glukóza, kakaové maslo, brusnice (10%), celé MLIEKO v prášku, voda, MASLO, slnečnicový olej, prírodná vanilková aróma, emulgátor: SÓJOVÝ lecitín.",
            nutrition: [
                "2139 kJ/511 kcal",
                "33 g",
                "23 g",
                "49 g",
                "35 g",
                "4,6 g",
                "0,09 g"
            ],
            color: "#a82737"
        },

        {
            name: "crispy carrie",
            icons: "four",
            textFirst: "chrumkavý karamel",
            textSecond: "morská soľ",
            textThird: "prémiová mliečna čokoláda",
            desc: "Crispy Carrie nie je žiadna poledancerka! Je to jednoducho jedinečná tyčinka z mliečnej čokolády so slaným karamelom.",
            nutritionDesc: "Mliečna čokoláda (cukor, kakaové maslo, celé MLIEKO v prášku, prírodná vanilková aróma, emulgátor, SÓJOVÝ lecitín) (90%), SÓJOVÝ proteín, karamelové vločky (cukor, glukózový sirup, celé MLIEKO v prášku, kondenzované MLIEKO, MASLO, morská soľ) (4,3%), morská soľ (0,4%).",
            nutrition: [
                "2218 kJ/530 kcal",
                "31 g",
                "19 g",
                "50 g",
                "47 g",
                "12,2 g",
                "0,38 g"
            ],
            color: "#b4531a"
        },

        {
            name: "grainy sue",
            icons: "three",
            textFirst: "ovos, špalda a arašidy",
            textSecond: "karamel",
            textThird: "prémiová tmavá čokoláda",
            desc: "Grainy Sue je vynikajúca muesli tyčinka, ktorá ťa ráno nakopne na celý deň.",
            nutritionDesc: "Tmavá čokoláda (kakao, maslo, cukor, kakaové maslo), OVOS (15%), glukóza, ARAŠIDY (13%), ŠPALDOVÉ vločky (pšenica) (8%), plnotučné MLIEKO, invertný cukor, soľ, práškový cukor, ARAŠIDOVÁ múka, citrónová šťava, prírodná vanilková aróma, emulgátor, SÓJOVÝ lecitín.",
            nutrition: [
                "2013 kJ/481 kcal",
                "25 g",
                "12 g",
                "54 g",
                "35 g",
                "8,2 g",
                "0,23 g"
            ],
            color: "#d19c2a"
        },

        {
            name: "fit fiona",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "ríbezle",
            textThird: "prémiová tmavá čokoláda",
            desc: "Fit Fiona je pravá športovkyňa, ktorá ťa vďaka svojej skvelej chuti a proteínom nenechá len tak ležať pri telke.",
            nutritionDesc: "Tmavá čokoláda (kakaová sušina, cukor, kakaové maslo, emulgátor: SÓJOVÝ lecitín) (24%), PROTEÍNOVÝ PRÁŠOK (srvátkový proteín izolát z MLIEKA) (20%), datľová pasta, glukózový sirup, invertný cukor, MANDLE, brusnice (3%), MANDLOVÁ MÚKA (3%), čučoriedky 3% (jablkový koncentrát, slnečnicový olej), repkový olej, datľový sirup, lyofilizované maliny (2%), lyofilizované čierne ríbezle (0,9%) ), soľ, citrónová šťava.",
            nutrition: [
                "1740 kJ/416 kcal",
                "17 g",
                "6 g",
                "40 g",
                "28 g",
                "25 g",
                "0,11 g"
            ],
            color: "#bd79b8"
        },

        {
            name: "rich arnold",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "karamel, arašidy",
            textThird: "prémiová tmavá čokoláda",
            desc: "Rich Arnold je proteínová tyčinka, ktorá je nabitá chuťami. Táto tyčinka ťa nenechá o hlade.",
            nutritionDesc: "Tmavá čokoláda (kakaová sušina, cukor, kakaové maslo, emulgátor: SÓJOVÝ lecitín) (23,2%), datľová pasta, PROTEÍNOVÝ prášok (izolát srvátkový proteín z MLIEKA) (12,8%), glukózový sirup, invertný cukor, ARAŠIDY, SÓJOVÝ PROTEÍN, kúsky chrumkavého LIESKOVÉHO ORECHU, ARAŠIDOVÁ múka (5,1%), repkový olej, datľový sirup, rakytník (0,4%), soľ.",
            nutrition: [
                "1855 kJ/443 kcal",
                "18 g",
                "7 g",
                "42 g",
                "31 g",
                "25 g",
                "0,23 g"
            ],
            color: "#eccd5c"
        },

        {
            name: "speedy tom",
            icons: "five",
            textFirst: "proteínová tyčinka",
            textSecond: "acai, kokos a passion fruit",
            textThird: "prémiová tmavá čokoláda",
            desc: "Speedy Tom je proteinová tyčinka, ktorá obsahuje kombináciu surovín, ktoré Ti dodajú energiu na celý deň.",
            nutritionDesc: "Tmavá čokoláda (kakaová sušina, cukor, kakaové maslo, emulgátor: SÓJOVÝ lecitín (25,6%)), datľová pasta, PROTEÍNOVÝ PRÁŠOK (izolát srvátkový proteín z MLIEKA) (17%), glukózový sirup, SÓJOVÝ PROTEÍN (8%), invertný cukor, kakaový prášok (4%), kakaové drviny (2,2%), repkový olej, mučenka (0,89%), soľ, prášok z acai (0,22%).",
            nutrition: [
                "1665 kJ/398 kcal",
                "14 g",
                "8 g",
                "43 g",
                "27 g",
                "25 g",
                "0,26 g"
            ],
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
                        nutritionDesc={product.nutritionDesc}
                        nutrition={product.nutrition}
                        color={product.color}
                    />
                )
            }
        </Carousel>
    )

}

export default ProductsDesktop