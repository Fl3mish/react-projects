import { useState } from "react";

const Form = (props) => {
  const { fields, buttonLabel } = props;
  const [values, setValues] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {})
  );

  console.log(values);

  return (
    <form className="bg-white border border-slate-200 rounded-lg m-4 p-4">
      {fields.map((field) => (
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
      ))}
      <button className="w-full py-2 mt-4 rounded-lg bg-emerald-700 text-white">
        {buttonLabel}
      </button>
    </form>
  );
};
export default Form;
