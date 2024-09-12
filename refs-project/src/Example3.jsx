import { useRef, useState } from "react";

const Example3 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const playVideoRef = useRef(null);
  return (
    <div className="h-screen bg-emerald-100">
      <h2 className="p-8 text-3xl font-bold text-green-700"> Example3</h2>
      <button
        onClick={() => {
          if (isPlaying) {
            setIsPlaying(false);
            playVideoRef.current.pause();
          } else {
            setIsPlaying(true);
            playVideoRef.current.play();
          }
        }}
        className="px-8 py-2 my-2 text-white rounded-full bg-emerald-600"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video width="480" ref={playVideoRef}>
        <source
          src="https://videos.pexels.com/video-files/18239063/18239063-sd_640_360_24fps.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
};
export default Example3;
