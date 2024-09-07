import messages from "./messages";

const App = () => {
  return (
    <div className="flex flex-col items-center p-4 w-full">
      {messages.map((message) => (
        <div
          key={message.text}
          className="flex p-2 border border-slate-500 rounded-lg my-2 w-full max-w-xl"
        >
          <div className="text-slate-800 font-bold mr-2">{message.user}</div>{" "}
          <div>{message.text}</div>
        </div>
      ))}
    </div>
  );
};
export default App;
