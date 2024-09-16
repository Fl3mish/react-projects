import { Link, useLocation } from "react-router-dom";
import AuthForm from "./AuthForm";
import FormContainer from "./AuthForm/FormContainer";
import * as userService from "services/user";
import { useState } from "react";
const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();

  console.log("location " + location.state);

  return (
    <FormContainer>
      <div className="font-lato text-red-700">{error}</div>
      {location.state?.accountCreated && (
        <div className="mb-8 mt-2 rounded-lg border border-emerald-500 bg-green-200 p-4 font-lato text-emerald-700">
          Account created successfully, Please sign in.
        </div>
      )}
      <AuthForm
        fields={[
          { label: "username", type: "text" },
          { label: "password", type: "password" },
        ]}
        submitButtonLabel="sign in"
        onSubmit={async (values) => {
          const response = await userService.createSession({
            username: values.username,
            password: values.password,
          });
          // Server response handling
          const data = await response.json();
          if (response.status === 201) {
            // console.log("token " + data);
            console.log("Sign in succesfull");
            setError("");
          } else {
            setError(data.error);
            console.log("sign in unsuccesfull");
          }
        }}
      />
      <Link to={"/sign-up"} className="text-sm text-green-600 underline">
        create an account
      </Link>
    </FormContainer>
  );
};
export default SignInPage;
