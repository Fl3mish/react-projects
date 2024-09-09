import { useState } from "react";
import RecipeCard from "./RecipeCard";

const App = () => {
  const [recipe, setRecipe] = useState(null);

  const fetchRecipe = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/using-fetch/recipes"
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data));
  };
  return (
    <div className="flex flex-col items-center">
      {recipe && <RecipeCard recipe={recipe} />}
      <button
        onClick={fetchRecipe}
        className="bg-sky-600 hover:bg-sky-400 text-sky-50 text-2xl py-4 px-6 rounded-full"
      >
        Get Random Recipe
      </button>
    </div>
  );
};
export default App;
