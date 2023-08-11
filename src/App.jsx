import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/weather/?q=Wien&units=metric&lang=de&APPID=${process.env.REACT_APP_API_KEY}`
      );

      const result = await response.json();
      setData(result);
    })();
  }, []);

  return (
    <div className="antialiased min-h-screen bg-gray-100 flex items-center">
      {typeof data.main != "undefined" ? (
        <Weather weatherData={data} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default App;
