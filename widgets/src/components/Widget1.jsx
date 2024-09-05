import { useState } from "react";

const Widget1 = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className=" flex flex-col items-center bg-green-100/60 border border-green-300 rounded-md p-8 my-4">
      {showIcon && (
        <div className="mb-4">
          <i className="fa-solid fa-face-awesome text-teal-500 text-3xl"></i>
        </div>
      )}
      <button
        onClick={() => setShowIcon(!showIcon)}
        className="bg-teal-500 text-white px-4 py-2 rounded-full"
      >
        click me
      </button>
    </div>
  );
};
export default Widget1;
