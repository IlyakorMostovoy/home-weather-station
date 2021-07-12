import styled from 'styled-components';
import { device } from 'styles/media';

export const Section = styled.section`
  padding-bottom: 14px;

  @media ${device.tablet} {
    padding-bottom: 32px;
  }
`;
