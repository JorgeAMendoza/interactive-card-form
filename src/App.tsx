import { CardDisplayProvider } from './context/CardDisplayContext';
import { useState } from 'react';
import CardForm from './components/CardForm/CardForm';
import CardDisplay from './components/CardDisplay/CardDisplay';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import SubmitConfirmation from './components/SubmitConfirmation/SubmitConfirmation';

type FormState = 'form' | 'loading' | 'thanks';

function App() {
  const [formState, setFormState] = useState<FormState>('form');

  const changeToLoading = () => setFormState('loading');

  const changeToThanks = () => setFormState('thanks');

  const changeToForm = () => setFormState('form');

  return (
    <main className="App">
      <CardDisplayProvider>
        <section>
          {formState === 'form' ? (
            <CardForm changeToLoading={changeToLoading} />
          ) : null}
          {formState === 'loading' ? (
            <LoadingSpinner changeToThanks={changeToThanks} />
          ) : null}
          {formState === 'thanks' ? (
            <SubmitConfirmation changeToForm={changeToForm} />
          ) : null}
        </section>

        <section>
          <CardDisplay />
        </section>
      </CardDisplayProvider>
    </main>
  );
}

export default App;
