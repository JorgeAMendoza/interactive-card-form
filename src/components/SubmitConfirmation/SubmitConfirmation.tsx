import submitCompleteIcon from '../../assets/icon-complete.svg';
import { useCardDisplayContext } from '../../context/CardDisplayContext';
import SubmitConfirmationStyled from './SubmitConfirmation.styled';

interface SubmitConfirmationProps {
  changeToForm: () => void;
}

const SubmitConfirmation = ({ changeToForm }: SubmitConfirmationProps) => {
  const { dispatch } = useCardDisplayContext();
  return (
    <SubmitConfirmationStyled>
      <div>
        <img
          src={submitCompleteIcon}
          alt="Submit icon for card submit confirmation"
        />
      </div>

      <div>
        <h1>thank you!</h1>
        <p>we&#39;ve added your card details</p>
      </div>

      <button
        onClick={() => {
          changeToForm();
          dispatch({ type: 'RESET' });
        }}
      >
        continue
      </button>
    </SubmitConfirmationStyled>
  );
};

export default SubmitConfirmation;
