import PlayingCard from "./PlayingCard";

const App = () => {
  return (
    <div className="flex justify-center">
      <PlayingCard color="text-black" value="A" symbol="fa-spa" />
      <PlayingCard color="text-red-700" value="1" symbol="fa-heart" />
      <PlayingCard color="text-green-700" value="Q" symbol="fa-clover" />
      <PlayingCard color="text-blue-700" value="4" symbol="fa-diamond" />
    </div>
  );
};
export default App;
