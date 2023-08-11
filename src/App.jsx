import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      navigator.geolocation.getCurrentPosition(async function (position) {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);

        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/weather/?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&lang=de&APPID=${process.env.REACT_APP_API_KEY}`
        );

        const result = await response.json();
        setData(result);
        console.log(result);
      });
    };

    fetchData();
  }, [lat, long]);

  return (
    <div className="App">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
