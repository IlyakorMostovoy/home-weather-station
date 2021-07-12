import cx from 'classnames';

import { Rooms } from 'common/types';

import './styles.scss';

type QuantityDiffProps = {
  className: string;
  room: Rooms;
  prevValue: number;
  value: number;
};

const QuantityDiff: React.FC<QuantityDiffProps> = ({
  className,
  room,
  prevValue = 0,
  value = 0,
}) => {
  const diff = value - prevValue;
  const isGrowing = diff >= 0;

  return (
    <div
      className={cx(
        'quantity-diff',
        `quantity-diff_${room}`,
        {
          'quantity-diff_grow': isGrowing,
        },
        className,
      )}
    />
  );
};

export default QuantityDiff;
