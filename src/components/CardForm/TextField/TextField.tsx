import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import { CardFormPropsKeys } from '../../../types/forms';
import TextFieldStyled from './TextField.styled';

interface TextFieldProps {
  name: CardFormPropsKeys;
  type: string;
  id: TextFieldProps['name'];
  placeholder: string;
}

const TextField = (props: TextFieldProps) => {
  const [inputInvalid, setInputInvalid] = useState(false);
  const [field, meta] = useField(props.name);
  const { dispatch } = useCardDisplayContext();

  useEffect(() => {
    if (meta.touched && meta.error) setInputInvalid(true);
    else setInputInvalid(false);
  }, [meta.error, meta.touched]);

  const cardDisplayUpdate = (fieldName: CardFormPropsKeys, input: string) => {
    switch (fieldName) {
      case 'cardHolderName': {
        dispatch({ type: 'SET_NAME', payload: input });
        return;
      }
      case 'cardNumber': {
        const numberNoSpaces = input.replace(/\s/gi, '');
        dispatch({ type: 'SET_NUMBER', payload: numberNoSpaces });
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
      <input
        {...field}
        {...props}
        onChange={(e) => {
          field.onChange(e);
          cardDisplayUpdate(props.name, e.target.value);
        }}
      />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </TextFieldStyled>
  );
};

export default TextField;
