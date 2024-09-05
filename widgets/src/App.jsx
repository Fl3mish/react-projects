import Widget1 from "./components/Widget1";
import Widget2 from "./components/Widget2";
import Widget3 from "./components/Widget3";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </div>
  );
}
