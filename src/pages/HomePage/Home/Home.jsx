import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import BrandMarquee from '../BrandMarquee/BrandMarquee';
import Support from '../Support/Support';
import Marchent from '../Marchent/Marchent';
import TestimonialSlider from '../Testimonial/TestimonialSlider';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
           <BrandMarquee/>
           <Support/>
           <Marchent/>
           <TestimonialSlider/>
           <Faq/>
        </div>
    );
};

export default Home;