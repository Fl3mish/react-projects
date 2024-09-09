import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex justify-center p-20 border">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ username, password });
          setUsername("");
          setPassword("");
        }}
        className="flex flex-col border border-neutral-300 shadow-lg rounded-lg"
      >
        <div className="flex flex-col p-4">
          <div className="text-2xl text-neutral-600 mb-4">Sign-In</div>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="enter username"
            type="text"
            className="border border-neutral-300 rounded-md p-2 text-neutral-600 my-4"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
            type="password"
            className="border border-neutral-300 rounded-md p-2 text-neutral-600 my-4"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 py-2 text-white rounded-b-lg font-bold"
        >
          submit
        </button>
      </form>
    </div>
  );
};
export default App;
