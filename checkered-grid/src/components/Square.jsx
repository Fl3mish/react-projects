import clsx from "clsx";
import { useState } from "react";

const Square = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <div
      onClick={() => setClicked(!clicked)}
      className={clsx(
        "w-[30px] h-[30px] border  border-stone-400 cursor-pointer hover:border-stone-800",
        clicked ? "bg-stone-600" : "bg-stone-300"
      )}
    ></div>
  );
};
export default Square;
