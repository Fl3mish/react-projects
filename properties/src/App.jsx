import properties from "./properties";
import PropertyItem from "./PropertyItems";
const propertyList = properties.map((property, index) => (
  <PropertyItem key={index} property={property} />
));

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-8 w-full max-w-5xl">
        {propertyList}
      </div>
    </div>
  );
};
export default App;
