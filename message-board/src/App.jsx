import { useEffect } from "react";
import { useState } from "react";
import MessageItem from "./MessageItem";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("guest");
  const [text, setText] = useState("");

  const fetchMessages = async () => {
    const response = await fetch("http://localhost:5000/messages");
    const data = await response.json();
    setMessages(data);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const messageItems = messages.map((message) => (
    <MessageItem key={message.id} message={message} />
  ));

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: username, body: text }),
    }).then(() => {
      fetchMessages();
      setText("");
    });
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-xl">
        {messageItems}
        <form onSubmit={handleSubmit} className="text-center">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-1 m-2 border border-gray-300 rounded-md w-24"
          />
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-1 m-2 border border-gray-300 rounded-md w-80"
          />
          <button className="bg-blue-500 text-white px-2 py-1 rounded-md">
            post
          </button>
        </form>
      </div>
    </div>
  );
};
export default App;
