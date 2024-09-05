import { useState } from "react";

const Widget3 = () => {
  const [showIcon, setShowIcon] = useState(false);
  return (
    <div className="flex flex-col items-center bg-violet-100/60 border border-violet-300 rounded-md p-8 my-4">
      {showIcon && (
        <div className="mb-4">
          <i className="fa-solid fa-poop text-violet-500 text-3xl"></i>
        </div>
      )}
      <button
        onClick={() => setShowIcon(!showIcon)}
        className="bg-violet-500 text-white px-4 py-2 rounded-full"
      >
        click me
      </button>
    </div>
  );
};
export default Widget3;
