const RestuarantItem = (props) => {
  const { name, rating, location, image, promotion, cost } = props.restaurant;
  return (
    <div className="flex flex-col bg-white shadow-md m-4 relative">
      {promotion && (
        <div className="bg-rose-400 text-white py-1 px-4 absolute top-4 left-0 text-sm rounded-r-full">
          Promotion
        </div>
      )}
      <img src={image} className="w-64 h-40 object-cover" />
      <div className="flex justify-between m-2">
        <div className="text-xl font-medium ">{name}</div>
        <div className="text-rose-500">
          <i className="fa-solid fa-star mr-1"></i>
          {rating}
        </div>
      </div>
      <div className="m-1 text-stone-600">
        <i className="fa-solid fa-location-dot mr-1"></i>
        {location}
      </div>
      <div className="m-1 text-stone-600">{"$".repeat(cost)}</div>
    </div>
  );
};
export default RestuarantItem;
