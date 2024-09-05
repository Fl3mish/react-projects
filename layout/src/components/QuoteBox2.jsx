const QuoteBox2 = () => {
  return (
    <div className="flex">
      <div className="bg-blue-500 px-4 py-4 rounded-l-lg w-64">
        <h2 className="text-white text-2xl">Admiral Grace Hopper</h2>
        <p className=" text-gray-100/70">Inventor of Programming Compilers</p>
      </div>
      <div className="flex justify-center items-center w-72 px-6 border border-stone-400 rounded-r-full text-stone-500">
        <p>
          A ship in port is safe, but that&apos;s not what ships are build for.
        </p>
      </div>
    </div>
  );
};
export default QuoteBox2;
