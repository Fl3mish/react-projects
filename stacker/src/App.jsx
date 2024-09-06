const App = () => {
  return (
    <div className="flex flex-col items-center justify-end h-screen  border-8 border-red-900">
      <div className="p-2 border-b-4 border-neutral-500">
        <div className="bg-green-400 w-28 h-8 mb-2 rounded-sm"></div>
        <div className="bg-green-400 w-28 h-8 mb-2 rounded-sm"></div>
      </div>

      <div className="flex">
        <button className="bg-yellow-200 text-yellow-600 m-4 p-2 rounded-lg">
          remove block
        </button>
        <button className="bg-sky-200 text-sky-500 m-4 p-2 rounded-lg">
          add block
        </button>
      </div>
    </div>
  );
};
export default App;
