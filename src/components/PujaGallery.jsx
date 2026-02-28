import React from "react";
import omSymbolsvg from "/Om_symbol.svg"


const pujaItems = [
    {
        id: 1,
        category: "coaching",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/1.jpg",
        title: "Durga Puja",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "0%", top: "0px" },
    },
    {
        id: 2,
        category: "strategy",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/2.jpg",
        title: "Raksha Bandhan",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "33.3333%", top: "0px" },
    },
    {
        id: 3,
        category: "coaching strategy",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/3.jpg",
        title: "Janmashtmi",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "66.6667%", top: "0px" },
    },
    {
        id: 4,
        category: "relations coaching",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/4.jpg",
        title: "Mahashivratri",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "0%", top: "502.203px" },
    },
    {
        id: 5,
        category: "stakeholder strategy",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/5.jpg",
        title: "Holi",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "33.3333%", top: "502.203px" },
    },
    {
        id: 6,
        category: "stakeholder",
        img: "https://metropolitanhost.com/themes/themeforest/html/maharatri/assets/img/puja/6.jpg",
        title: "Diwali",
        link: "puja-details.html",
        description: "Puja is the worship of the Lord, consectet ur adipisicing elit, sed do eiusmod",
        style: { left: "66.6667%", top: "502.203px" },
    },
];

const PujaGallery = () => {
    return (
        <div className="">
            <div className="max-w-7xl xl:mx-auto mx-3 md:mx-10 py-10 md:py-20">

                <div className="">
                    <div className="text-center">
                        
                                <span className="flex justify-center items-center gap-2 text-xl font-semibold section-title ">
                                  <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                                  PUJA
                                  <img className="w-5 h-5" src={omSymbolsvg} alt="" />
                                </span>
                        
                                <p className="text-center text-3xl md:text-5xl font-family-lora font-bold section-text mt-2 md:mt-5">Our Puja</p>
                        
                    </div>
                    <div className="">
                        <h5 className="" >All</h5>
                        <h5 className="" >Durga Puja</h5>
                        <h5 className="" >Raksha Bandhan</h5>
                        <h5 className="" >Holi</h5>
                    </div>
                </div>

                {/* Portfolio Items */}
                <div className=" " >
                    {pujaItems.map((item) => (
                        <div
                            key={item.id}
                            className={`col-lg-4`}
                        >
                            <div className="sigma_portfolio-item">
                                <img src={item.img} alt="portfolio" />
                                <div className="sigma_portfolio-item-content">
                                    <div className="sigma_portfolio-item-content-inner">
                                        <h5>
                                            <a href={item.link}>{item.title}</a>
                                        </h5>
                                        <p className="blockquote bg-transparent">{item.description}</p>
                                    </div>
                                    <a href={item.link}><i className="fal fa-plus"></i></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PujaGallery;