import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";
import { useState } from "react";
import { createUser } from "services/user";
import Redirect from "shared/Redirect";

const SignUpPage = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  return (
    <Redirect>
      <Layout>
        {error && (
          <div className="bg-red-200 text-red-700 px-4 py-2 mt-2 rounded-lg  duration-100">
            {error.msg}
          </div>
        )}

        <Form
          fields={[
            { label: "username", type: "string" },
            { label: "password", type: "password" },
            { label: "confirmPassword", type: "password" },
          ]}
          buttonLabel="Sign Up"
          onSubmit={async (values) => {
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
            const response = await createUser({
              username: values.username,
              password: values.password,
            });
            console.log(response);
            if (response.status === 201) {
              setError("");
              navigate("/", { state: { accountCreated: true } });
              console.log("user created");
              return;
            } else {
              const data = await response.json();
              setError(data);
              return;
            }
          }}
        />
        <Link to={"/"} className="text-sm text-green-600 underline">
          sign in
        </Link>
      </Layout>
    </Redirect>
  );
};
export default SignUpPage;
