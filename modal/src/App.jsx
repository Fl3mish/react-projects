import CookieRecipe from "./components/CookieRecipe";

const App = () => {
  return (
    <>
      <header className="flex justify-center py-4 bg-purple-700 text-purple-200">
        <div className="w-full max-w-4xl flex justify-between px-4">
          <div className=" text-2xl">Mitch&apos;s Recipes</div>
          <div className=" text-lg">
            <i className="fa-solid fa-right-to-bracket p-2"></i>
            <button>Sign-In</button>
          </div>
        </div>
      </header>
      <CookieRecipe />
    </>
  );
};
export default App;
