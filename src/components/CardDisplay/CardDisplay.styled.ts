import styled from 'styled-components';
import mobileBackgroundColor from '../../assets/bg-main-mobile.png';
import desktopBackgroundColor from '../../assets/bg-main-desktop.png';
import device from '../../utils/device-breakpoints';

const CardDisplayStyled = styled.div``;

export const Wrapper = styled.section`
  background: url(${mobileBackgroundColor}) no-repeat center center/cover;
  height: 30vh;
  padding: var(--padding-sm);

  @media screen and ${device.tablet} {
    background: url(${desktopBackgroundColor}) no-repeat center center/cover;
    height: 100vh;
  }
`;

export default CardDisplayStyled;
