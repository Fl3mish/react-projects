const ProfileCard = (props) => {
  const { profile } = props;
  return (
    <div className="m-8 bg-white">
      {profile && (
        <div className="rounded-lg shadow-md flex overflow-clip ">
          <div className=" bg-teal-700 p-4">
            <img
              src={profile.image}
              className="rounded-full w-24 border border-teal-500"
            />
          </div>
          <div className="p-4 flex flex-col justify-center">
            <div className="text-xl text-neutral-600">{profile.name}</div>
            <div className="text-lg text-teal-700">{profile.title}</div>
            <div className="text-neutral-600">{profile.email}</div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProfileCard;
