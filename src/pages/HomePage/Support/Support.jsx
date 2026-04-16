import React from "react";
import support3 from "../../../assets/group.png"
import support2 from "../../../assets/tiny-deliveryman.png"
import support1 from "../../../assets/live-tracking.png"

const features = [
    {
        title: "Live Parcel Tracking",
        desc:
            "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
        img: support1,
    },
    {
        title: "100% Safe Delivery",
        desc:
            "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
         img: support2,
    },
    {
        title: "24/7 Call Center Support",
        desc:
            "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
        img: support3,
    },
];

const Support = () => {
    return (<div className="w-full bg-[#eef0f2] py-10 px-4 md:px-16 space-y-6">
        {features.map((item, index) => (<div
            data-aos="fade-left"
            key={index}
            className="flex container mx-auto flex-col md:flex-row items-center bg-white rounded-2xl shadow-sm p-6 md:p-10 gap-8"
        >
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="h-40 w-40 md:h-48 md:w-48 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 text-sm">
                    <img src={item.img} alt="" /> </div> 
                    
                    </div>

            {/* Divider */}
            <div className="hidden md:block h-32 w-px bg-gray-300"></div>

            {/* TEXT SECTION */}
            <div className="w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-semibold text-teal-900 mb-3">
                    {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {item.desc}
                </p>
            </div>
        </div>
        ))}
    </div>

    );
};

export default Support;
