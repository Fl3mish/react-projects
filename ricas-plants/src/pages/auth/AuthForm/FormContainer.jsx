const FormContainer = (props) => {
  const { children } = props;
  return (
    <div className="flex border-4 border-red-700">
      <div className="relative hidden md:flex">
        <img
          src="https://d1d9816gvj4fau.cloudfront.net/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        />
        <div className="absolute left-0 top-0 h-full w-full bg-black/10"></div>
        <div className="absolute left-0 top-0 h-full w-full bg-green-800/40"></div>
      </div>

      <div className="flex h-screen flex-1 flex-col items-center justify-center bg-green-50">
        <div className="mx-2 my-8 flex flex-col items-center">
          <img
            src="https://d1d9816gvj4fau.cloudfront.net/capstone_logo_dark.png"
            className="mb-2 w-16"
          />
          <div className="font-playfair text-3xl text-emerald-700">
            Rica's Plants
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
export default FormContainer;
