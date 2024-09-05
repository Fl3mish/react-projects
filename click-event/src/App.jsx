import { useState } from "react";

export default function App() {
  const [message, setMessage] = useState("Hola!");
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="mb-4 text-stone-400 text-3xl">{message}</div>
      <div>
        <button
          onClick={() => setMessage("Uno")}
          className="px-2 py-1 bg-cyan-600 mx-2 text-white rounded-md"
        >
          one
        </button>
        <button
          onClick={() => setMessage("Dos")}
          className="px-2 py-1 bg-violet-600 mx-2 text-white rounded-md"
        >
          two
        </button>
        <button
          onClick={() => setMessage("Tres")}
          className="px-2 py-1 bg-yellow-500 mx-2 text-white rounded-md"
        >
          three
        </button>
      </div>
    </div>
  );
}
