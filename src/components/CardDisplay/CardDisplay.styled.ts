import styled from 'styled-components';
import mobileBackgroundColor from '../../assets/bg-main-mobile.png';
import desktopBackgroundColor from '../../assets/bg-main-desktop.png';
import device from '../../utils/device-breakpoints';

const CardDisplayStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media screen and (${device.tablet}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  background: url(${mobileBackgroundColor}) no-repeat center center/cover;
  height: 22rem;
  padding: var(--padding-sm);

  @media screen and ${device.tablet} {
    background: url(${desktopBackgroundColor}) no-repeat center center/cover;
    height: 100vh;
    justify-content: center;
  }
`;

export const CardFaceWrapper = styled.div`
  width: clamp(28.5rem, 30vw, 45rem);
  aspect-ratio: 2/1;
`;

export default CardDisplayStyled;
