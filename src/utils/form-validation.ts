import * as Yup from 'yup';

export const yupValidation = Yup.object({
  cardHolderName: Yup.string()
    .max(20, 'Wrong format, must be 20 characters or less')
    .required("Can't be blank"),
  cardNumber: Yup.number()
    .typeError('Wrong format, numbers only')
    .test('len', 'Wrong format, must be exactly 16 numbers', (val) => {
      if (val?.toString().length === 16) return true;
      else return false;
    })
    .test('valid', 'Wrong format, numbers only', (val) => {
      if (!val) return true;
      const numbersRegex = /[^0-9]/gi;
      if (!numbersRegex.test(val.toString())) return true;
      else return false;
    })
    .required("Can't be blank"),
  cardMonthExp: Yup.number()
    .typeError('Wrong format, must be a number')
    .test('len', 'Invalid month', (val) => {
      if (!val) return true;
      if (val.toString().length > 2) return false;
      else return true;
    })
    .min(1, 'Invalid month')
    .max(12, 'Invalid month')
    .required("Can't be blank"),
  cardYearExp: Yup.number()
    .typeError('Wrong format, must be a number')
    .test('len', 'Invalid year', (val) => {
      if (!val) return true;
      if (val.toString().length === 2) return true;
      else return false;
    })
    .min(Number(new Date().getFullYear().toString().slice(-2)), 'Invalid year')
    .max(
      Number(new Date().getFullYear().toString().slice(-2)) + 5,
      'Invalid year'
    )
    .required("Can't be blank"),
  cardCVC: Yup.number()
    .typeError('Wrong format, must be a number')
    .test('len', 'Wrong format, must be three digits', (val) => {
      if (!val) return true;
      if (val?.toString().length === 3) return true;
      else return false;
    })
    .test('valid', 'Wrong format, numbers only', (val) => {
      if (!val) return true;
      const numbersRegex = /[^0-9]/gi;
      if (!numbersRegex.test(val.toString())) return true;
      else return false;
    })
    .required("Can't be blank"),
});
