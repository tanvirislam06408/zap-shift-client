import React from "react";
import * as MarqueeModule from "react-fast-marquee";
const Marquee = MarqueeModule.default?.default || MarqueeModule.default || MarqueeModule;
import logo1 from "../../../assets/brands/amazon.png";
import logo2 from "../../../assets/brands/amazon_vector.png";
import logo3 from "../../../assets/brands/casio.png";
import logo4 from "../../../assets/brands/moonstar.png";
import logo5 from "../../../assets/brands/randstad.png";
import logo6 from "../../../assets/brands/start-people 1.png";
import logo7 from "../../../assets/brands/start.png";

const BrandMarquee = () => {
    const brands = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    return (<div className="py-6"> 
    <h1 className="text-4xl font-extrabold text-center mb-10 text-[#03373D]">We've helped thousands of sales teams</h1>
    <Marquee speed={50} pauseOnHover autoFill={true}>
        {brands.map((logo, index) => (<div  key={index} className="mx-14 w-[100px] h-12">
            <img
                src={logo}
                alt=""
                className="h-12 w-auto object-contain "
            /> </div>
        ))} </Marquee> 
        </div>
    );
};

export default BrandMarquee;
