import submitCompleteIcon from '../../assets/icon-complete.svg';

interface SubmitConfirmationProps {
  changeToForm: () => void;
}

const SubmitConfirmation = ({ changeToForm }: SubmitConfirmationProps) => {
  return (
    <section>
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

      <button onClick={changeToForm}>continue</button>
    </section>
  );
};

export default SubmitConfirmation;
