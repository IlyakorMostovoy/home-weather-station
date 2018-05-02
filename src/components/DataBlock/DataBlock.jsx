import React from "react";
import "./DataBlock.pcss";

const DataBlock = props => {
  const { type, value } = props;

  switch (type) {
    case "temperature":
      return (
        <div className="data-block">
          <div className="data-block__value">{value}°</div>
          <div className="data-block__caption">temperature</div>
        </div>
      );

    case "humidity":
      return (
        <div className="data-block">
          <div className="data-block__value">{value}%</div>
          <div className="data-block__caption">humidity</div>
        </div>
      );

    case "pressure":
      return (
        <div className="data-block">
          <div className="data-block__value">{value}</div>
          <div className="data-block__caption">pressure</div>
        </div>
      );

    default:
      return false;
  }
};

export default DataBlock;
