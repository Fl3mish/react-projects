const Joke = (props) => {
  const { joke, showAnswer } = props;
  return (
    <>
      {joke && (
        <div className="m-20 text-center">
          <div className="text-4xl text-neutral-700 mb-8">
            <div>{joke.question}</div>
          </div>
          {showAnswer && (
            <div className="text-2xl text-blue-700 mb-8">
              <div>{joke.answer}</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
export default Joke;
