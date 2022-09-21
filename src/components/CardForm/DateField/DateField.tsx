import { useField } from 'formik';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import { CardFormPropsKeys } from '../../../types/forms';

interface DateFieldProps {
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

const DateField = (props: DateFieldProps) => {
  const [monthField, monthMeta] = useField(props.monthProps.name);
  const [yearField, yearMeta] = useField(props.yearProps.name);
  const { dispatch } = useCardDisplayContext();

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
    <div>
      <label>
        <input
          {...monthField}
          {...props.monthProps}
          onChange={(e) => {
            monthField.onChange(e);
            cardDisplayUpdate(props.monthProps.name, e.target.value);
          }}
        />
      </label>

      <label>
        <input
          {...yearField}
          {...props.yearProps}
          onChange={(e) => {
            yearField.onChange(e);
            cardDisplayUpdate(props.yearProps.name, e.target.value);
          }}
        />
      </label>

      {monthMeta.touched && monthMeta.error ? (
        <p>{monthMeta.error}</p>
      ) : yearMeta.touched && yearMeta.error ? (
        <p>{yearMeta.error}</p>
      ) : null}
    </div>
  );
};

export default DateField;
