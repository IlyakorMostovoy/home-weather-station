import styled from 'styled-components';
import { device } from 'styles/styled';

const StyledContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;

  @media ${device.tablet} {
    padding-left: 25px;
    padding-right: 25px;
  }
`;

type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => (
  <StyledContainer>{children}</StyledContainer>
);

export default Container;
