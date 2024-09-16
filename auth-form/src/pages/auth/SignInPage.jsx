import { Link } from "react-router-dom";
import Form from "./Form";
import Layout from "./Layout";

const SignInPage = () => {
  return (
    <Layout>
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
        ]}
        buttonLabel="Sign In"
      />
      <Link to={"/sign-up"} className="text-sm text-green-600 underline">
        create an account
      </Link>
    </Layout>
  );
};
export default SignInPage;
