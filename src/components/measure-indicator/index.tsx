import cx from 'classnames';

import { Indicator, Rooms, PhysicalQuantity } from 'common/types';

import { getUnitMeasure } from 'utils/string';

import Preloader from 'components/preloader';
import QuantityDiff from 'components/quantity-diff';

import './styles.scss';

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
  const dataLength = data.length;

  if (dataLength === 0) {
    return (
      <div className="physical-quantity">
        <Preloader className="physical-quantity__preloader" />
      </div>
    );
  }

  const prevValue = Math.round(data[dataLength - 1].value);
  const value = Math.round(data[dataLength - 2].value);
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
          'physical-quantity__value',
          `physical-quantity__value_${room}`,
        )}
      >
        {value}
      </div>
      <div className="physical-quantity__caption">
        {type}
        ,
        {unitMeasure}
      </div>
    </div>
  );
};

export default MeasureIndicator;
