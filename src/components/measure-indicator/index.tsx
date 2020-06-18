import React from "react";
import cx from "classnames";

import { Indicator } from "common/types";
import { Rooms, PhysicalQuantity } from "common/types";
import { getUnitMeasure } from "utils/string";

import Preloader from "components/preloader";
import QuantityDiff from "components/quantity-diff";

import "./styles.scss";

type MeasureIndicatorProps = {
  room: Rooms;
  type: PhysicalQuantity;
  data: Array<Indicator>;
};

const MeasureIndicator: React.FC<MeasureIndicatorProps> = ({
  room,
  type,
  data,
}) => {
  if (data.length === 0) {
    return (
      <div className="physical-quantity">
        <Preloader className="physical-quantity__preloader" />
      </div>
    );
  }

  const prevValue = Math.round(data[0].value);
  const value = Math.round(data[1].value);
  const unitMeasure = getUnitMeasure(type);

  return (
    <div className="physical-quantity">
      <QuantityDiff
        className="physical-quantity__quantity-diff"
        room={room}
        prevValue={prevValue}
        value={value}
      />
      <div
        className={cx(
          "physical-quantity__value",
          `physical-quantity__value_${room}`
        )}
      >
        {value}
      </div>
      <div className="physical-quantity__caption">
        {type}, {unitMeasure}
      </div>
    </div>
  );
};

export default MeasureIndicator;
