import Dog from "./Dog";
import Cat from "./Cat";

const Box = (props) => {
  let { classes, animal } = props;
  animal = animal === "dog" ? <Dog /> : <Cat />;
  return (
    <div className={classes}>
      {animal}
      {animal}
      {animal}
    </div>
  );
};
export default Box;
