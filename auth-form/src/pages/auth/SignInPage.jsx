import Form from "./Form";

const SignInPage = () => {
  return (
    <div className="font-lato flex justify-center items-center">
      <Form
        fields={[
          { label: "username", type: "string" },
          { label: "password", type: "password" },
        ]}
      />
    </div>
  );
};
export default SignInPage;
