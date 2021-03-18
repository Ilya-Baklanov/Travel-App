import { RATE } from './constants';

const initialState = {
  rate: {
    USD: '-',
    EUR: '-',
    RUB: '-',
  },
};

const fetchCurrencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case RATE:
      return { ...state, rate: action.payload };
    default:
      return state;
  }
};

export default fetchCurrencyReducer;
