import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {" "}
      <nav className="flex justify-center text-violet-800 bg-violet-50 shadow-md">
        <div className="flex items-center justify-between w-full max-w-6xl border border-red-600 p-4">
          <div className="flex items-center">
            <img
              src="https://static-task-assets.react-formula-staging.com/899963.png"
              className="w-20 md:w-24"
            />
            <h1 className="ml-4 text-3xl font-ubuntu md:text-4xl">hasher</h1>
          </div>
          <div className="hidden md:flex items-center font-bold">
            <div className="mx-4 cursor-pointer">Home</div>
            <div className="mx-4 cursor-pointer">About</div>
            <div className="mx-4 cursor-pointer">Contact</div>
            <button className="text-2xl ml-8 text-red-600">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-4xl text-violet-950 p-4"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>
      </nav>
      {isMobileMenuOpen && (
        <div className="md:hidden cursor-pointer fixed top-0 right-0 bg-violet-950 text-2xl text-violet-200 pt-12 pb-4 rounded-bl-lg">
          <i
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 fa-solid fa-circle-xmark text-violet-300 text-5xl"
          ></i>
          <div className="mx-4 cursor-pointer pl-4 pr-20 py-4">Home</div>
          <div className="mx-4 cursor-pointer pl-4 pr-20 py-4">About</div>
          <div className="mx-4 cursor-pointer pl-4 pr-20 py-4">Contact</div>
        </div>
      )}
    </>
  );
};
export default Navbar;
