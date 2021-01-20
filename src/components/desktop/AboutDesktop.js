import React from 'react';
import ReactCompareImage from 'react-compare-image';
import AboutPageDesktop from './AboutPageDesktop';

const AboutDesktop = () => {

    const pages = [

        {
            bg: "people",
            icon: "cocoahorizons",
            heading: "we care",
            desc: "Čokoláda, ktorú používame, pochádza z kakaa získavaného etickým poľnohospodárstvom."
        },

        {
            bg: "people",
            icon: "earth",
            heading: "all natural",
            desc: "Pokiaľ ide o naše ingrediencie, sme veľmi vyberaví. Využívame iba to najlepšie, čo príroda ponúka."
        },

        {
            bg: "chocolates",
            icon: "noartificials",
            heading: "no artificials",
            desc: "Chuť a kvalita sú všetkým. Využívame pomerne veľa času hľadaním skvelých ingrediencií a zaujímavých chutí."
        },

        {
            bg: "chocolates",
            icon: "glutenfree",
            heading: "gluten free",
            desc: "Myslíme na všetkých milovníkov čokolády, a preto je väčšina z našich tyčiniek vhodná aj pre ľudí s alergiou na lepok."
        }

    ];

    return (
        <>
            {
                pages.map((page) =>
                    <AboutPageDesktop
                        bg={page.bg}
                        icon={page.icon}
                        heading={page.heading}
                        desc={page.desc}
                    />
                )
            }
        </>
    )

}

export default AboutDesktop