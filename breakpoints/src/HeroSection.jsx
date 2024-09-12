const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center  w-full max-w-6xl py-32 px-4">
        <div className="font-ubuntu font-medium text-violet-800 text-4xl md:text-5xl max-w-[450px]">
          Something <span className="text-yellow-500">Catchy</span> and{" "}
          <span className="text-red-600">Technological</span>
          <button className="border-4 border-violet-800 text-3xl font-medium px-10 py-3 mt-8">
            Learn More
          </button>
        </div>
        <img
          src="https://static-task-assets.react-formula-staging.com/963190.png"
          alt="hero image"
          className=" md:w-[480px] my-12"
        />
      </div>
    </div>
  );
};
export default HeroSection;
