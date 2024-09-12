import { useRef } from "react";
const Example2 = () => {
  const inputRef = useRef(null);
  return (
    <div className="flex flex-col h-screen bg-yellow-100">
      <h2 className="p-8 text-3xl font-bold text-amber-700">Example2</h2>
      <div className="flex items-center justify-center flex-1">
        <button
          onClick={() => inputRef.current.focus()}
          className="px-8 py-2 mx-8 text-white rounded-full bg-amber-600"
        >
          click to focus on input
        </button>
        <input
          type="text"
          placeholder="this is an input"
          ref={inputRef}
          className="px-4 py-2 bg-yellow-200 border-2 border-yellow-400 rounded-md w-80"
        />
      </div>
    </div>
  );
};
export default Example2;
