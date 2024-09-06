import clsx from "clsx";

const NavButton = (props) => {
  const { onClick, icon, show } = props;
  return (
    <div>
      {show && (
        <button onClick={onClick}>
          <i className={clsx("text-violet-600 text-5xl fa-solid", icon)}></i>
        </button>
      )}
    </div>
  );
};
export default NavButton;
