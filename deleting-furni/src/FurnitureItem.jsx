import * as FurnitureService from "./services/furniture";

const FurnitureItem = (props) => {
  const { furniture, fetchFurniture } = props;
  return (
    <div className="m-4 flex border border-slate-400 rounded-md overflow-clip">
      <img src={furniture.image} className="w-48 h-48" />
      <div className="w-full px-6 py-4 bg-white flex flex-col justify-between">
        <div className="text-2xl">{furniture.name}</div>
        <div>{furniture.description}</div>
        <div className=" flex justify-end">
          <button
            onClick={async () => {
              await FurnitureService.deleteFurniture(furniture.id);
              fetchFurniture();
            }}
            className="bg-red-500 hover:bg-red-700 text-red-50 py-2 px-4 rounded-md"
          >
            <i className="fa-solid fa-trash text-red-50 mr-1"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default FurnitureItem;
