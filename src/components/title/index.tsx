import React from "react";

import "./styles.scss";

type TitleProps = {
  text: string;
};

const Title: React.FC<TitleProps> = ({ text }) => (
  <h2 className="title">{text}</h2>
);

export default Title;
