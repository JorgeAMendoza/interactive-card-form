import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import { CardFormPropsKeys } from '../../../types/forms';
import TextFieldStyled from './TextField.styled';

interface InputProps {
  name: CardFormPropsKeys;
  type: string;
  id: InputProps['name'];
  placeholder: string;
}

interface TextFieldProps {
  labelText: string;
  inputProps: InputProps;
}

const TextField = ({ labelText, inputProps }: TextFieldProps) => {
  const [inputInvalid, setInputInvalid] = useState(false);
  const [field, meta] = useField(inputProps.name);
  const { dispatch } = useCardDisplayContext();

  useEffect(() => {
    if (meta.touched && meta.error) setInputInvalid(true);
    else setInputInvalid(false);
  }, [meta.error]);

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
    <TextFieldStyled inputInvalid={inputInvalid}>
      <label>
        <p>{labelText}</p>
        <input
          {...field}
          {...inputProps}
          onChange={(e) => {
            field.onChange(e);
            cardDisplayUpdate(inputProps.name, e.target.value);
          }}
        />
        {meta.touched && meta.error ? <p>{meta.error}</p> : null}
      </label>
    </TextFieldStyled>
  );
};

export default TextField;
