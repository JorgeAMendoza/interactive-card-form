import { Formik, Form } from 'formik';
import { CardFormProps } from '../../types/forms';
import DateField from './DateField/DateField';
import TextField from './TextField/TextField';
import { yupValidation } from '../../utils/form-validation';
import CardFormStyled from './CardForm.styled';
import { PrimaryButton } from '../../styles/Button.styled';
import { DateCVCWrapper } from './CardForm.styled';
import validateDate from '../../utils/validate-date';
import { useState } from 'react';

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
  const [formSent, setFormSent] = useState<'sent' | 'idle'>('idle');
  return (
    <CardFormStyled data-formsent={formSent} onAnimationEnd={changeToLoading}>
      <Formik
        initialValues={initialValues}
        validationSchema={yupValidation}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          if (
            validateDate(
              Number(values.cardMonthExp),
              Number(values.cardYearExp)
            )
          ) {
            setFormSent('sent');
          } else {
            actions.setFieldError('cardMonthExp', 'invalid date');
            actions.setFieldError('cardYearExp', 'invalid date');
          }
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
                type: 'number',
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
