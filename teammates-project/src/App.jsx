import { useState } from "react";
import { useEffect } from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const fetchProfiles = () => {
    fetch(
      "https://api.react-formula.com/learning-api/demos/teammates-project/profiles"
    )
      .then((response) => response.json())
      .then((data) => {
        setProfiles(data);
      });
  };

  useEffect(() => {
    fetchProfiles();
  }, []);

  const profilesList = profiles.map((profile, idx) => (
    <ProfileCard key={idx} profile={profile} />
  ));

  return (
    <div className="flex flex-col items-center min-h-screen bg-neutral-100">
      <div className="mt-28 w-full max-w-lg ">{profilesList}</div>
    </div>
  );
};
export default App;
