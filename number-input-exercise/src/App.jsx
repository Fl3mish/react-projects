import { useState } from "react";

export default function App() {
  const [age, setAge] = useState(20);
  const [error, setError] = useState("");
  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className=" border border-slate-200 rounded-md bg-slate-100 p-8 flex flex-col items-center w-full max-w-md">
        <label htmlFor="age-input" className="m-2">
          age
        </label>
        <input
          type="number"
          value={age}
          min={18}
          onChange={(e) => {
            const newNum = Number(e.target.value);
            newNum >= 18 ? setError("") : setError("Must be 18 or older");
            setAge(Number(e.target.value));
          }}
          id="age-input"
          className="border border-slate-200 rounded-md w-20"
        />
        <div className="text-red-600 h-4 m-2">{error}</div>
      </div>
    </div>
  );
}
