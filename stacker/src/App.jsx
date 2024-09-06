import { useState } from "react";

const App = () => {
  const [numBlocks, setNumBlocks] = useState(4);
  const blocks = [];

  for (let i = 0; i < numBlocks; i++) {
    blocks.push(
      <div key={i} className="bg-green-400 w-28 h-8 mb-2 rounded-sm"></div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-end min-h-screen  border-8 border-red-900">
      <div className="p-2 border-b-4 border-neutral-500">{blocks}</div>
      <div className="flex">
        <button
          onClick={() => numBlocks > 1 && setNumBlocks(numBlocks - 1)}
          className="bg-yellow-200 text-yellow-600 m-4 p-2 rounded-lg"
        >
          remove block
        </button>
        <button
          onClick={() => numBlocks < 8 && setNumBlocks(numBlocks + 1)}
          className="bg-sky-200 text-sky-500 m-4 p-2 rounded-lg"
        >
          add block
        </button>
      </div>
    </div>
  );
};
export default App;
