import styled from 'styled-components';

interface TextFieldStyledProps {
  inputInvalid: boolean;
}

const TextFieldStyled = styled.div<TextFieldStyledProps>`
  input {
    display: block;
    margin-block-start: 1rem;
    border-radius: 4px;
    outline: 1px solid
      ${({ inputInvalid }) => (inputInvalid ? 'red' : '#dfdee0')};
    width: 100%;
    padding: var(--padding-sm);
    color: inherit;
    font-weight: inherit;

    &:focus {
      outline: 1px solid var(--primary-color);
    }
  }

  p {
    font-weight: 500;
    font-size: var(--small-text);
    text-transform: none;
    margin-block-start: 0.8rem;
    color: #ff5050;
    letter-spacing: normal;
  }
`;

export default TextFieldStyled;
