import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import { useState } from "react";
import * as userService from "services/user";

const SignUpPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate(); //re-route user
  return (
    <FormContainer>
      <div className="font-lato text-red-700">{error}</div>
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitButtonLabel="create account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("username too short");
            return;
          }
          if (values.password.length < 4) {
            setError("password too short");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("passwords do not match");
            return;
          }
          // Check pass -> Create User
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });
          // Server response handling
          if (response.status === 201) {
            setError("");
            // navigate the user to the sign in page
            navigate("/", {
              state: { accountCreated: true },
            });
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link to={"/"} className="text-sm text-green-600 underline">
        sign in
      </Link>
    </FormContainer>
  );
};
export default SignUpPage;
