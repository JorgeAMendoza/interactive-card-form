import { useEffect, useState } from 'react';
import { useField } from 'formik';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import { CardFormPropsKeys } from '../../../types/forms';
import DateFieldStyled from './DateField.styled';

interface DateFieldProps {
  labelText: string;
  monthProps: {
    name: 'cardMonthExp';
    type: string;
    placeholder: string;
    id: DateFieldProps['monthProps']['name'];
  };
  yearProps: {
    name: 'cardYearExp';
    type: string;
    placeholder: string;
    id: DateFieldProps['yearProps']['name'];
  };
}

const DateField = ({ labelText, monthProps, yearProps }: DateFieldProps) => {
  const [monthInvalid, setMonthInvalid] = useState(false);
  const [yearInvalid, setYearInvalid] = useState(false);
  const [monthField, monthMeta] = useField(monthProps.name);
  const [yearField, yearMeta] = useField(yearProps.name);
  const { dispatch } = useCardDisplayContext();

  useEffect(() => {
    if (monthMeta.touched && monthMeta.error) setMonthInvalid(true);
    else setMonthInvalid(false);

    if (yearMeta.touched && yearMeta.error) setYearInvalid(true);
    else setYearInvalid(false);
  }, [monthMeta.touched, monthMeta.error, yearMeta.touched, yearMeta.error]);

  const cardDisplayUpdate = (fieldName: CardFormPropsKeys, input: string) => {
    switch (fieldName) {
      case 'cardMonthExp': {
        dispatch({ type: 'SET_MONTH', payload: input });
        return;
      }
      case 'cardYearExp': {
        dispatch({ type: 'SET_YEAR', payload: input });
        return;
      }
    }
  };

  return (
    <DateFieldStyled monthInvalid={monthInvalid} yearInvalid={yearInvalid}>
      <p>{labelText}</p>
      <div>
        <label>
          <input
            {...monthField}
            {...monthProps}
            onChange={(e) => {
              monthField.onChange(e);
              cardDisplayUpdate(monthProps.name, e.target.value);
            }}
          />
        </label>

        <label>
          <input
            {...yearField}
            {...yearProps}
            onChange={(e) => {
              yearField.onChange(e);
              cardDisplayUpdate(yearProps.name, e.target.value);
            }}
          />
        </label>
      </div>

      {monthMeta.touched && monthMeta.error ? (
        <p>{monthMeta.error}</p>
      ) : yearMeta.touched && yearMeta.error ? (
        <p>{yearMeta.error}</p>
      ) : null}
    </DateFieldStyled>
  );
};

export default DateField;
