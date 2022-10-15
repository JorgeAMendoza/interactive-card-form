import styled from 'styled-components';
import device from '../../utils/device-breakpoints';

const CardFormStyled = styled.div`
  margin-block-start: var(--block-flow-md);
  width: 100%;

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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
