import { useField } from 'formik';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import { CardFormPropsKeys } from '../../../types/forms';

interface TextFieldProps {
  name: CardFormPropsKeys;
  type: string;
  id: TextFieldProps['name'];
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const [field, meta] = useField(props.name);
  const { dispatch } = useCardDisplayContext();

  const cardDisplayUpdate = (fieldName: CardFormPropsKeys, input: string) => {
    switch (fieldName) {
      case 'cardHolderName': {
        dispatch({ type: 'SET_NAME', payload: input });
        return;
      }
      case 'cardNumber': {
        dispatch({ type: 'SET_NUMBER', payload: input });
        return;
      }
      case 'cardCVC': {
        dispatch({ type: 'SET_CVC', payload: input });
        return;
      }
    }
  };

  return (
    <div>
      <label>
        <input
          {...field}
          {...props}
          onChange={(e) => {
            field.onChange(e);
            cardDisplayUpdate(props.name, e.target.value);
          }}
        />
        {meta.touched && meta.error ? <p>{meta.error}</p> : null}
      </label>
    </div>
  );
};

export default TextField;
