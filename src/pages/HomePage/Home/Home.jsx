import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import BrandMarquee from '../BrandMarquee/BrandMarquee';
import Support from '../Support/Support';
import Marchent from '../Marchent/Marchent';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
           <BrandMarquee/>
           <Support/>
           <Marchent/>
        </div>
    );
};

export default Home;