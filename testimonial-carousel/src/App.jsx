import TestimonialCard from "./TestimonialCard";
import testimonials from "./testimonials";

const testomonial = testimonials.map((testimonial, index) => (
  <TestimonialCard key={index} testimonial={testimonial} />
));

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-5xl">
        {" "}
        <h1 className="text-3xl text-neutral-600 border-b-4 border-orange-600  p-2">
          Customers Love AI&apos;s Autos
        </h1>
        <div>{testomonial[1]}</div>
      </div>
    </div>
  );
};
export default App;
