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

      {monthMeta.touched &&
      yearMeta.touched &&
      monthMeta.error &&
      yearMeta.error ? (
        <p>ERROR</p>
      ) : null}
    </div>
  );
};

export default DateField;
