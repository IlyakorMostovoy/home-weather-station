import React from "react";

import Main from "pages/main";

const routes = [
  {
    path: `${process.env.PUBLIC_URL}`,
    exact: true,
    page: () => <Main />,
  },
  {
    path: `${process.env.PUBLIC_URL}/bedroom`,
    exact: true,
    page: () => <div>bedroom</div>,
  },
  {
    path: `${process.env.PUBLIC_URL}/livingRoom`,
    exact: true,
    page: () => <div>livingRoom</div>,
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
