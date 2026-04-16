import React from 'react';
import {
  Zap,
  MapPin,
  Package,
  Banknote,
  Building2,
  RotateCcw,
} from "lucide-react";
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = [
  {
    id: 1,
    icon: Zap,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
    featured: true,
  },
  {
    id: 3,
    icon: Package,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    id: 4,
    icon: Banknote,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: 5,
    icon: Building2,
    title: "Corporate Service",
    description:
      "Customized corporate services including warehouse and inventory management.",
  },
  {
    id: 6,
    icon: RotateCcw,
    title: "Parcel Return",
    description:
      "Customers can return or exchange products through our reverse logistics facility.",
  },
];



    return (
        <div className="bg-gradient-to-br mt-8 from-emerald-900 via-emerald-800 to-emerald-900 rounded-3xl px-6 py-16 sm:px-10 sm:py-20 container mb-7 mx-auto">
      
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          Our Services
        </h2>
        <p className="text-white/70 max-w-lg mx-auto text-sm sm:text-base">
          Fast, reliable parcel delivery with real-time tracking. From personal
          packages to business shipments — we deliver on time.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
    );
};

export default Services;






