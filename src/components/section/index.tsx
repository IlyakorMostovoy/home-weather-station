import * as Styled from './styled';

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => (
  <Styled.Section>{children}</Styled.Section>
);

export default Section;
