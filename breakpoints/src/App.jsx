import FeatureSection from "./FeatureSection";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";

const App = () => {
  return (
    <div className="font-roboto">
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
};
export default App;
