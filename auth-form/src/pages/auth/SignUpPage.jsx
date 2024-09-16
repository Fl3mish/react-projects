import Form from "./Form";

const SignUpPage = () => {
  return (
    <div className="font-lato flex justify-center items-center ">
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
          { label: "confirmPassword", type: "password" },
        ]}
        buttonLabel="Sign Up"
      />
    </div>
  );
};
export default SignUpPage;
