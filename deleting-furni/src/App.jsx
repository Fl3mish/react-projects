import { useState } from "react";
import * as FurnitureService from "./services/furniture";
import { useEffect } from "react";
import FurnitureItem from "./FurnitureItem";

const App = () => {
  const [furnitures, setFurnitures] = useState([]);

  const fetchFurniture = () => {
    FurnitureService.getAllFurniture()
      .then((response) => response.json())
      .then((data) => setFurnitures(data));
  };

  useEffect(() => {
    fetchFurniture();
  });

  const furnitureItems = furnitures.map((furniture, idx) => (
    <FurnitureItem
      key={idx}
      furniture={furniture}
      fetchFurniture={fetchFurniture}
    />
  ));

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-2xl">{furnitureItems}</div>
    </div>
  );
};
export default App;
