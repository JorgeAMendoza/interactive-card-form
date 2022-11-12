import { useEffect, useState } from 'react';
import { useField } from 'formik';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import DateFieldStyled from './DateField.styled';

interface DateFieldProps {
  labelText: string;
  monthProps: React.HTMLProps<HTMLInputElement>;
  yearProps: React.HTMLProps<HTMLInputElement>;
}

const DateField = ({ labelText, monthProps, yearProps }: DateFieldProps) => {
  const [monthInvalid, setMonthInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);
  const [monthField, monthMeta] = useField(monthProps.name as string);
  const [yearField, yearMeta] = useField(yearProps.name as string);
  const { dispatch } = useCardDisplayContext();

  useEffect(() => {
    if (monthMeta.touched && monthMeta.error) setMonthInvalid(true);
    else setMonthInvalid(false);

    if (yearMeta.touched && yearMeta.error) setYearInvalid(true);
    else setYearInvalid(false);
  }, [monthMeta.touched, monthMeta.error, yearMeta.touched, yearMeta.error]);

  const cardDisplayUpdate = (
    fieldName: React.HTMLProps<HTMLInputElement>,
    input: string
  ) => {
    switch (fieldName.name) {
      case 'cardMonthExp': {
        dispatch({ type: 'SET_MONTH', payload: input });
        return;
      }
      case 'cardYearExp': {
        dispatch({ type: 'SET_YEAR', payload: input });
        return;
      }
      default: {
        return;
      }
    }
  };

  return (
    <DateFieldStyled monthInvalid={monthInvalid} yearInvalid={yearInvalid}>
      <p>{labelText}</p>
      <div>
        <label data-cy="cardFormMonth">
          <input
            {...monthField}
            {...monthProps}
            onChange={(e) => {
              monthField.onChange(e);
              cardDisplayUpdate(monthProps, e.target.value);
            }}
            aria-label="card month experation input"
          />
        </label>

        <label data-cy="cardFormYear">
          <input
            {...yearField}
            {...yearProps}
            onChange={(e) => {
              yearField.onChange(e);
              cardDisplayUpdate(yearProps, e.target.value);
            }}
            aria-label="card month experation input"
          />
        </label>
      </div>

      {monthMeta.touched && monthMeta.error ? (
        <p data-cy="cardMonthError">{monthMeta.error}</p>
      ) : yearMeta.touched && yearMeta.error ? (
        <p data-cy="cardYearError">{yearMeta.error}</p>
      ) : null}
    </DateFieldStyled>
  );
};

export default DateField;
