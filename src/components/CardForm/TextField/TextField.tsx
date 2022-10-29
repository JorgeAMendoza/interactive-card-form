import { useField } from 'formik';
import React, { useEffect, useState } from 'react';
import { useCardDisplayContext } from '../../../context/CardDisplayContext';
import TextFieldStyled from './TextField.styled';

const TextField = (props: React.HTMLProps<HTMLInputElement>) => {
  const [inputInvalid, setInputInvalid] = useState(false);
  const [field, meta] = useField(props.name as string);
  const { dispatch } = useCardDisplayContext();

  useEffect(() => {
    if (meta.touched && meta.error) setInputInvalid(true);
    else setInputInvalid(false);
  }, [meta.error, meta.touched]);

  const cardDisplayUpdate = (
    fieldName: React.HTMLProps<HTMLInputElement>,
    input: string
  ) => {
    switch (fieldName.name) {
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
      default: {
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
          cardDisplayUpdate(props, e.target.value);
        }}
      />
      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
    </TextFieldStyled>
  );
};

export default TextField;
