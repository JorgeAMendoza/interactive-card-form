import { useEffect } from 'react';

interface LoadingSpinnerProps {
  changeToThanks: () => void;
}

const LoadingSpinner = ({ changeToThanks }: LoadingSpinnerProps) => {
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      changeToThanks();
    }, 3000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);
  return (
    <div>
      <p>...loading</p>
    </div>
  );
};

export default LoadingSpinner;
