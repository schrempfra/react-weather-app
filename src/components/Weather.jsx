import React from "react";
import moment from "moment/moment";
import "moment/locale/de";

export default function Weather({ weatherData }) {
  return (
    <div>
      <div>Stadt: {weatherData.name}</div>
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
  );
}
