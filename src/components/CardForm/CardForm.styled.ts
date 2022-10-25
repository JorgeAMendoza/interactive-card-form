import styled from 'styled-components';
import device from '../../utils/device-breakpoints';
import { fadeOut } from '../../styles/animations';

const CardFormStyled = styled.div`
  width: 100%;

  &[data-formsent='sent'] {
    animation: ${fadeOut} 0.5s linear;
  }

  @media screen and (${device.tablet}) {
    margin-block-start: 0;
    width: 38.5rem;
  }

  form > * {
    margin-block-end: min(2.5rem, 4.5vh);
  }
`;

export const CardFormWrapper = styled.section`
  padding: var(--padding-sm);
  margin-block-start: var(--block-flow-lg);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${device.tablet}) {
    margin-block-start: 0;
  }
`;

export const DateCVCWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

  > div:nth-of-type(1) {
    width: 40%;
  }

  > div:nth-of-type(2) {
    width: 60%;
  }
`;

export default CardFormStyled;
