const CatItem = (props) => {
  const { name, age, imageUrl, interests } = props.cat;
  return (
    <div className="relative z-[1] flex flex-col items-center rounded-lg bg-white h-56 max-w-lg w-full my-8">
      <div className="ml-36 flex items-end flex-1 pb-4 rounded-t-md max-w-[260px] w-full">
        <div className="relative">
          <div className="absolute block -skew-y-3 -inset-1 bg-rose-300"></div>
          <div className="relative text-3xl font-medium text-violet-700">
            {name}
          </div>
        </div>
        <div className="ml-6 text-xl text-neutral-400">age {age}</div>
      </div>
      <div className="relative z-[-1] flex bg-violet-700 w-full rounded-b-md pb-4 pl-6 pr-2">
        <div className=" -mt-10 w-40 mr-6">
          <img
            src={imageUrl}
            className="rounded-full overflow-clip shadow-inner  h-32 w-32 object-cover	border-4 border-white -mt-8"
          />
        </div>
        <div className="w-full max-w-md py-4">
          <div className="text-lg text-teal-100">{interests}</div>
        </div>
      </div>
      <i className="absolute scale-150 rotate-45 top-9 right-7 text-violet-400/10 text-9xl fa-solid fa-paw"></i>
    </div>
  );
};
export default CatItem;
