import { Link, useLocation } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";
import { createSession } from "services/user";
import { useState } from "react";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();

  return (
    <Layout>
      {error && (
        <div className="bg-red-200 text-red-700 p-4 my-4 rounded-lg border border-red-500">
          {error.msg}
        </div>
      )}
      {location.state?.accountCreated && (
        <div className="bg-green-200 text-emerald-700 p-4  my-4 border rounded-lg  border-emerald-500">
          Account created successfully. Please sign in.
        </div>
      )}

      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
        ]}
        buttonLabel="Sign In"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError({ msg: "username too short" });
            return;
          }
          if (values.password.length < 4) {
            setError({ msg: "password too short" });
            return;
          }

          //   Make Request -> Login
          const response = await createSession({
            username: values.username,
            password: values.password,
          });
          console.log(response);

          if (response.status === 200) {
            setError("");
            console.log("Succesfully signed in");
          } else {
            const data = await response.json();
            setError(data);
          }
        }}
      />
      <Link to={"/sign-up"} className="text-sm text-green-600 underline">
        create an account
      </Link>
    </Layout>
  );
};
export default SignInPage;
