import signin from "../assets/signin.png";

const SignInPage = () => {
  return (
    <div className="flex flex-col items-center bg-amber-50  min-h-screen ">
      <img src={signin} alt="cat logo" className="mb-8 mt-16" />
      <form className="flex flex-col">
        <input
          type="text"
          placeholder="username"
          className="p-2 rounded-md bg-amber-100 my-2"
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 rounded-md bg-amber-100 my-2"
        />
      </form>
    </div>
  );
};
export default SignInPage;
