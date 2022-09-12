const CardForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="cardholderName">cardholder name</label>
        <input type="text" name="cardholderName" id="cardholdername" />
        <p>error message</p>
      </div>

      <div>
        <label htmlFor="cardNumber">card number</label>
        <input type="number" name="cardNumber" id="cardNumber" />
        <p>error message</p>
      </div>

      <div>
        <label>exp. date (mm/yy)</label>
        <input type="number" name="cardExpMonth" id="cardExpMonth" />
        <input type="number" name="cardExpYear" id="cardExpYear" />
        <p>error message</p>
      </div>

      <div>
        <label htmlFor="cardCVC">cvc</label>
        <input type="number" name="cardCVC" id="cardCVC" />
        <p>error message</p>
      </div>

      <button>confirm</button>
    </form>
  );
};

export default CardForm;
