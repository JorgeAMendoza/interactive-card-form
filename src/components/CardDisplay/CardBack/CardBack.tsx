import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import CardBackStyled from './CardBack.styled';

const CardBack = () => {
  const { state } = useCardDisplayContext();
  return (
    <CardBackStyled>
      <p data-cy="cardDisplayCVC">{state.cardCVC}</p>
    </CardBackStyled>
  );
};

export default CardBack;
