import { useEffect, useState } from 'react';
import loadingCircleGIF from '../../assets/loading-circle.gif';
import LoadingSpinnerStyled from './LoadingSpinner.styled';

interface LoadingSpinnerProps {
  changeToThanks: () => void;
}

const LoadingSpinner = ({ changeToThanks }: LoadingSpinnerProps) => {
  const [submitLoading, setSubmitLoading] = useState<'loading' | 'done'>(
    'loading'
  );
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setSubmitLoading('done');
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  const animationEnd = () => {
    if (submitLoading === 'loading') return;
    else changeToThanks();
  };

  return (
    <LoadingSpinnerStyled
      onAnimationEnd={animationEnd}
      data-submitloading={submitLoading}
      data-cy="loadingSpinner"
    >
      <img src={loadingCircleGIF} alt="loading gif" />
    </LoadingSpinnerStyled>
  );
};

export default LoadingSpinner;
