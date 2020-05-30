import React from "react";
import PropTypes from "prop-types";

import RefreshButton from "../refresh-button";

import "./styles.scss";

const AppBar = ({ handleRefresh }) => (
  <header className="app-bar">
    <h1 className="app-bar__title">Home dashboard</h1>
    <RefreshButton handleClick={handleRefresh} />
  </header>
);

AppBar.propTypes = {
  handleRefresh: PropTypes.func,
};

export default AppBar;
