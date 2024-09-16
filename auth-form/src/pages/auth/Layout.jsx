const Layout = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
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
  );
};
export default Layout;
