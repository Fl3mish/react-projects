const Front = (props) => {
  const { color, symbol, value } = props;
  return (
    <div
      className={`${color} rounded-lg border-4 border-black w-40 h-56 m-4 bg-white flex justify-center items-center relative`}
    >
      <div className="absolute top-0 left-0 text-4xl font-bold p-2">
        {" "}
        {value}
      </div>
      <div>
        <i className={`fa-solid ${symbol} text-5xl`}></i>
      </div>
      <div className="absolute bottom-0 right-0 text-4xl font-bold p-2">
        {" "}
        {value}
      </div>
    </div>
  );
};
export default Front;
