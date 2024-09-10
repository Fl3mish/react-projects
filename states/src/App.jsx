import { useState } from "react";
import StateInfo from "./StateInfo";

const API_BASE_URL =
  "https://api.react-formula.com/learning-api/demos/states-project/states/";

const App = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(null);

  const fetchState = async () => {
    const response = await fetch(`${API_BASE_URL}${text}`);
    const data = await response.json();
    setState(data);
  };
  console.log(state);

  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchState();
          }}
          className="mb-20"
        >
          <input
            type="text"
            placeholder="enter a U.S. state."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-1 mr-4 border rounded-md border-zinc-300"
          />
          <button className="p-1 mr-4 text-teal-600 rounded-md bg-teal-300">
            Submit
          </button>
        </form>
        {state && <StateInfo state={state} />}
      </div>
    </div>
  );
};
export default App;
