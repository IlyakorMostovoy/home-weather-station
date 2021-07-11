import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  font-size: 25px;
  line-height: 1;
`;

const StyledSpan = styled.div`
  font-weight: 600;
`;

const Logo = () => (
  <StyledLogo>
    <StyledSpan>Home</StyledSpan>
    Dashboard
  </StyledLogo>
);

export default Logo;
