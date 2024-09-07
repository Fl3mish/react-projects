import { useState } from "react";
import Back from "./Back";
import Front from "./Front";

const PlayingCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { symbol, value, color } = props;
  return (
    <div onClick={() => setIsFlipped(!isFlipped)}>
      {isFlipped ? (
        <Front value={value} symbol={symbol} color={color} />
      ) : (
        <Back />
      )}
    </div>
  );
};
export default PlayingCard;
