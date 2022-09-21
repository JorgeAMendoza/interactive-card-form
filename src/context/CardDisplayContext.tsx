import { createContext, ReactNode, useContext, useReducer } from 'react';
import {
  CardDisplayState,
  CardDisplayAction,
  cardDisplayReducer,
  initialState,
} from '../reducers/CardDisplayReducer';

interface CardDisplayProviderProps {
  children: ReactNode;
}

interface CardDisplayValue {
  state: CardDisplayState;
  dispatch: React.Dispatch<CardDisplayAction>;
}

export const CardDisplayContext = createContext<CardDisplayValue>(
  {} as CardDisplayValue
);

export const useCardDisplayContext = () => {
  const { state, dispatch } = useContext(CardDisplayContext);

  return { state, dispatch };
};

export const CardDisplayProvider = ({ children }: CardDisplayProviderProps) => {
  const [state, dispatch] = useReducer(cardDisplayReducer, initialState);
  return (
    <CardDisplayContext.Provider value={{ state, dispatch }}>
      {children}
    </CardDisplayContext.Provider>
  );
};
