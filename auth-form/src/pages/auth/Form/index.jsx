import { useState } from "react";
import FormField from "./FormField";

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
        <FormField
          key={field.label}
          field={field}
          values={values}
          setValues={setValues}
        />
      ))}
      <button className="w-full py-2 mt-4 rounded-lg bg-emerald-700 text-white">
        {buttonLabel}
      </button>
    </form>
  );
};
export default Form;
