import styled from 'styled-components';
import mobileBackgroundColor from '../../assets/bg-main-mobile.png';
import desktopBackgroundColor from '../../assets/bg-main-desktop.png';
import device from '../../utils/device-breakpoints';

const CardDisplayStyled = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  @media screen and (${device.laptop}) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${mobileBackgroundColor}) no-repeat center center/cover;
  height: 22rem;
  padding: var(--padding-sm);

  @media screen and ${device.laptop} {
    background: url(${desktopBackgroundColor}) no-repeat center center/cover;
    height: 100vh;
    justify-content: center;
  }
`;

export const CardFaceWrapper = styled.div`
  width: 28.6rem;
  height: 15.7rem;
  aspect-ratio: 2/1;
  border-radius: 5px;

  @media screen and ${device.tablet} {
    min-width: 36.7rem;
    height: 20.5rem;
  }

  @media screen and ${device.laptopL} {
    min-width: 44.7rem;
    height: 24.5rem;
  }
`;

export default CardDisplayStyled;
