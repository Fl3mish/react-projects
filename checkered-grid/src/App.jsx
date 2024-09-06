import Square from "./components/Square";

export default function App() {
  const numberOfSquares = 400;

  const squares = [...Array(numberOfSquares)].map((_, i) => (
    <div key={i}>
      <Square />
    </div>
  ));
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-gray-950 h-[602px] w-[602px] m-4 flex flex-wrap content-start">
        {squares}
      </div>
    </div>
  );
}
