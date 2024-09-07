const SongItem = (props) => {
  const { song } = props;
  const { title, artist, album, duration } = song;

  const minutes = Math.floor(duration / 60);
  const seconds = String(duration % 60);

  return (
    <div className="bg-orange-400 text-orange-100 p-2 m-4 rounded-lg flex justify-between">
      <div className="flex items-center">
        <i className="fa-regular fa-circle-play text-orange-900 text-3xl mr-2"></i>
        <div>
          {" "}
          <div className="font-bold text-2xl">{title}</div>
          <div> {artist}</div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-center">
        <div>{album}</div>
        <div>
          {minutes}:{seconds.padStart(2, 0)}
        </div>
      </div>
    </div>
  );
};
export default SongItem;
