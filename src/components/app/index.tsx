import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Logo from 'components/logo';
import MenuSwitcher from 'components/menu-switcher';
import Menu from 'components/menu';

import routes from 'routes';

import './styles.scss';

const App = () => {
  const [isOpen, toggle] = useState<boolean>(false);

  const menuToggler = React.useCallback(() => {
    toggle(!isOpen);
  }, [isOpen]);

  return (
    <div className="app">
      <div className="app__header">
        <Logo />
        <MenuSwitcher active={isOpen} clickHandler={menuToggler} />
      </div>
      <Router>
        <Menu isShow={isOpen} />
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={`${index}-route`}
              path={route.path}
              exact={route.exact}
            >
              <route.page />
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
