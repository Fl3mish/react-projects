import { useState } from "react";
import CatCard from "./components/CatCard";
import NavButton from "./components/NavButton";
import CATS from "./cats";

export default function App() {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex items-center justify-center">
      <NavButton
        icon="fa-square-caret-left"
        onClick={() => setIndex(index - 1)}
        show={index !== 0}
      />
      <CatCard cat={CATS} index={index} />
      <NavButton
        onClick={() => setIndex(index + 1)}
        icon="fa-square-caret-right"
        show={index < CATS.length - 1}
      />
    </div>
  );
}
