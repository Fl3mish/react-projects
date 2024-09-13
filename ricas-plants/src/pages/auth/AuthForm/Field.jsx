const Field = (props) => {
  const { label, type, onChange, values } = props;
  return (
    <div className="my-4 flex flex-col">
      <label htmlFor={label} className="pl-1 text-slate-500">
        {label}
      </label>
      <input
        type={type}
        placeholder={label}
        value={values}
        onChange={onChange}
        id={label}
        className="w-64 rounded-lg border border-slate-200 bg-slate-50 px-2 py-1 focus:outline-emerald-600"
      />
    </div>
  );
};
export default Field;
