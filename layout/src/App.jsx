import QuoteBox1 from "./components/QuoteBox1";
import QuoteBox2 from "./components/QuoteBox2";
import QuoteBox3 from "./components/QuoteBox3";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-around h-screen">
      <QuoteBox1 />
      <QuoteBox2 />
      <QuoteBox3 />
    </div>
  );
}
