import SessionContext from "context/SessionContext";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

const NavBar = () => {
  const { sessionToken } = useContext(SessionContext);
  const { username } = jwtDecode(sessionToken);

  return (
    <nav className="bg-emerald-800 flex justify-center">
      <div className="w-full max-w-5xl border border-red-400 flex items-center justify-between px-8 py-2">
        <div className="font-playfair text-white text-2xl flex flex-col items-center">
          <img
            src="https://static-task-assets.react-formula-staging.com/capstone_logo_light.png"
            className="w-10"
          />
          Rica's Plants
        </div>
        <div>
          <button className="text-emerald-200 flex items-center">
            <i className="fa-solid fa-user mr-2 text-xl "></i>
            {username}
          </button>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
