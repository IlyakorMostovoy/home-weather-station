import './styles.scss';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => (
  <section className="section">{children}</section>
);

export default Section;
