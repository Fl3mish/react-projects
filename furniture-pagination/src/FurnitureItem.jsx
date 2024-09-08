const FurnitureItem = (props) => {
  const { title, description, imageUrl } = props.furniture;
  return (
    <div className="border border-slate-400 bg-white rounded-lg flex shadow-sm m-4 overflow-clip">
      <img src={imageUrl} className="w-52 overflow-clip object-cover" />
      <div className=" p-4 bg-white flex flex-col justify-between ">
        <div className="text-2xl"> {title}</div>
        <div className=""> {description}</div>
        <div className="flex justify-end">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-lg ">
            add to card
          </button>
        </div>
      </div>
    </div>
  );
};
export default FurnitureItem;
