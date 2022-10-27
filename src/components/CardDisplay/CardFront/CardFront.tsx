import cardLogo from '../../../assets/card-logo.svg';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import CardFrontStyled from './CardFront.styled';

const spaceRegex = /([0-9]{1,4})/gi;

const CardFront = () => {
  const { state } = useCardDisplayContext();

  return (
    <CardFrontStyled>
      <div>
        <div>
          <div>
            <img src={cardLogo} alt="Card display logo" />
          </div>
        </div>

        <div>
          <p>{state.cardNumber.replace(spaceRegex, '$1 ')}</p>
        </div>

        <div>
          <p>{state.cardName}</p>
          <p>
            {state.cardMonthExp}/{state.cardYearExp}
          </p>
        </div>
      </div>
    </CardFrontStyled>
  );
};

export default CardFront;
