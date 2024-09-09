const WordItem = (props) => {
  const { word } = props;
  return (
    <div>
      <div className="bg-yellow-200 p-1 border border-yellow-300 m-1 text-yellow-800/60 shadow-md">
        {word}
      </div>
    </div>
  );
};
export default WordItem;
