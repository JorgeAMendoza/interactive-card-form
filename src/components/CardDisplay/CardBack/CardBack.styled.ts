import styled from 'styled-components';
import cardBackBackground from '../../../assets/bg-card-back.png';
import { CardFaceWrapper } from '../CardDisplay.styled';
import device from '../../../utils/device-breakpoints';

const CardBackStyled = styled(CardFaceWrapper)`
  background: url(${cardBackBackground}) no-repeat center center/cover;
  position: relative;
  color: white;
  letter-spacing: 2px;
  transform: translate(10%, 4%);

  @media screen and (${device.laptop}) {
    transform: translateX(50%);
    align-self: flex-end;
  }
  p {
    position: absolute;
    right: 12%;
    top: 49.5%;
    transform: translateY(-50%);
    font-size: clamp(1.2rem, 1.5vw, 1.6rem);
  }
`;

export default CardBackStyled;
