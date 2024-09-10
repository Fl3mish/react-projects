import { useState } from "react";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";
import ErrorMessage from "./ErrorMessage";

const App = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/error-handling/weather"
    );
    if (response.status === 200) {
      const data = await response.json();
      setWeather(data);
      setError(null);
    } else {
      const errorData = await response.json();
      setError(errorData);
      setWeather(null);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div className="min-h-screen relative flex flex-wrap justify-center items-center border bg-blue-100 ">
      {error && <ErrorMessage message={error.error_message} />}
      <button
        onClick={fetchWeather}
        className="absolute px-4 py-2 rounded-lg bg-fuchsia-200 text-fuchsia-700 hover:bg-fuchsia-300 top-2 left-2"
      >
        <i className="fa-solid fa-arrows-rotate "></i>
      </button>
      {weather && (
        <div className="w-full max-w-xl">
          <div className="flex flex-wrap">
            <WeatherCard weather={weather} />
          </div>
        </div>
      )}
    </div>
  );
};
export default App;
