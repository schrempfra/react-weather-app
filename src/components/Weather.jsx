import React from "react";
import moment from "moment/moment";
import "moment/locale/de";

export default function Weather({ weatherData }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white shadow rounded-lg p-5 w-full">
        <h2 className="font-bold text-gray-800 text-lg">{weatherData.name}</h2>
        <div>
          <div className="flex mt-4 mb-2">
            <div className="flex-1">
              <div className="text-3xl font-bold text-gray-800">
                {weatherData.main.temp}
              </div>
              <div className="text-xs text-gray-600">
                {weatherData.weather[0].description}
              </div>
            </div>
            <div className="w-24">
              <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt="weatherData.current.condition.text"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-xs text-gray-600">
            Sonnenaufgang:
            {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
              "de-DE"
            )}
          </div>
          <div className="text-xs text-gray-600">
            Sonnenuntergang:
            {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
              "de-DE"
            )}
          </div>
          <div className="text-xs text-gray-600">
            Beschreibung: {weatherData.weather[0].description}
          </div>
          <div className="text-xs text-gray-600">
            Feuchtigkeit: {weatherData.main.humidity} %
          </div>
          <div className="text-xs text-gray-600">
            Tag: {moment().locale("de").format("dddd")}
          </div>
          <div className="text-xs text-gray-600">
            Datum: {moment().locale("de").format("LL")}
          </div>
        </div>
      </div>
    </div>
  );
}
