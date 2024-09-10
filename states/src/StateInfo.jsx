const StateInfo = (props) => {
  const { capital, description, image, name, nickname, population } =
    props.state;
  return (
    <div>
      <div className="flex">
        <img
          src={image}
          className="w-64 mr-4 rounded-md border border-zinc-200"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl  mb-2 ">{name}</h1>
          <div className="flex m-1">
            <div className="w-24 font-medium">Nickname</div>
            <div>{nickname}</div>
          </div>
          <div className="flex m-1">
            <div className="w-24 font-medium">Capital</div>
            <div> {capital}</div>
          </div>
          <div className="flex m-1">
            <div className="w-24 font-medium">Population</div>
            <div> {population.toLocaleString()}</div>
          </div>
        </div>
      </div>
      <p className="my-6 leading-relaxed">{description}</p>
    </div>
  );
};
export default StateInfo;
