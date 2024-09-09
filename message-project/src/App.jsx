import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([
    "hey programmers!",
    "What is up?",
    "yoyo",
  ]);

  const messageItems = messages.map((message, idx) => (
    <div
      key={idx}
      className="flex border border-gray-300 px-6 py-3 m-2 rounded-full text-gray-600"
    >
      {message}
    </div>
  ));

  return (
    <div className="flex flex-col items-center">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setMessages([...messages, text]);
          setText("");
        }}
        className="flex m-8"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="enter message"
          className="border border-gray-300 rounded-l-md p-2 focus:outline-purple-600"
        />
        <button className="bg-purple-200 text-purple-800 px-8 rounded-r-md focus:outline-purple-600 hover:bg-purple-600 hover:text-purple-200">
          send
        </button>
      </form>
      <div className="flex flex-col w-full max-w-md">{messageItems}</div>
    </div>
  );
};
export default App;
