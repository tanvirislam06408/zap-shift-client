import React from 'react';

const ServiceCard = ({ service }) => {
    const { icon: Icon, title, description, featured } = service;
    return (
        <div
            className={`group flex flex-col items-center text-center rounded-2xl p-8 transition duration-300
        ${featured
                    ? "bg-gradient-to-br from-lime-400 to-lime-500 shadow-xl text-white"
                    : "bg-white shadow-md hover:-translate-y-2 hover:shadow-xl"
                }`}
        >
            {/* Icon */}
            <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-5 transition
          ${featured
                        ? "bg-white/20"
                        : "bg-lime-100 group-hover:bg-lime-500"
                    }`}
            >
                <Icon
                    size={28}
                    className={`transition ${featured
                            ? "text-white"
                            : "text-lime-600 group-hover:text-white"
                        }`}
                />
            </div>

            {/* Title */}
            <h3
                className={`font-bold text-lg mb-2 ${featured ? "text-white" : "text-gray-800"
                    }`}
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className={`text-sm leading-relaxed ${featured ? "text-white/90" : "text-gray-500"
                    }`}
            >
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;