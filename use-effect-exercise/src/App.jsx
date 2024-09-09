import { useEffect, useState } from "react";
import Joke from "./Joke";

const App = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [joke, setJoke] = useState(null);

  const fetchNewJoke = () => {
    setShowAnswer(false);
    fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes")
      .then((response) => response.json())
      .then((data) => setJoke(data));
  };

  useEffect(() => {
    fetchNewJoke();
  }, []);

  return (
    <div className="flex flex-col items-center py-16">
      <Joke joke={joke} showAnswer={showAnswer} />
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className=" px-4 py-2 m-6  bg-sky-600 text-sky-50 rounded-lg"
      >
        Show Answer
      </button>
      <button
        onClick={() => {
          fetchNewJoke();
        }}
        className=" px-4 py-2  m-6 bg-violet-600 text-violet-50 rounded-lg"
      >
        New Joke
      </button>
    </div>
  );
};
export default App;
