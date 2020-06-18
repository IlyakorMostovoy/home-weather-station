import React from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";

import "./styles.scss";

type MenuProps = {
  isShow: boolean;
};

const Menu: React.FC<MenuProps> = ({ isShow }) => {
  return (
    <nav
      className={cx("menu", {
        menu_show: isShow,
      })}
    >
      <NavLink
        to="/"
        className="menu__item"
        activeClassName="menu__item_selected"
        exact
      >
        Main
      </NavLink>
      <div className="menu__item menu__item_disabled menu__item_bedroom">
        Bedroom
      </div>
      <div className="menu__item menu__item_disabled menu__item_livingRoom">
        Livingroom
      </div>
      <div className="menu__item menu__item_disabled menu__item_bathroom">
        Bathroom
      </div>
      <div className="menu__item menu__item_disabled menu__item_outdoors">
        Outdoors
      </div>
    </nav>
  );
};

export default Menu;
