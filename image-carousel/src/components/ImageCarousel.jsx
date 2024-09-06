import { useState } from "react";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

const ImageCarousel = () => {
  const [index, setIndex] = useState(0);
  const totalLength = IMAGE_URLS.length - 1;

  return (
    <div className="flex flex-col h-screen justify-center">
      <h1 className="text-2xl text-cyan-600 text-center">Dog {index + 1}</h1>
      <div className="flex justify-center ">
        <button onClick={() => setIndex(index ? index - 1 : index)}>
          <i className="fa-sharp fa-solid fa-circle-arrow-left text-4xl text-cyan-400"></i>
        </button>
        <div>
          <img
            src={IMAGE_URLS[index]}
            className="w-[200px] h-[300px] object-cover rounded-lg m-8"
          />
        </div>

        <button
          onClick={() => setIndex(index === totalLength ? index : index + 1)}
        >
          <i className="fa-sharp fa-solid fa-circle-arrow-right text-4xl text-cyan-400"></i>
        </button>
      </div>
    </div>
  );
};
export default ImageCarousel;
