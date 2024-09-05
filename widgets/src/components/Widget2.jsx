import { useState } from "react";

const Widget2 = () => {
  const [toggleColor, setToggleColor] = useState(false);
  return (
    <div
      className={`${
        toggleColor ? "bg-orange-100 border-orange-300" : "bg-sky-100"
      } border border-sky-300 rounded-md p-8 my-4`}
    >
      <button
        onClick={() => setToggleColor(!toggleColor)}
        className={`${
          toggleColor ? "bg-orange-500" : "bg-blue-500"
        } text-white px-4 py-2 rounded-full`}
      >
        click me
      </button>
    </div>
  );
};
export default Widget2;
