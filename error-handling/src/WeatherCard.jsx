const WEATHER_ICONS = {
  Sunny: <i className="text-orange-400 fa-solid fa-sun text-4xl"></i>,
  "Partly Cloudy": (
    <i className="text-slate-400 fa-solid fa-cloud text-4xl"></i>
  ),
  Cloudy: <i className="text-slate-500 fa-solid fa-cloud-sun text-4xl"></i>,
  Rain: (
    <i className="text-slate-400 fa-solid fa-cloud-showers-heavy text-4xl"></i>
  ),
  Snow: <i className="text-blue-300 fa-solid fa-snowflake text-4xl"></i>,
};

// let ICON;
// switch (weather.description) {
//   case "Cloudy":
//     ICON = "fa-cloud text-slate-300";
//     break;
//   case "Partly Cloudy":
//     ICON = "fa-cloud-sun text-blue-200";
//     break;
//   case "Snow":
//     ICON = "fa-snowflake text-slate-500";
//     break;
//   case "Rain":
//     ICON = "fa-cloud-showers-heavy text-slate-500";
//     break;
//   case "Sunny":
//     ICON = "fa-sun text-orange-300";
//     break;
//   default:
//     ICON = "fa-cloud text-slate-300";
// }

const WeatherCard = (props) => {
  const { weather } = props;

  return (
    <div className="w-32 h-26 flex flex-col p-2 justify-evenly rounded-md bg-white shadow-sm border border-slate-400 m-2">
      <div className="text-xl text-neutral-600 font-bold text-center">
        {weather.day}
      </div>
      <div className=" text-center m-4  ">
        {WEATHER_ICONS[weather.description]}
      </div>
      <div className="flex justify-between mt-2">
        <div>{weather.high_temp}°F </div>
        <div className="text-slate-400">{weather.low_temp}°F </div>
      </div>
    </div>
  );
};
export default WeatherCard;
