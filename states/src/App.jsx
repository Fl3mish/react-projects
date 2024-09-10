import { useState } from "react";
import StateInfo from "./StateInfo";
import ErrorMessage from "./ErrorMessage";

const API_BASE_URL =
  "https://api.react-formula.com/learning-api/demos/states-project/states/";

const App = () => {
  const [text, setText] = useState("");
  const [state, setState] = useState(null);
  const [error, setError] = useState(null);

  const fetchState = async () => {
    const response = await fetch(`${API_BASE_URL}${text}`);
    if (response.status === 200) {
      const data = await response.json();
      setState(data);
      setError(null);
    } else {
      const errorData = await response.json();
      setState(null);
      setError(errorData);
    }
  };

  return (
    <div className="flex justify-center p-8">
      <div className="w-full max-w-2xl flex flex-col items-center justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            fetchState();
            setText("");
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
        {error && <ErrorMessage message={error} />}
      </div>
    </div>
  );
};
export default App;
