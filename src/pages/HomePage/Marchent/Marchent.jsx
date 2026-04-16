import React from 'react';
import locationPng from '../../../assets/location-merchant.png'
const Marchent = () => {
    return (
        <div data-aos="flip-up" className=" bg-no-repeat bg-[url('assets/be-a-merchant-bg.png')] bg-[#03373D] container mx-auto my-9 rounded-4xl p-20">
            <div className="flex items-center flex-col lg:flex-row-reverse gap-7">
                <div className="flex-1">
                    <img
                        src={locationPng}
                        className=" rounded-lg shadow-2xl w-full"
                    />
                </div>
                <div className='flex-1'>
                    <h1 className="text-4xl text-white font-extrabold">Merchant and Customer Satisfaction is Our First Priority</h1>
                    <p className="py-6 text-[#DADADA]">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <div className="flex gap-5">
                        <button className="btn btn-primary rounded-full text-black">Become a Merchant</button>
                        <button className="btn btn-outline rounded-full text-[#CAEB66] hover:text-black hover:bg-[#CAEB66]">Earn with Profast Courier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marchent;