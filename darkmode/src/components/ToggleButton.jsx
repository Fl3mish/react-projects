import clsx from "clsx";

const ToggleButton = (props) => {
  const { onClick, label, enabled } = props;
  return (
    <div className="flex">
      <button
        onClick={onClick}
        className={clsx(
          "p-1 w-12 rounded-full flex",
          enabled ? "bg-green-700 justify-end" : "bg-zinc-300 justify-start "
        )}
      >
        <div className="bg-white w-4 h-4 rounded-full "></div>
      </button>
      <div className="ml-2">{label}</div>
    </div>
  );
};
export default ToggleButton;
