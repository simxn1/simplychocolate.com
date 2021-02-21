import React from 'react';
import AboutPageDesktop from './AboutPageDesktop';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const AboutDesktop = () => {

    const pages = [

        {
            bg: "people",
            icon: "cocoahorizons",
            heading: "we care",
            desc: "Čokoláda, ktorú používame, pochádza z kakaa získavaného etickým poľnohospodárstvom."
        },

        {
            bg: "seeds",
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
            bg: "running",
            icon: "protein",
            heading: "high on protein",
            desc: "Naše proteínové tyčinky nie sú suché a ani bez chuti. Stavili sme na kvalitu, ale nezabudli sme ponechať aj vynikajúcu chuť čokolády a starostlivo vybraných surovín."
        },

        {
            bg: "bars",
            icon: "glutenfree",
            heading: "gluten free",
            desc: "Myslíme na všetkých milovníkov čokolády, a preto je väčšina z našich tyčiniek vhodná aj pre ľudí s alergiou na lepok."
        },

        {
            bg: "solarpanel",
            icon: "sun",
            heading: "solar",
            desc: "Vďaka vlastnému systému solárnych panelov, sme 100% energeticky sebestační a čokoládu vyrábame s nulovými emisiami CO2."
        }

    ];

    return (
        <Carousel className="desktop-section" autoPlay={true} interval={5000} infiniteLoop>
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
        </Carousel>
    )

}

export default AboutDesktop