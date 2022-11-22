import styled from 'styled-components';

interface DateFieldStyledProps {
  monthInvalid: boolean;
  yearInvalid: boolean;
}

const DateFieldStyled = styled.div<DateFieldStyledProps>`
  p {
    font-weight: 500;
  }
  p:first-child {
    font-size: var(--small-text);
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  p:last-child {
    font-size: var(--small-text);
    text-transform: capitalize;
    color: #ff5050;
    margin-block-start: 0.8rem;
  }

  > div {
    display: flex;
    margin-block-start: 1rem;
    align-items: flex-start;
    gap: 1rem;
  }

  > label {
    font-size: var(--small-text);
    color: var(--primary-color);
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  label > input {
    display: block;
    width: 100%;
    padding: var(--padding-sm);
    color: #21092f;
    border-radius: 4px;
    font-weight: 500;

    &:focus {
      outline: 1px solid var(--primary-color);
    }

    &::placeholder {
      color: #21092f;
      opacity: 0.25;
    }
  }

  > div label {
    &:nth-of-type(1) {
      input {
        outline: 1px solid
          ${({ monthInvalid }) => (monthInvalid ? 'red' : '#dfdee0')};
      }
    }

    &:nth-of-type(2) {
      input {
        outline: 1px solid
          ${({ yearInvalid }) => (yearInvalid ? 'red' : '#dfdee0')};
      }
    }
  }
`;

export default DateFieldStyled;
