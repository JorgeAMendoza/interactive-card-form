import { useCardDisplayContext } from '../../../context/CardDisplayContext';

const CardBack = () => {
  const { state } = useCardDisplayContext();
  return (
    <div>
      <p>{state.cardCVC}</p>
    </div>
  );
};

export default CardBack;
