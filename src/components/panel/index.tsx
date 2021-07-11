import './styles.scss';

type PanelProps = {
  children: React.ReactNode;
};

const Panel: React.FC<PanelProps> = ({ children }) => (
  <div className="panel">
    <div className="panel__inner">{children}</div>
  </div>
);

export default Panel;
