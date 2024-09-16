const Layout = (props) => {
  const { children } = props;
  return (
    <div className="flex">
      <div className="hidden md:flex relative">
        <img
          src="https://d1d9816gvj4fau.cloudfront.net/capstone_sign_in_scene.png"
          className="h-screen object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-green-800/40"></div>
      </div>

      <div className="flex flex-col flex-1 items-center justify-center h-screen bg-green-50">
        <div className="flex flex-col items-center mx-2 my-8">
          <img
            src="https://d1d9816gvj4fau.cloudfront.net/capstone_logo_dark.png"
            className="w-16 mb-2"
          />
        </div>
        <div className="text-3xl font-playfair text-emerald-700">
          Rica's Plants
        </div>
        {children}
      </div>
    </div>
  );
};
export default Layout;
