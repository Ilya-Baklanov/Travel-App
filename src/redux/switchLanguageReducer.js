import { SWITCH_LANGUAGE } from './constants';

const initialState = {
  language: 'ru-RU',
};

const switchLanguageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default switchLanguageReducer;
