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

  console.log(submitLoading);

  const animationEnd = () => {
    console.log('in animation end here', submitLoading);
    if (submitLoading === 'loading') return;
    else changeToThanks();
  };

  return (
    <LoadingSpinnerStyled
      onAnimationEnd={animationEnd}
      data-submitloading={submitLoading}
    >
      <img src={loadingCircleGIF} alt="loading gif" />
    </LoadingSpinnerStyled>
  );
};

export default LoadingSpinner;
