import { Buttons, FancyButton } from "./components/Buttons";

export default function App() {
  return (
    <>
      <Buttons />
      <FancyButton large={false}>click me</FancyButton>
      <FancyButton large>submit</FancyButton>
    </>
  );
}
