import Form from "./Form";

const SignInPage = () => {
  return (
    <div className="font-lato flex justify-center items-center">
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
        ]}
        buttonLabel="Sign In"
      />
    </div>
  );
};
export default SignInPage;
