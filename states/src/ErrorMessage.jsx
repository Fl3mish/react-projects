const ErrorMessage = (props) => {
  const { message } = props;

  return (
    <div className="flex items-center text-zinc-500">
      <i className="m-2 text-4xl text-yellow-400 fa-solid fa-triangle-exclamation"></i>
      <div>{message.error}</div>
    </div>
  );
};
export default ErrorMessage;
