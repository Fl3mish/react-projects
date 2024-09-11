import cat from "../assets/home-cat.png";
const HomePage = () => {
  return (
    <div className="flex items-start justify-center min-h-full bg-amber-50">
      <div className="flex flex-wrap items-center justify-center w-full max-w-5xl px-6 pt-24">
        <div className="my-20">
          <h1 className="text-6xl text-red-700 mb-4 max-w-[320px] font-bubblegum">
            Cat Sitters You Can Trust
          </h1>
          <div className="max-w-sm text-xl leading-relaxed text-amber-600 font-opensans">
            Friendly cat lovers to watch over your feline friend while you are
            away
          </div>
          <button className="px-20 py-3 my-8 text-xl font-medium text-white bg-green-800 rounded-full">
            Sign In
          </button>
        </div>
        <img src={cat} className="w-[420px] mx-4 rounded-xl" />
      </div>
    </div>
  );
};
export default HomePage;
