import { useState } from "react";
import clsx from "clsx";

const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div
      className={clsx(
        "flex justify-center items-center h-screen",
        isOn ? "bg-yellow-100" : "bg-slate-800"
      )}
    >
      <button onClick={() => setIsOn(!isOn)}>
        <div
          className={clsx("h-8 w-6", isOn ? "bg-slate-500" : "bg-slate-200")}
        ></div>
        <div
          className={clsx("h-8 w-6", isOn ? "bg-slate-200" : "bg-slate-500")}
        ></div>
      </button>
    </div>
  );
};
export default LightSwitch;
