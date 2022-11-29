import styled from 'styled-components';
import { fadeIn, fadeOut } from '../../styles/animations';

const LoadingSpinnerStyled = styled.div`
  animation: ${fadeIn} 0.5s linear;

  &[data-submitloading='done'] {
    animation: ${fadeOut} 0.5s linear;
  }
`;

export default LoadingSpinnerStyled;
