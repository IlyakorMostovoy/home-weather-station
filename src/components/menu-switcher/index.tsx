import React from "react";
import cx from "classnames";

import "./styles.scss";

type MenuSwitcherProps = {
  active: boolean;
  clickHandler: () => void;
};

const MenuSwitcher: React.FC<MenuSwitcherProps> = ({
  active,
  clickHandler,
}) => {
  return (
    <div
      className={cx("menu-switcher", {
        "menu-switcher_active": active,
      })}
      onClick={clickHandler}
    >
      <div className="menu-switcher__first"></div>
      <div className="menu-switcher__second"></div>
      <div className="menu-switcher__third"></div>
    </div>
  );
};

export default MenuSwitcher;
