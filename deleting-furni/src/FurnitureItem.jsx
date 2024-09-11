import { useState } from "react";
import * as FurnitureService from "./services/furniture";

const FurnitureItem = (props) => {
  const { furniture, fetchFurniture } = props;
  const [currentName, setCurrentName] = useState(furniture.name);
  const [currentDescription, setCurrentDescription] = useState(
    furniture.description
  );
  const [editing, setEditing] = useState(false);
  return (
    <div className="m-4 flex border border-slate-400 rounded-md overflow-clip">
      <img src={furniture.image} className="w-48 h-48" />
      <div className="w-full px-6 py-4 bg-white flex flex-col justify-between">
        {editing ? (
          <>
            <input
              type="text"
              value={currentName}
              onChange={(e) => setCurrentName(e.target.value)}
              className="border border-stone-200 rounded-md shadow-inner p-1 text-xl text-blue-600 my-1"
            />
            <textarea
              value={currentDescription}
              onChange={(e) => setCurrentDescription(e.target.value)}
              className="border border-stone-200 rounded-md shadow-inner p-1 text-xl text-blue-600 my-1"
            />
          </>
        ) : (
          <>
            {" "}
            <div className="text-2xl">{furniture.name}</div>
            <div>{furniture.description}</div>
          </>
        )}

        <div className=" flex justify-end">
          {/* Edit/Save */}
          {editing ? (
            <button
              onClick={async () => {
                setEditing(false);

                await FurnitureService.updateFurniture(furniture.id, {
                  image: furniture.image,
                  name: currentName,
                  description: currentDescription,
                });

                fetchFurniture();
              }}
              className="bg-green-500 hover:bg-green-700 text-green-50 py-2 px-4 rounded-md mx-1"
            >
              <i className="fa-solid fa-check text-red-50 mr-1"></i>Save
            </button>
          ) : (
            <button
              onClick={() => {
                setEditing(true);
              }}
              className="bg-blue-500 hover:bg-blue-700 text-blue-50 py-2 px-4 rounded-md mx-1"
            >
              <i className="fa-solid fa-pen-to-square text-red-50 mr-1"></i>Edit
            </button>
          )}

          {/* Delete */}
          <button
            onClick={async () => {
              await FurnitureService.deleteFurniture(furniture.id);
              fetchFurniture();
            }}
            className="mx-1 bg-red-500 hover:bg-red-700 text-red-50 py-2 px-4 rounded-md"
          >
            <i className="fa-solid fa-trash text-red-50 mr-1"></i>Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default FurnitureItem;
