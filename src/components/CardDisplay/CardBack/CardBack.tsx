import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import CardBackStyled from './CardBack.styled';

const CardBack = () => {
  const { state } = useCardDisplayContext();
  return (
    <CardBackStyled>
      <p>{state.cardCVC}</p>
    </CardBackStyled>
  );
};

export default CardBack;
