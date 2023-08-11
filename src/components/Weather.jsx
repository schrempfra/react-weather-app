import React from "react";
import moment from "moment/moment";
import "moment/locale/de";

export default function Weather({ weatherData }) {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white shadow rounded-lg p-5 w-full">
        <h2 className="font-bold text-gray-800 text-lg">{weatherData.name}</h2>
        <p>Temperatur: {weatherData.main.temp} &deg;C</p>
        <p>
          Sonnenaufgang:{" "}
          {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString("de-DE")}
        </p>
        <p>
          Sonnenuntergang:{" "}
          {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString("de-DE")}
        </p>
        <p>Beschreibung: {weatherData.weather[0].description}</p>
        <p>Feuchtigkeit: {weatherData.main.humidity} %</p>
        <p>Tag: {moment().locale("de").format("dddd")}</p>
        <p>Datum: {moment().locale("de").format("LL")}</p>
      </div>
    </div>
  );
}
