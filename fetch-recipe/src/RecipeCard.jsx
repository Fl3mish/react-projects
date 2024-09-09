const RecipeCard = (props) => {
  const { name, imageUrl } = props.recipe;
  return (
    <div className="m-8  bg-indigo-500 text-indigo-100 text-center text-3xl rounded-xl overflow-clip">
      <div className="p-6 ">{name}</div>
      <img src={imageUrl} className="max-w-[450px] h-[350px] object-cover" />
    </div>
  );
};
export default RecipeCard;
