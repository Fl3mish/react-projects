import clsx from "clsx";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar";
import image from "../assets/bork-home.png";

const BUTTON_STYLE = {
  cyan: "bg-cyan-200 text-cyan-800 hover:bg-cyan-300",
  rose: "bg-rose-200 text-rose-800 hover:bg-rose-300",
  yellow: "bg-yellow-200 text-yellow-800 hover:bg-yellow-300",
};

const Homepage = (props) => {
  const { themeColor, setThemeColor } = props;
  return (
    <>
      <Navbar themeColor={themeColor} setThemeColor={setThemeColor} />
      <div className="flex justify-center font-pt-sans">
        <div className="flex flex-col items-center w-full max-w-4xl mt-24">
          <img src={image} alt="man plays with dog" className="w-[400px]" />
          <div className="my-12">
            <div className="text-4xl font-medium text-gray-600 font-nunito">
              Dog Breeds, made simple
            </div>
          </div>
          <div className="text-xl text-gray-500 max-w-[400px] mt-4 mb-8">
            Find a friendly breeder in your area with Bork
          </div>
          <Link
            to={"/breeds"}
            className={clsx(
              "text-2xl rounded-full px-20 py-3",
              BUTTON_STYLE[themeColor]
            )}
          >
            begin
          </Link>
        </div>
      </div>
    </>
  );
};
export default Homepage;
