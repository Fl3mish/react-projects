import initialCats from "./initial-cats";
import CatItem from "./CatItem";
import { useState } from "react";

const App = () => {
  const [cats, setCats] = useState(initialCats);
  const [name, setName] = useState("");
  const [age, setAge] = useState(2);
  const [imageUrl, setImageUrl] = useState("");
  const [interests, setInterests] = useState("");

  const catItems = cats.map((cat, idx) => <CatItem key={idx} cat={cat} />);
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-indigo-50">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newCatItem = { name, age, imageUrl, interests };
          setCats([...cats, newCatItem]);
          setName("");
          setAge(2);
          setImageUrl("");
          setInterests("");
        }}
        className=" bg-slate-50 rounded-lg overflow-clip shadow-lg "
      >
        <div className="bg-purple-600 text-white text-center py-2 text-xl">
          Create a Cat Profile
        </div>
        <div className="flex flex-col p-4">
          <div className="flex flex-col">
            <label htmlFor="name-input" className="mx-2 text-slate-500">
              Name
            </label>
            <input
              type="text"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name-input"
              className="m-2 p-2 rounded-md text-sm border border-slate-200 flex-1"
            />
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <label htmlFor="age-input" className="mx-2 text-slate-500">
                Age
              </label>
              <input
                type="number"
                placeholder="age"
                min={1}
                max={25}
                required
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                id="age-input"
                className="m-2 p-2 w-14 rounded-md text-sm border border-slate-200"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="image-input" className="mx-2 text-slate-500">
                Image
              </label>
              <input
                type="text"
                placeholder="provide an image url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                id="image-input"
                className="m-2 p-2 rounded-md text-sm border border-slate-200"
              />
            </div>
          </div>
          <label htmlFor="interests-input" className="mx-2 text-slate-500">
            Interests
          </label>
          <textarea
            rows={3}
            placeholder="What are your cat's hobbys and interests?"
            value={interests}
            maxLength={80}
            required
            onChange={(e) => setInterests(e.target.value)}
            id="interests-input"
            className="m-2 p-2 rounded-md text-sm border border-slate-200"
          />
          <div className="flex w-full px-2 mt-4">
            <button className="bg-rose-300 py-2 flex-1  rounded-md text-2xl text-purple-800">
              create
            </button>
          </div>
        </div>
      </form>
      <div className="flex flex-col items-center w-full max-w-xl">
        {catItems}
      </div>
    </div>
  );
};
export default App;
