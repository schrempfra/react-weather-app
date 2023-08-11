import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=Sankt+Anna+am+Aigen&units=metric&lang=de&APPID=${process.env.REACT_APP_API_KEY}`
      );

      const result = await response.json();
      setData(result);
      console.log(result);
    };

    fetchData();
  });

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
