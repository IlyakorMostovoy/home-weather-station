import cx from 'classnames';

import './styles.scss';

type PreloaderProps = {
  className?: string;
};

const Preloader: React.FC<PreloaderProps> = ({ className }) => (
  <div className={cx('preloader', className)}>
    <div className="preloader__circle preloader__circle_1" />
    <div className="preloader__circle preloader__circle_2" />
    <div className="preloader__circle preloader__circle_3" />
    <div className="preloader__circle preloader__circle_4" />
    <div className="preloader__circle preloader__circle_5" />
    <div className="preloader__circle preloader__circle_6" />
    <div className="preloader__circle preloader__circle_7" />
    <div className="preloader__circle preloader__circle_8" />
    <div className="preloader__circle preloader__circle_9" />
    <div className="preloader__circle preloader__circle_10" />
    <div className="preloader__circle preloader__circle_11" />
    <div className="preloader__circle preloader__circle_12" />
  </div>
);

export default Preloader;
