import clsx from "clsx";
import { useState } from "react";
import ToggleButton from "./components/ToggleButton";

const App = () => {
  const [isDark, setIsDark] = useState(true);
  return (
    <div
      className={clsx(
        "flex justify-center p-4 h-screen",
        isDark ? "bg-neutral-800 text-neutral-300" : "bg-white text-black"
      )}
    >
      <div className=" w-full max-w-2xl flex flex-col items-center">
        <ToggleButton
          onClick={() => setIsDark(!isDark)}
          enabled={isDark}
          label="dark mode"
        />
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, in
          sit laudantium quisquam vel ab perspiciatis aspernatur corrupti hic
          saepe quaerat, enim vitae soluta delectus qui sed quis animi.
          Consequatur cumque illo perferendis provident vitae, culpa fugiat
          maiores dolore eos iste omnis, aspernatur, assumenda deleniti?
          Voluptatum veniam ut, placeat nisi odio, repellendus illo animi fuga
          sed dolorum dolore ab.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, in
          sit laudantium quisquam vel ab perspiciatis aspernatur corrupti hic
          saepe quaerat, enim vitae soluta delectus qui sed quis animi.
          Consequatur cumque illo perferendis provident vitae, culpa fugiat
          maiores dolore eos iste omnis, aspernatur, assumenda deleniti?
          Voluptatum veniam ut, placeat nisi odio, repellendus illo animi fuga
          sed dolorum dolore ab.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, in
          sit laudantium quisquam vel ab perspiciatis aspernatur corrupti hic
          saepe quaerat, enim vitae soluta delectus qui sed quis animi.
          Consequatur cumque illo perferendis provident vitae, culpa fugiat
          maiores dolore eos iste omnis, aspernatur, assumenda deleniti?
          Voluptatum veniam ut, placeat nisi odio, repellendus illo animi fuga
          sed dolorum dolore ab.
        </p>
        <p className="my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex vero, in
          sit laudantium quisquam vel ab perspiciatis aspernatur corrupti hic
          saepe quaerat, enim vitae soluta delectus qui sed quis animi.
          Consequatur cumque illo perferendis provident vitae, culpa fugiat
          maiores dolore eos iste omnis, aspernatur, assumenda deleniti?
          Voluptatum veniam ut, placeat nisi odio, repellendus illo animi fuga
          sed dolorum dolore ab.
        </p>
      </div>
    </div>
  );
};
export default App;
