import React, { useCallback } from "react";
import cx from "classnames";
import debounce from "lodash.debounce";

import { getLastUpdateText } from "utils/date";

import { ReactComponent as Icon } from "./icon.svg";

import "./styles.scss";

type LastUpdateProps = {
  timestamp: string;
  isLoading: boolean;
  clickHandler: () => void;
};

const LastUpdate: React.FC<LastUpdateProps> = ({
  timestamp,
  isLoading,
  clickHandler,
}) => {
  const date = getLastUpdateText(timestamp);

  const onClick = debounce(
    useCallback(() => {
      clickHandler();
    }, [clickHandler]),
    300
  );

  return (
    <div className="last-update" onClick={onClick}>
      {isLoading ? (
        "loading..."
      ) : (
        <>
          <span className="last-update__text">last update:&nbsp;</span>
          {date}
        </>
      )}
      <Icon
        className={cx("last-update__icon", {
          "last-update__icon_animate": isLoading,
        })}
      />
    </div>
  );
};

export default LastUpdate;
