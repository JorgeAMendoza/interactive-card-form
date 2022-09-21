import CardForm from './components/CardForm/CardForm';
import CardDisplay from './components/CardDisplay/CardDisplay';
import { CardDisplayProvider } from './context/CardDisplayContext';

function App() {
  return (
    <div className="App">
      <CardDisplayProvider>
        <CardForm />
        <CardDisplay />
      </CardDisplayProvider>
    </div>
  );
}

export default App;
