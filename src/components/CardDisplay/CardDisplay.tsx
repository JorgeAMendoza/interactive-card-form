import CardFront from './CardFront/CardFront';
import CardBack from './CardBack/CardBack';
import CardDisplayStyled from './CardDisplay.styled';

const CardDisplay = () => {
  return (
    <CardDisplayStyled>
      <CardFront />
      <CardBack />
    </CardDisplayStyled>
  );
};

export default CardDisplay;
