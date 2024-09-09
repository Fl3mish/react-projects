import RecipeCard from "./RecipeCard";

const recipeCard = {
  name: "Hamburger and Fries",
  imageUrl:
    "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <RecipeCard recipe={recipeCard} />
      <button className="bg-sky-600 hover:bg-sky-400 text-sky-50 text-2xl py-4 px-6 rounded-full">
        Get Random Recipe
      </button>
    </div>
  );
};
export default App;
