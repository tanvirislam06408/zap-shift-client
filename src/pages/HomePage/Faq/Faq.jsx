import React from 'react';
import Accordion from './Accordion';

const Faq = () => {
    return (
        <div className="bg-[#edf1f1]">
            <div className='container mx-auto  pt-24'>
                <h1 className='font-extrabold text-4xl text-center text-[#03373D] mb-2 mt-6'>Frequently Asked Question (FAQ)</h1>
                <p className='text-[#606060] text-center mt-3.5 mb-9'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!</p>

                <Accordion/>
            </div>
        </div>
    );
};

export default Faq;