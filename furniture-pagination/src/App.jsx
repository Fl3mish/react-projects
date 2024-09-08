import furnitures from "./furnitures";
import FurnitureItem from "./FurnitureItem";
import { useState } from "react";

const PAGE_SIZE = 5;

const App = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const furnitureItems = furnitures
    .slice(pageIndex * PAGE_SIZE, PAGE_SIZE * (pageIndex + 1))
    .map((furniture, idx) => <FurnitureItem key={idx} furniture={furniture} />);

  const buttons = Math.ceil(furnitures.length / PAGE_SIZE);
  const pageButtons = [...Array(buttons)].map((_, idx) => (
    <button
      onClick={() => setPageIndex(idx)}
      className={`mr-2 bg-slate-300 w-6 ${
        idx === pageIndex && "bg-red-300 border border-red-700"
      } `}
      key={idx}
    >
      {idx + 1}
    </button>
  ));

  return (
    <div className="flex justify-center bg-stone-100">
      <div className="flex flex-col items-center w-full max-w-3xl mt-10">
        <div className="flex flex-col w-full items-center">
          <h1 className="text-4xl mb-12">Autumn's Fabulous Furniture</h1>
          <div className="w-full flex justify-end mr-52 p-2">{pageButtons}</div>
        </div>

        <div className="border-t">{furnitureItems}</div>
      </div>
    </div>
  );
};
export default App;
