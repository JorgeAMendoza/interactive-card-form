export const initialState: CardDisplayState = {
  cardName: 'Jane Appleseed',
  cardNumber: '0000000000000000',
  cardMonthExp: '00',
  cardYearExp: '00',
  cardCVC: '000',
};

export interface CardDisplayState {
  cardName: string;
  cardNumber: string;
  cardMonthExp: string;
  cardYearExp: string;
  cardCVC: string;
}

interface SetNameAction {
  type: 'SET_NAME';
  payload: string;
}

interface SetNumberAction {
  type: 'SET_NUMBER';
  payload: string;
}

interface SetMonthAction {
  type: 'SET_MONTH';
  payload: string;
}

interface SetYearAction {
  type: 'SET_YEAR';
  payload: string;
}

interface SetCVCAction {
  type: 'SET_CVC';
  payload: string;
}

interface ResetCardForm {
  type: 'RESET';
}

export type CardDisplayAction =
  | SetNameAction
  | SetNumberAction
  | SetMonthAction
  | SetYearAction
  | SetCVCAction
  | ResetCardForm;

export const cardDisplayReducer = (
  state: CardDisplayState,
  action: CardDisplayAction
) => {
  switch (action.type) {
    case 'SET_NAME': {
      let updatedName = action.payload;
      if (updatedName.length > 20) return state;
      if (action.payload.length === 0) updatedName = 'Jane Appleseed';

      return Object.assign({}, state, { cardName: updatedName });
    }
    case 'SET_NUMBER': {
      let updatedNumber = action.payload;
      if (updatedNumber.length > 16) return state;
      if (action.payload.length === 0) updatedNumber = '0000000000000000';

      return Object.assign({}, state, { cardNumber: updatedNumber });
    }
    case 'SET_MONTH': {
      let updatedMonth = action.payload;
      if (updatedMonth.length > 2) return state;
      if (action.payload.length === 0) updatedMonth = '00';
      if (updatedMonth.length == 1) updatedMonth = '0'.concat(action.payload);

      return Object.assign({}, state, { cardMonthExp: updatedMonth });
    }
    case 'SET_YEAR': {
      let updatedYear = action.payload;
      if (updatedYear.length > 4) return state;
      if (action.payload.length === 0) updatedYear = '00';

      return Object.assign({}, state, { cardYearExp: updatedYear });
    }
    case 'SET_CVC': {
      let updatedCVC = action.payload;
      if (updatedCVC.length > 3) return state;
      if (action.payload.length === 0) updatedCVC = '000';

      return Object.assign({}, state, { cardCVC: updatedCVC });
    }
    case 'RESET': {
      return Object.assign({}, initialState);
    }
  }
};
