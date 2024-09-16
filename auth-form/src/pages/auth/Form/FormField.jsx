const FormField = (props) => {
  const { field, values, setValues } = props;
  return (
    <div key={field.label} className="flex flex-col my-4">
      <label htmlFor={field.label} className="text-slate-500 pl-1">
        {field.label}
      </label>
      <input
        type={field.type}
        id={field.label}
        value={values[field.label]}
        onChange={(e) =>
          setValues({ ...values, [field.label]: e.target.value })
        }
        className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 focus:outline-emerald-600 w-64"
      >
        {field.input}
      </input>
    </div>
  );
};
export default FormField;
