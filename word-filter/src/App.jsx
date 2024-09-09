import words from "./words";
import WordItem from "./WordItem";
import { useState } from "react";
const App = () => {
  const [text, setText] = useState("");
  const [filterText, setFilterText] = useState("");

  // List -> filter functionality on submit
  const wordItems = words
    .filter((word) => word.includes(filterText))
    .map((word, idx) => <WordItem key={idx} word={word} />);

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFilterText(text);
        }}
        className="m-8 flex"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          placeholder="Enter a string"
          className="bg-neutral-200 border p-2 rounded-l-lg"
        />
        <button className="bg-emerald-400 text-white rounded-r-lg px-4 hover:bg-emerald-600">
          filter
        </button>
      </form>
      <div className="flex flex-wrap justify-center w-full max-w-lg">
        {wordItems}
      </div>
    </div>
  );
};
export default App;
