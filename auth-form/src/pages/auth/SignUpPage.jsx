import { Link } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";
import { useState } from "react";

const SignUpPage = () => {
  const [error, setError] = useState("");

  return (
    <Layout>
      <div className="bg-red-200 text-red-700 px-4 py-2 mt-2 rounded-lg">
        {error.msg}
      </div>
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
          { label: "confirmPassword", type: "password" },
        ]}
        buttonLabel="Sign Up"
        onSubmit={(values) => {
          if (values.username.length < 4) {
            setError({ msg: "username too short" });
            return;
          }
          if (values.password.length < 4) {
            setError({ msg: "password too short" });
            return;
          }
          if (values.password !== values.confirmPassword) {
            setError({ msg: "passwords do not match" });
            return;
          }

          //   Make Request
        }}
      />
      <Link to={"/sign-up"} className="text-sm text-green-600 underline">
        sign in
      </Link>
    </Layout>
  );
};
export default SignUpPage;
