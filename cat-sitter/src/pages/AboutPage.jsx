import about from "../assets/about.png";
const AboutPage = () => {
  return (
    <div className="flex bg-amber-50 justify-center min-h-full">
      <div className="flex flex-col items-center mt-16 w-full max-w-4xl flex-1  ">
        <img src={about} alt="cat logo" className="mb-8 " />
        <h1 className="font-bubblegum text-3xl text-green-800">About us</h1>
        <p className="my-8 font-opensans text-neutral-400 text-sm leading-normal">
          Our mission at Carl's Cat Sitters is to create a stress-free
          experience for both cats and their owners. We believe in building
          trust and forming lasting relationships with our clients and their
          furry companions. Our sitters undergo rigorous training and background
          checks to ensur they are not only skilled but also reliable and
          trustworthy. With carl's Cat Sitters, you can have peace of mind
          knowing your cat is in safe and caring hands. Whether you need daily
          visits, overnight stays, or extended care, we are here to provide the
          love and attention your cat deserves, making us the trusted choice for
          cat sitting services in the community.
        </p>
        <p className="font-opensans text-neutral-400 text-sm leading-normal">
          At Carl's Cat Sitters, we offer a range of services tailored to meet
          the specific needs of your cat, ensuring they receive the best care
          while you're away. From feeding and playtime to grooming and
          administering medication, our sitters are trained to handle all
          aspects of cat care with the utmost professionalism and compassion
        </p>
      </div>
    </div>
  );
};
export default AboutPage;
