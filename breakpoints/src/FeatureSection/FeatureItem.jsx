const FeatureItem = (props) => {
  const { image, title, description } = props;
  return (
    <div className="m-8 max-w-[300px]">
      <img src={image} className="w-32" />
      <div className="font-ubuntu text-2xl text-violet-800 mt-4 mb-2">
        {title}
      </div>
      <div className="text-zinc-500">{description}</div>
    </div>
  );
};
export default FeatureItem;
