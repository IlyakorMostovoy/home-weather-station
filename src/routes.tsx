import React from "react";

import Main from "pages/main";
import Bedroom from "pages/bedroom";

const routes = [
  {
    path: `${process.env.PUBLIC_URL}`,
    exact: true,
    page: () => <Main />,
  },
  {
    path: `${process.env.PUBLIC_URL}/bedroom`,
    exact: true,
    page: () => <Bedroom />,
  },
  {
    path: `${process.env.PUBLIC_URL}/livingroom`,
    exact: true,
    page: () => <div>livingroom</div>,
  },
  {
    path: `${process.env.PUBLIC_URL}/bathroom`,
    exact: true,
    page: () => <div>bathroom</div>,
  },
  {
    path: `${process.env.PUBLIC_URL}/outdoors`,
    exact: true,
    page: () => <div>outdoors</div>,
  },
];

export default routes;
