import { useState } from "react";
import testimonials from "../testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const testimonialCards = testimonials
    .slice(startIndex, startIndex + 3)
    .map((testimonial, index) => (
      <TestimonialCard key={index} testimonial={testimonial} />
    ));
  return (
    <div className="flex items-center ">
      <button onClick={() => startIndex > 0 && setStartIndex(startIndex - 1)}>
        <i className="fa-solid fa-circle-chevron-left text-5xl text-orange-500 hover:text-orange-700"></i>
      </button>
      <div className="flex flex-wrap justify-center m-2">
        {testimonialCards}
      </div>
      <button
        onClick={() =>
          startIndex !== testimonials.length - 3 &&
          setStartIndex(startIndex + 1)
        }
      >
        <i className="fa-solid fa-circle-chevron-right text-5xl text-orange-500 hover:text-orange-700"></i>
      </button>
    </div>
  );
};
export default TestimonialCarousel;
