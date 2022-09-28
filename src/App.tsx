import { useState } from 'react';
import CardForm from './components/CardForm/CardForm';
import CardDisplay from './components/CardDisplay/CardDisplay';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import SubmitConfirmation from './components/SubmitConfirmation/SubmitConfirmation';
import AppStyled from './styles/App.Styled';
import { Wrapper as CardFormWrapper } from './components/CardForm/CardForm.styled';
import { Wrapper as CardDisplayWrapper } from './components/CardDisplay/CardDisplay.styled';

type FormState = 'form' | 'loading' | 'thanks';

function App() {
  const [formState, setFormState] = useState<FormState>('form');

  const changeToLoading = () => setFormState('loading');

  const changeToThanks = () => setFormState('thanks');

  const changeToForm = () => setFormState('form');

  return (
    <AppStyled>
      <CardDisplayWrapper>
        <CardDisplay />
      </CardDisplayWrapper>

      <CardFormWrapper>
        {formState === 'form' ? (
          <CardForm changeToLoading={changeToLoading} />
        ) : null}
        {formState === 'loading' ? (
          <LoadingSpinner changeToThanks={changeToThanks} />
        ) : null}
        {formState === 'thanks' ? (
          <SubmitConfirmation changeToForm={changeToForm} />
        ) : null}
      </CardFormWrapper>
    </AppStyled>
  );
}

export default App;
