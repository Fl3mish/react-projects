import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  return (
    <div className="bg-gray-600 flex flex-col justify-center items-center h-screen">
      <div className="text-3xl m-8 text-gray-800">{text}</div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="rounded-full p-2 pl-10 bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-gray-700"
      />
    </div>
  );
};
export default App;
