import { useState } from "react";
import clsx from "clsx";

const App = () => {
  const [bgColor, setBgColor] = useState("bg-green-400");
  return (
    <div className={clsx("h-screen flex justify-center items-center", bgColor)}>
      <label htmlFor="color-select" className="mr-2">
        pick a color:{" "}
      </label>
      <select
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
        id="color-select"
        className="p-2 rounded-md shadow-md"
      >
        <option value="bg-red-400">red</option>
        <option value="bg-blue-400">blue</option>
        <option value="bg-green-400">green</option>
        <option value="bg-yellow-400">yellow</option>
        <option value="bg-purple-400">purple</option>
      </select>
    </div>
  );
};
export default App;
