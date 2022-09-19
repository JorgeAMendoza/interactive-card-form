import { Formik, Form } from 'formik';
import * as Yup from 'yup';
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

const yupValidation = Yup.object({
  cardHolderName: Yup.string()
    .max(20, 'Wrong format, must be 20 characters or less')
    .required("Can't be blank"),
  cardNumber: Yup.number()
    .test('len', 'Wrong format, must be exactly 16 numbers', (val) => {
      if (val?.toString().length === 16) return true;
      else return false;
    })
    .required("Can't be blank"),
  cardMonthExp: Yup.number()
    .test('len', 'Wrong format, must be less than two digits', (val) => {
      if (!val) return true;
      if (val.toString().length > 2) return false;
      else return true;
    })
    .min(1, 'Invalid month')
    .max(12, 'Invalid month')
    .required("Can't be blank"),
  cardYearExp: Yup.number()
    .test('len', 'Wrong format, must be four digits', (val) => {
      if (!val) return true;
      if (val.toString().length === 4) return true;
      else return false;
    })
    .min(new Date().getFullYear(), 'Invalid year')
    .required("Can't be blank"),
  cardCVC: Yup.number()
    .test('len', 'Wrong format, must be three digits', (val) => {
      if (!val) return true;
      if (val?.toString().length === 3) return true;
      else return false;
    })
    .required("Can't be blank"),
});

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
            monthProps={cardFormMonthProps}
            yearProps={cardFormYearProps}
          />
          <button type="submit">confirm</button>
        </Form>
      </Formik>
    </>
  );
};

export default CardForm;
