import { Formik, Form } from 'formik';
// import * as Yup from 'yup';
import { CardFormProps } from '../../types/forms';
import DateField from './DateField/DateField';
import TextField from './TextField/TextField';

const cardFormMonthProps = {
  name: 'cardMonthExp',
  type: 'number',
  placeholder: 'MM',
  id: 'cardMonthExp',
};

const cardFormYearProps = {
  name: 'cardYearExp',
  type: 'number',
  placeholder: 'YY',
  id: 'cardYearExp',
};

const CardForm = () => {
  const initialValues: CardFormProps = {
    cardHolderName: '',
    cardNumber: '',
    cardMonthExp: '',
    cardYearExp: '',
    cardCVC: '',
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <TextField
            type="text"
            name="cardHolderName"
            id="cardHolderName"
            placeholder="e.g. Jane Appleseed"
          />
          <TextField
            type="number"
            name="cardNumber"
            id="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
          />

          <TextField
            type="text"
            name="cardCVC"
            id="cardCVC"
            placeholder="e.g. 123"
          />

          <DateField
            monthProps={cardFormMonthProps}
            yearProps={cardFormYearProps}
          />
          <button type="submit">confirm</button>
        </Form>
      </Formik>
      {/* <form>
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

        <button type="submit">confirm</button>
      </form> */}
    </>
  );
};

export default CardForm;
