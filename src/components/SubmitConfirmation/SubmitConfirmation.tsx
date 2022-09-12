import submitCompleteIcon from '../../assets/icon-complete.svg';

const SubmitConfirmation = () => {
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
 
      <button>continue</button>
    </section>
  );
};

export default SubmitConfirmation;
