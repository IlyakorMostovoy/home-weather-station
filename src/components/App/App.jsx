import React, { Component } from "react";

import AppBar from "../AppBar/AppBar";
import DataBlock from "../DataBlock/DataBlock";

import "./App.pcss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      temperature: null,
      humidity: null,
      pressure: null
    };

    this.setWeatherData = this.setWeatherData.bind(this);
  }

  setWeatherData(temperatureValue, humidityValue, pressureValue) {
    this.setState({
      temperature: temperatureValue,
      humidity: humidityValue,
      pressure: pressureValue
    });
  }

  getWeatherData() {
    fetch(
      "https://api.thingspeak.com/channels/469723/feeds.json?api_key=VLWOOUVP1DT2CMAT&results=1"
    )
      .then(response => response.json())
      .then(data => {
        const temperatureValue = Math.round(data.feeds[0].field1);
        const humidityValue = Math.round(data.feeds[0].field2);
        const pressureValue = Math.round(data.feeds[0].field3);

        this.setWeatherData(temperatureValue, humidityValue, pressureValue);
      });
  }

  componentDidMount() {
    this.getWeatherData();

    setInterval(() => {
      this.getWeatherData();
    }, 60000);
  }

  render() {
    const { temperature, humidity, pressure } = this.state;

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
  }
}

export default App;
