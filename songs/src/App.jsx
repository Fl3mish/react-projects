import songs from "./songs";
import SongItem from "./SongItem";

const App = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl">
        {songs.map((song, index) => (
          <SongItem key={index} song={song} />
        ))}
      </div>
    </div>
  );
};
export default App;
