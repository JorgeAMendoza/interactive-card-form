import { useField } from 'formik';

interface DateFieldProps {
  monthProps: {
    name: string;
    type: string;
    placeholder: string;
    id: string;
  };
  yearProps: {
    name: string;
    type: string;
    placeholder: string;
    id: string;
  };
}

const DateField = (props: DateFieldProps) => {
  const [monthField, monthMeta] = useField(props.monthProps.name);
  const [yearField, yearMeta] = useField(props.yearProps.name);

  return (
    <div>
      <label>
        <input
          {...monthField}
          {...props.monthProps}
          onChange={(e) => {
            monthField.onChange(e);
          }}
        />
      </label>

      <label>
        <input
          {...yearField}
          {...props.yearProps}
          onChange={(e) => {
            yearField.onChange(e);
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
