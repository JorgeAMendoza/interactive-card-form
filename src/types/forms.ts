export interface CardFormProps {
  cardHolderName: string | '';
  cardNumber: number | '';
  cardMonthExp: number | '';
  cardYearExp: number | '';
  cardCVC: number | '';
}

export type CardFormPropsKeys = keyof CardFormProps;
