import cardLogo from '../../../assets/card-logo.svg';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';

const CardFront = () => {
  const { state } = useCardDisplayContext();

  return (
    <div>
      <div>
        <div>
          <img src={cardLogo} alt="Card display logo" />
        </div>
      </div>

      <div>
        <p>{state.cardNumber}</p>
      </div>

      <div>
        <p>{state.cardName}</p>
        <p>
          {state.cardMonthExp}/{state.cardYearExp}
        </p>
      </div>
    </div>
  );
};

export default CardFront;
