import * as Yup from 'yup';

export const yupValidation = Yup.object({
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
    .test('len', 'invalid month', (val) => {
      if (!val) return true;
      if (val.toString().length > 2) return false;
      else return true;
    })
    .min(1, 'Invalid month')
    .max(12, 'Invalid month')
    .required("Can't be blank"),
  cardYearExp: Yup.number()
    .test('len', 'invalid year', (val) => {
      if (!val) return true;
      if (val.toString().length === 2) return true;
      else return false;
    })
    .min(Number(new Date().getFullYear().toString().slice(-2)), 'invalid year')
    .max(
      Number(new Date().getFullYear().toString().slice(-2)) + 5,
      'invalid year'
    )
    .required("Can't be blank"),
  cardCVC: Yup.number()
    .test('len', 'Wrong format, must be three digits', (val) => {
      if (!val) return true;
      if (val?.toString().length === 3) return true;
      else return false;
    })
    .required("Can't be blank"),
});
