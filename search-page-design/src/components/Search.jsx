const Search = () => {
  return (
    <main className="flex flex-col  items-center justify-center bg-orange-100 flex-1">
      <div className="text-orange-500 text-6xl mb-4">
        <h1>Foogle</h1>
      </div>
      <form>
        <div className="relative">
          <span className="absolute inset-y-0 pl-4 flex items-center ">
            <a href="#">
              <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </a>
          </span>

          <input
            type="text"
            className="text-2xl rounded-full pl-10 py-2 bg-orange-200 border border-orange-300 "
          />
        </div>

        <div className="flex justify-center mt-4 items-center">
          <button className="bg-violet-200 text-violet-600 px-4 py-2 m-1 rounded-md">
            Foogle Search
          </button>
          <button className="bg-violet-200 text-violet-600 px-4 py-2 m-1 rounded-md">
            Image Search
          </button>
        </div>
      </form>
    </main>
  );
};
export default Search;
