import QuoteIcon from "./QuoteIcon";

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`max-h-[300px] w-[350px] bg-white rounded-2xl p-6 flex flex-col border border-gray-100 shadow-lg transition-all duration-300 ${
        isActive ? "opacity-100" : "opacity-30"
      }`}
    >
      <QuoteIcon color={isActive ? "#0d9488" : "#d1d5db"} />

      <p className="text-[13px] leading-[1.65] text-gray-500 mt-4 mb-5 flex-1">
        {testimonial.text}
      </p>

      <div className="border-t border-dashed border-gray-200 mb-4" />

      <div className="flex items-center gap-3">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className={`rounded-full object-cover border-2 ${
            isActive
              ? "w-11 h-11 border-teal-400"
              : "w-9 h-9 border-gray-200"
          }`}
        />
        <div>
          <p className="text-sm font-semibold text-gray-700">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;