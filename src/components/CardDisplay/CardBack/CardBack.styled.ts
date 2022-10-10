import styled from 'styled-components';
import cardBackBackground from '../../../assets/bg-card-back.png';
import { CardFaceWrapper } from '../CardDisplay.styled';
import device from '../../../utils/device-breakpoints';

const CardBackStyled = styled(CardFaceWrapper)`
  background: url(${cardBackBackground}) no-repeat center center/contain;
  position: relative;

  @media screen and (${device.tablet}) {
    transform: translateX(50%);
    align-self: flex-end;
  }
  p {
    position: absolute;
    right: 15%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default CardBackStyled;
