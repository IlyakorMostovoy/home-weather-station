import React from "react";
import PropTypes from "prop-types";

import { ReactComponent as Icon } from "./icon.svg";

import "./styles.scss";

const RefreshButton = ({ handleClick }) => (
  <button className="refresh-button" onClick={handleClick}>
    <Icon className="refresh-button__icon" />
  </button>
);

RefreshButton.propTypes = {
  handleClick: PropTypes.func,
};

export default RefreshButton;
