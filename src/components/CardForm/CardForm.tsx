import { Formik, Form } from 'formik';
import { CardFormProps } from '../../types/forms';
import DateField from './DateField/DateField';
import TextField from './TextField/TextField';
import { yupValidation } from '../../utils/form-validation';
import CardFormStyled from './CardForm.styled';
import { PrimaryButton } from '../../styles/Button.styled';
import { DateCVCWrapper } from './CardForm.styled';

const initialValues: CardFormProps = {
  cardHolderName: '',
  cardNumber: '',
  cardMonthExp: '',
  cardYearExp: '',
  cardCVC: '',
};

interface CardFormComponentProps {
  changeToLoading: () => void;
}

const CardForm = ({ changeToLoading }: CardFormComponentProps) => {
  return (
    <CardFormStyled>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidation}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          changeToLoading();
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        <Form>
          <TextField
            labelText="cardholder name"
            inputProps={{
              type: 'text',
              name: 'cardHolderName',
              id: 'cardHolderName',
              placeholder: 'e.g. Jane Appleseed',
            }}
          />
          <TextField
            labelText="card number"
            inputProps={{
              type: 'text',
              name: 'cardNumber',
              id: 'cardNumber',
              placeholder: 'e.g. 1234 5678 9123 0000',
            }}
          />

          <DateCVCWrapper>
            <DateField
              labelText="exp. date (mm/yy)"
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

            <TextField
              labelText="CVC"
              inputProps={{
                type: 'text',
                name: 'cardCVC',
                placeholder: 'e.g. 123',
                id: 'cardCVC',
              }}
            />
          </DateCVCWrapper>

          <PrimaryButton type="submit">confirm</PrimaryButton>
        </Form>
      </Formik>
    </CardFormStyled>
  );
};

export default CardForm;
