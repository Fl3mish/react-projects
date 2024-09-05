import Cat from "./components/Cat";

export default function App() {
  return (
    <div>
      <div className="flex h64 p-4 m-4 border-2 blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h64 p-4 m-4 border-2 blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h64 p-4 m-4 border-2 blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
      <div className="flex h64 p-4 m-4 border-2 blue-400">
        <Cat />
        <Cat />
        <Cat />
      </div>
    </div>
  );
}
