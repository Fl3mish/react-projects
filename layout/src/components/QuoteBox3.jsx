const QuoteBox3 = () => {
  return (
    <div className="flex flex-col items-start">
      <div className="bg-rose-400 py-6 px-8 rounded-t-lg rounded-br-lg">
        <p className="text-white">
          If you optimize everything, you will always be unhappy.
        </p>
      </div>
      <div className=" bg-rose-100 border-x-2 border-b-2 border-rose-400  rounded-b-lg p-4">
        <h3 className="text-rose-700 text-lg ">Donal Knuth</h3>
        <p className="text-rose-500">pioneer of Algorithm Analysis</p>
      </div>
    </div>
  );
};
export default QuoteBox3;
