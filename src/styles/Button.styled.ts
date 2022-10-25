import styled from 'styled-components';

const Button = styled.button`
  border: none;
  font-family: inherit;
  cursor: pointer;
  padding: 1.5rem 3rem;
  border-radius: 8px;
  text-transform: capitalize;
  text-align: center;
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: #21092f;
  width: 100%;
  font-size: 1.8rem;
`;
