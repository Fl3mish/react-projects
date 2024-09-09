import { useState } from "react";
import clsx from "clsx";
const App = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center ">
        <i
          className={clsx(
            "fa-solid fa-basketball text-3xl mb-4 text-orange-500",
            checked && "animate-bounce"
          )}
        ></i>
        <div className="flex">
          <input
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            type="checkbox"
            id="bounce-checkbox"
            className="accent-orange-400"
          />
          <label htmlFor="bounce-checkbox" className="ml-1">
            check this box to bounce the ball
          </label>
        </div>
      </div>
    </div>
  );
};
export default App;
