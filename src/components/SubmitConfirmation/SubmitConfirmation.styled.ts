import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

const SubmitConfirmationStyled = styled.section`
  animation: ${fadeIn} 0.5s linear;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: min(100%, 39rem);

  button {
    margin-block-start: 2rem;
  }

  > div:nth-of-type(2) {
    h1 {
      text-transform: uppercase;
      letter-spacing: 3.5px;
      font-size: 2.8rem;
    }

    p {
      font-size: 1.8rem;
      color: #8f8694;
      margin-block-start: 1rem;
    }
  }
`;

export default SubmitConfirmationStyled;
