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
import cardNumberSpaces from '../../utils/card-number-spaces';

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
          ({ values, actions });
          if (
            validateDate(
              Number(values.cardMonthExp),
              Number(values.cardYearExp)
            )
          ) {
            setFormSent('sent');
          } else {
            actions.setFieldError('cardMonthExp', 'Invalid date');
            actions.setFieldError('cardYearExp', 'Invalid date');
          }
          actions.setSubmitting(false);
        }}
      >
        <Form data-cy="cardForm">
          <div>
            <label data-cy="cardFormName">
              Cardholder name
              <TextField
                inputProps={{
                  type: 'text',
                  name: 'cardHolderName',
                  id: 'cardHoldeName',
                  placeholder: 'e.g. Jane Appleseed',
                }}
              />
            </label>
          </div>

          <div>
            <label data-cy="cardFormNumber">
              Card number
              <TextField
                inputProps={{
                  type: 'text',
                  id: 'cardNumber',
                  name: 'cardNumber',
                  placeholder: 'e.g. 1234 5678 1234 5678',
                  maxLength: 20,
                }}
                textModifier={cardNumberSpaces}
              />
            </label>
          </div>

          <DateCVCWrapper>
            <DateField
              labelText="exp. date (mm/yy)"
              monthProps={{
                name: 'cardMonthExp',
                id: 'cardMonthExp',
                placeholder: 'MM',
                type: 'text',
                maxLength: 2,
              }}
              yearProps={{
                name: 'cardYearExp',
                type: 'text',
                placeholder: 'YY',
                id: 'cardYearExp',
                maxLength: 2,
              }}
            />

            <label data-cy="cardFormCVC">
              CVC
              <TextField
                inputProps={{
                  type: 'text',
                  name: 'cardCVC',
                  placeholder: 'e.g. 123',
                  maxLength: 3,
                }}
              />
            </label>
          </DateCVCWrapper>

          <PrimaryButton type="submit" data-cy="cardFormButton">
            confirm
          </PrimaryButton>
        </Form>
      </Formik>
    </CardFormStyled>
  );
};

export default CardForm;
