import { useState } from "react";
import testimonials from "./testimonialsData";
import TestimonialCard from "./TestimonialCard";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#edf1f1] py-16 flex flex-col items-center">
      <h2 className="text-[28px] font-bold text-gray-800 mb-2">
        What our customers are saying
      </h2>

      <p className="text-gray-500 text-sm text-center max-w-[420px] mb-12">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
      </p>

      <div className="w-full max-w-6xl px-4">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}                                        // ✅ breakpoints closed here
          centeredSlides={true}                     // ✅ now a top-level prop
          loop={true}
          spaceBetween={24}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={t.id} className="flex justify-center py-4">
              <TestimonialCard
                testimonial={t}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}