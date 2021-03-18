import { SWITCH_COUNTRY } from './constants';

const initialState = {
  country: 'AUS',
};

const switchCountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_COUNTRY:
      return { ...state, country: action.payload };
    default:
      return state;
  }
};

export default switchCountryReducer;
