const Header = () => {
  return (
    <header className="bg-orange-200 text-orange-500">
      <nav className="flex justify-between ">
        <ul className="flex p-4 ">
          <li className="ml-4">
            <a href="#">About</a>
          </li>
          <li className="ml-4">
            <a href="#">Store</a>
          </li>
        </ul>
        {/* Right */}
        <div className="p-4 flex">
          <a href="#"> Preferences</a>
          <div className="ml-4">
            <a href="#">
              <i className="fa-solid fa-user"></i>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
