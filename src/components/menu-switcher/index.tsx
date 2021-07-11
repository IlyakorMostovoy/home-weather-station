import cx from 'classnames';

import './styles.scss';

type MenuSwitcherProps = {
  active: boolean;
  clickHandler: () => void;
};

const MenuSwitcher: React.FC<MenuSwitcherProps> = ({
  active,
  clickHandler,
}) => (
  <div
    className={cx('menu-switcher', {
      'menu-switcher_active': active,
    })}
    onClick={clickHandler}
  >
    <div className="menu-switcher__first" />
    <div className="menu-switcher__second" />
    <div className="menu-switcher__third" />
  </div>
);

export default MenuSwitcher;
