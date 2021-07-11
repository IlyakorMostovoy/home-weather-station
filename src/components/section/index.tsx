import styled from 'styled-components';
import { device } from 'styles/styled';

const StyledSection = styled.section`
  padding-bottom: 14px;

  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;

type SectionProps = {
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ children }) => (
  <StyledSection>{children}</StyledSection>
);

export default Section;
