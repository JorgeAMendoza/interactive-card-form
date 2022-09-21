import { Formik, Form } from 'formik';
import { CardFormProps } from '../../types/forms';
import DateField from './DateField/DateField';
import TextField from './TextField/TextField';
import { yupValidation } from '../utils/form-validation';

const initialValues: CardFormProps = {
  cardHolderName: '',
  cardNumber: '',
  cardMonthExp: '',
  cardYearExp: '',
  cardCVC: '',
};

const CardForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidation}
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
            type="number"
            name="cardCVC"
            id="cardCVC"
            placeholder="e.g. 123"
          />

          <DateField
            monthProps={{
              name: 'cardMonthExp',
              id: 'cardMonthExp',
              placeholder: 'MM',
              type: 'text',
            }}
            yearProps={{
              name: 'cardYearExp',
              type: 'number',
              placeholder: 'YY',
              id: 'cardYearExp',
            }}
          />
          <button type="submit">confirm</button>
        </Form>
      </Formik>
    </>
  );
};

export default CardForm;
