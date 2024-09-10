const MessageItem = (props) => {
  const { message } = props;
  const name = message.email.split("@")[0];
  return (
    <div className="p-6 border border-gray-300 rounded-md shadow-md my-4">
      <div className="mb-2 text-lg font-medium">{name}</div>
      <div>{message.body}</div>
    </div>
  );
};
export default MessageItem;
