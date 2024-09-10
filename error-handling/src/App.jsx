import { useState } from "react";
import WeatherCard from "./WeatherCard";
import { useEffect } from "react";

const App = () => {
  const [weather, setWeather] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.react-formula.com/learning-api/demos/weather-forecast/weather"
    );
    const data = await response.json();
    setWeather(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  const weatherForecast = weather.map((weather, idx) => (
    <WeatherCard key={idx} weather={weather} />
  ));
  return (
    <div className="min-h-screen relative flex flex-wrap justify-center items-center border bg-blue-100 ">
      <button onClick={fetchWeather} className="absolute top-4 right-4">
        <i className="fa-solid fa-arrows-rotate text-orange-500 bg-orange-100 p-4 rounded-md "></i>
      </button>
      <div className="w-full max-w-xl">
        {isLoading ? (
          <div className="h-full flex justify-center items-center border border-red-500">
            <i className="fa-solid fa-spinner text-3xl text-orange-500 animate-spin"></i>
          </div>
        ) : (
          <div className="flex flex-wrap">{weatherForecast}</div>
        )}
      </div>
    </div>
  );
};
export default App;
