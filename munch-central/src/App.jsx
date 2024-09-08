import restaurants from "./restaurants";
import RestuarantItem from "./RestuarantItem";

const App = () => {
  const restaurantIitems = restaurants.map((restaurant, idx) => (
    <RestuarantItem key={idx} restaurant={restaurant} />
  ));
  return (
    <div className="flex flex-col items-center bg-stone-100">
      <h1 className="text-center text-5xl mb-8 mt-10 font-semibold text-stone-600">
        <i className="fa-solid fa-utensils mr-2"></i>Munch Central{" "}
      </h1>
      <div className="flex flex-wrap justify-center w-full max-w-5xl">
        {restaurantIitems}
      </div>
    </div>
  );
};
export default App;
