import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import clsx from "clsx";
const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="bg-amber-50 flex justify-center font-open py-2">
      <div className="max-w-5xl w-full flex justify-between items-center px-8">
        <div className="font-bubblegum text-green-800 text-2xl flex flex-col items-center">
          <Link to={"/"} className="flex flex-col items-center">
            <img src={logo} alt="cat-logo" className="w-32 mb-2" />
            Carl's Cat Sitters
          </Link>
        </div>
        <div className="text-amber-900/40">
          <Link
            to={"/"}
            className={clsx(
              "mx-3",
              location.pathname === "/" && "text-amber-900"
            )}
          >
            <i className="mr-2 text-xl fa-solid fa-house"></i> Home
          </Link>
          <Link
            to={"/about"}
            className={clsx(
              "mx-3",
              location.pathname === "/about" && "text-amber-900"
            )}
          >
            <i className="mr-2 text-xl fa-solid fa-comment "></i>
            About
          </Link>
          <Link to={"/sign-in"} className="mx-3">
            <i className="mr-2 text-xl fa-solid fa-right-to-bracket"></i>{" "}
            Sign-In
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
