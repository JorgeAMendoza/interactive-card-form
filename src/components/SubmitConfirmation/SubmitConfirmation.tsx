import submitCompleteIcon from '../../assets/icon-complete.svg';
import { useCardDisplayContext } from '../../context/CardDisplayContext';
import { PrimaryButton } from '../../styles/Button.styled';
import SubmitConfirmationStyled from './SubmitConfirmation.styled';

interface SubmitConfirmationProps {
  changeToForm: () => void;
}

const SubmitConfirmation = ({ changeToForm }: SubmitConfirmationProps) => {
  const { dispatch } = useCardDisplayContext();
  return (
    <SubmitConfirmationStyled data-cy="submitConfirmation">
      <div>
        <img
          src={submitCompleteIcon}
          alt="Submit icon for card submit confirmation"
        />
      </div>

      <div>
        <h1>thank you!</h1>
        <p>We&#39;ve added your card details</p>
      </div>

      <PrimaryButton
        data-cy="submitConfirmationButton"
        onClick={() => {
          changeToForm();
          dispatch({ type: 'RESET' });
        }}
      >
        continue
      </PrimaryButton>
    </SubmitConfirmationStyled>
  );
};

export default SubmitConfirmation;
