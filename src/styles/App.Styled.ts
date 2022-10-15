import styled from 'styled-components';
import device from '../utils/device-breakpoints';

const AppStyled = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and ${device.tablet} {
    flex-direction: row;

    > *:first-child {
      width: min(35vw, 100rem);
    }
  }
`;



export default AppStyled;
