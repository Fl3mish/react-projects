const RecipeCard = (props) => {
  const { name, image_url } = props.recipe;
  return (
    <div className="m-8  bg-indigo-500 text-indigo-100 text-center text-3xl rounded-lg overflow-clip">
      <div className="p-6 ">{name}</div>
      <img src={image_url} className="w-[400px] h-[320px] object-cover" />
    </div>
  );
};
export default RecipeCard;
