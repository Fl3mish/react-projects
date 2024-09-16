import { Link } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";

const SignUpPage = () => {
  return (
    <Layout>
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
          { label: "confirmPassword", type: "password" },
        ]}
        buttonLabel="Sign Up"
        onSubmit={(values) => {
          console.log(values);
        }}
      />
      <Link to={"/sign-up"} className="text-sm text-green-600 underline">
        sign in
      </Link>
    </Layout>
  );
};
export default SignUpPage;
