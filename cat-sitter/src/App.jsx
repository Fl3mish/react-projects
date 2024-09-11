import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignInPage from "./pages/SignInPage";
import logo from "./assets/logo.png";
const App = () => {
  return (
    <BrowserRouter>
      <div className="flex bg-amber-50 justify-center">
        <div className="flex items-center justify-between w-full max-w-4xl ">
          <img src={logo} alt="cat-logo" />
          <div>
            <Link
              className="p-4 hover:text-amber-400 text-slate-500 focus:text-amber-500"
              to={"/"}
            >
              <i className="fa-solid fa-house text-amber-500 focus:text-amber-500 "></i>{" "}
              Home
            </Link>
            <Link
              className="p-4 active:text-amber-400 hover:text-amber-400 focus:text-amber-400  text-slate-500"
              to={"/about"}
            >
              <i className="fa-solid fa-comment text-amber-500"></i>About
            </Link>
            <Link
              className="p-4 active:text-amber-400 hover:text-amber-400 focus:text-amber-500  text-slate-500"
              to={"/sign-in"}
            >
              <i className="fa-solid fa-right-to-bracket text-amber-500"></i>{" "}
              Sign-In
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
