import { useContext } from "react";
import MessageContext from "./MessageContext";

const Title = () => {
  const { message, setMessage } = useContext(MessageContext);

  return (
    <div
      onClick={() => setMessage("Woopsie")}
      className="p-2 m-2 text-violet-600 border-4 border-violet-400"
    >
      <div>Title</div>
      <div className="text-3xl text-center text-black">{message}</div>
    </div>
  );
};
export default Title;
