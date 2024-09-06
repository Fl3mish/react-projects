const CatCard = (props) => {
  const { cat, index } = props;
  return (
    <div className="flex justify-center">
      <div className="flex flex-col m-4">
        <img
          src={cat[index].imageUrl}
          className="w-80 h-64 object-cover rounded-t-lg"
        />
        <div className="flex flex-col  border rounded-b-lg p-4 text-neutral-500">
          <div>
            <span className="font-bold w-24 inline-block text-slate-500">
              Name
            </span>{" "}
            {cat[index].name}
          </div>
          <div>
            <span className="font-bold w-24 inline-block text-slate-500">
              Age
            </span>{" "}
            {cat[index].age}
          </div>
          <div>
            <span className="font-bold w-24 inline-block text-slate-500">
              Breed
            </span>{" "}
            {cat[index].breed}
          </div>
          <div>
            <span className="font-bold w-24 inline-block text-slate-500">
              Location
            </span>{" "}
            {cat[index].location}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CatCard;
