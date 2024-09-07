const TestimonialCard = (props) => {
  const { testimonial } = props;
  const { name, portrait, rating, text } = testimonial;
  return (
    <div className="flex flex-col w-72 m-2">
      <div className="flex flex-col bg-gradient-to-r from-orange-300 to-red-500 items-center py-4 rounded-t-lg">
        <img
          src={portrait}
          className="w-24 h-24 object-cover rounded-full border-2 border-black"
        />
        <div className="text-xl text-white">{name}</div>
      </div>
      <div className="flex flex-col items-center border border-neutral-300 px-4 py-6 rounded-b-lg">
        <div className="text-amber-400 mb-4">
          {rating}
          <i className="fa-solid fa-star ml-1"></i>
        </div>
        <div className="text-neutral-600 leading-relaxed">{text}</div>
      </div>
    </div>
  );
};
export default TestimonialCard;
