import styled from 'styled-components';
import device from '../../utils/device-breakpoints';
import { fadeOut } from '../../styles/animations';

const CardFormStyled = styled.div`
  width: min(100%, 38.5rem);

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    button {
      margin-block-start: 2rem;
    }

    > div {
      display: flex;
      flex-direction: column;
    }
  }

  > form label {
    font-size: var(--small-text);
    color: var(--primary-color);
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
  }

  &[data-formsent='sent'] {
    animation: ${fadeOut} 0.5s linear;
  }

  @media screen and (${device.tablet}) {
    margin-block-start: 0;
  }
`;

export const CardFormWrapper = styled.section`
  padding: var(--padding-sm);
  margin-block-start: 18vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${device.laptop}) {
    margin-block-start: 0;
    justify-content: normal;
    /* clamp the margin */
    margin-left: clamp(24rem, 17vw, 27rem);
  }
`;

export const DateCVCWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row !important;
  gap: 1.5rem;

  > div:nth-of-type(1) {
    flex: 1;
    width: 50%;
  }

  > label {
    width: 50%;
  }
`;

export default CardFormStyled;
