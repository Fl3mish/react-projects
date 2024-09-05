const Buttons = () => {
  return (
    <div>
      <button className="border-2 text-green-400 border-green-600 px-8 py-2 rounded-md m-4">
        first
      </button>
      <button className=" text-white text-3xl bg-blue-400 px-10 py-4 rounded-lg m-4 hover:text-base">
        second
      </button>
      <button className=" text-violet-600 font-semibold bg-violet-100 px-8 py-2 rounded-full m-4">
        third
      </button>
      <button className=" text-cyan-200 font-semibold bg-cyan-700 p-10 rounded-lg m-4 hover:bg-cyan-200 hover:text-cyan-700">
        fourth
      </button>
    </div>
  );
};

const FancyButton = (props) => {
  const { children, large } = props;
  // Custom styles
  const largeStyles = large ? "text-3xl rounded-full" : "text-base rounded-md";
  return (
    <button
      className={`bg-blue-200 border-2 border-blue-700 text-blue-700 px-10 py-2 m-4 ${largeStyles}`}
    >
      {children}
    </button>
  );
};

export { Buttons, FancyButton };
