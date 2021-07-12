import Main from 'pages/main';
// import Livingroom from "pages/livingroom";

const routes = [
  {
    path: `${process.env.PUBLIC_URL}`,
    exact: true,
    page: () => <Main />,
  },
  // {
  //   path: `${process.env.PUBLIC_URL}/livingroom`,
  //   exact: true,
  //   page: () => <Livingroom />,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/kitchen`,
  //   exact: true,
  //   page: () => <div>kitchen</div>,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/bathroom`,
  //   exact: true,
  //   page: () => <div>bathroom</div>,
  // },
  // {
  //   path: `${process.env.PUBLIC_URL}/outdoors`,
  //   exact: true,
  //   page: () => <div>outdoors</div>,
  // },
];

export default routes;
