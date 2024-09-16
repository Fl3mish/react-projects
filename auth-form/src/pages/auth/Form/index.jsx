import { useState } from "react";
import FormField from "./FormField";

const Form = (props) => {
  const { fields, buttonLabel, onSubmit } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [values, setValues] = useState(() =>
    fields.reduce((acc, field) => {
      acc[field.label] = "";
      return acc;
    }, {})
  );

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        await onSubmit(values);
        setIsLoading(false);
      }}
      className="bg-white border border-slate-200 rounded-lg m-4 p-4"
    >
      {fields.map((field) => (
        <FormField
          key={field.label}
          field={field}
          values={values[field.label]}
          onChange={(e) =>
            setValues({ ...values, [field.label]: e.target.value })
          }
        />
      ))}
      <button className="w-full py-2 mt-4 rounded-lg bg-emerald-700 text-white">
        {buttonLabel}{" "}
        {isLoading && <i className="fa-solid fa-spinner animate-spin"></i>}
      </button>
    </form>
  );
};
export default Form;
