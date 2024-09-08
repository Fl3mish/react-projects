const PostItem = (props) => {
  const { post } = props;
  const { image, likes } = post;
  return (
    <div className="relative m-4 rounded-lg overflow-clip  shadow-xl">
      <img src={image} className="w-56" />
      <div className="absolute top-0 right-0 m-2 px-2 bg-gray-800/70 text-white text-sm rounded-full">
        <i className="fa-regular fa-heart mr-1 text-rose-300"></i>
        {likes}
      </div>
    </div>
  );
};
export default PostItem;
