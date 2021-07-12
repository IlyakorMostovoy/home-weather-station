import styled from 'styled-components';
import { device } from 'styles/media';

export const Container = styled.div`
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
