import React, { useReducer, useEffect } from "react";

import AppBar from "../AppBar/AppBar";
import DataBlock from "../DataBlock/DataBlock";

import "./App.scss";

const initialState = {
  temperature: null,
  humidity: null,
  pressure: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "update":
      return { ...action.payload };
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { temperature, humidity, pressure } = state;

  const getWeatherData = () => {
    fetch(
      "https://api.thingspeak.com/channels/469723/feeds.json?api_key=VLWOOUVP1DT2CMAT&results=1"
    )
      .then((response) => response.json())
      .then((data) => {
        const temperatureValue = Math.round(data.feeds[0].field1);
        const humidityValue = Math.round(data.feeds[0].field2);
        const pressureValue = Math.round(data.feeds[0].field3);

        dispatch({
          type: "update",
          payload: {
            temperature: temperatureValue,
            humidity: humidityValue,
            pressure: pressureValue,
          },
        });
      });
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="app">
      <AppBar />
      <div className="app__blocks">
        <DataBlock type="temperature" value={temperature} />
        <DataBlock type="humidity" value={humidity} />
        <DataBlock type="pressure" value={pressure} />
      </div>
    </div>
  );
};

export default App;
