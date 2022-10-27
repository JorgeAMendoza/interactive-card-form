import styled from 'styled-components';
import { CardFaceWrapper } from '../CardDisplay.styled';
import cardFrontBackground from '../../../assets/bg-card-front.png';
import device from '../../../utils/device-breakpoints';

const CardFrontStyled = styled(CardFaceWrapper)`
  background: url(${cardFrontBackground}) no-repeat center center/contain;
  position: relative;
  color: white;
  align-self: flex-start;
  z-index: 1;
  transform: translateY(-38%);

  > div {
    padding: 2rem 3rem;
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2fr 1fr;
    grid-template-areas:
      'cardLogo cardLogo'
      'cardNumber cardNumber'
      'cardNameCVC cardNameCVC';

    > div:nth-child(1) {
      grid-area: cardLogo;
      width: 5.4rem;
      align-self: end;
    }

    > div:nth-child(2) {
      grid-area: cardNumber;
      letter-spacing: 1.5px;
      align-self: end;
    }

    > div:nth-child(3) {
      grid-area: cardNameCVC;
      display: flex;
      justify-content: space-between;
      align-self: center;
    }
  }

  @media screen and (${device.tablet}) {
    transform: translateX(25%);
    align-self: flex-end;
    margin-block-end: var(--block-flow-md);
  }
`;

export default CardFrontStyled;
