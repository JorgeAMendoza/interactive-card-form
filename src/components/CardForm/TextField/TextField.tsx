import { useField } from 'formik';

interface TextFieldProps {
  name: string;
  type: string;
  id: string;
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name);

  return (
    <div>
      <label>
        <input
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
          }}
        />
        {meta.touched && meta.error ? <p>ERROR</p> : null}
      </label>
    </div>
  );
};

export default TextField;
