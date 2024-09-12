import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-amber-50  min-h-screen font-opensans">
      <div className="flex flex-col items-center">
        <Link to={"/"}>
          <img src={logo} alt="cat logo" className="w-32" />
        </Link>
        <div className="mt-2 text-3xl text-green-800 font-bubblegum">
          Carl's Cat Sitters
        </div>
      </div>
      <form className="flex flex-col m-8">
        <input
          type="text"
          placeholder="username"
          className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder:amber-900/40 text-amber-800"
        />
        <input
          type="password"
          placeholder="password"
          className="px-4 py-2 my-3 rounded-md bg-amber-900/20 placeholder:amber-900/40 text-amber-800"
        />
      </form>
    </div>
  );
};
export default SignInPage;
