const PropertyItem = (props) => {
  const { property } = props;
  const { address, city, bedrooms, bathrooms, imageUrl } = property;
  return (
    <div className="border border-gray-300 rounded-lg overflow-clip ">
      <img src={imageUrl} className="w-72 h-64 object-cover" />
      <div className="p-4 text-gray-500">
        <div className="text-xl text-black"> {address}</div>
        <div>{city}</div>
        <div className="flex justify-between mt-2">
          <div>
            <i className="fa-solid fa-bed text-xl text-blue-400"></i> {bedrooms}
          </div>
          <div>
            <i className="fa-solid fa-toilet text-xl text-blue-400"></i>{" "}
            {bathrooms}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyItem;
