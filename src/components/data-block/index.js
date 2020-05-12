import React from "react";

import Preloader from "../preloader";

import "./styles.scss";

const DataBlock = ({ type, value }) => {
  switch (type) {
    case "temperature":
      return (
        <div className="data-block">
          <div className="data-block__value">
            {value ? `${value}°` : <Preloader />}
          </div>
          <div className="data-block__caption">{type}</div>
        </div>
      );
    case "humidity":
      return (
        <div className="data-block">
          <div className="data-block__value">
            {value ? `${value}%` : <Preloader />}
          </div>
          <div className="data-block__caption">{type}</div>
        </div>
      );
    case "pressure":
      return (
        <div className="data-block">
          <div className="data-block__value">
            {value ? value : <Preloader />}
          </div>
          <div className="data-block__caption">{type}</div>
        </div>
      );
    default:
      return false;
  }
};

export default DataBlock;
