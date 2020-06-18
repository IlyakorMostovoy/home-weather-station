import React from "react";

import Main from "pages/main";

const routes = [
  {
    path: "/",
    exact: true,
    page: () => <Main />,
  },
  {
    path: "/bedroom",
    exact: true,
    page: () => <div>bedroom</div>,
  },
  {
    path: "/livingRoom",
    exact: true,
    page: () => <div>livingRoom</div>,
  },
  {
    path: "/bathroom",
    exact: true,
    page: () => <div>bathroom</div>,
  },
  {
    path: "/outdoors",
    exact: true,
    page: () => <div>outdoors</div>,
  },
];

export default routes;
