import { LOADER_OFF, LOADER_ON } from './constants';

const initialState = {
  isLoading: {
    weatherLoading: true,
    currencyLoading: true,
  },
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_ON:
      if (action.loaderType === 'weather') {
        return { ...state, isLoading: { ...state.isLoading, weatherLoading: true } };
      }
      if (action.loaderType === 'currency') {
        return { ...state, isLoading: { ...state.isLoading, currencyLoading: true } };
      }
    case LOADER_OFF:
      if (action.loaderType === 'weather') {
        return { ...state, isLoading: { ...state.isLoading, weatherLoading: false } };
      }
      if (action.loaderType === 'currency') {
        return { ...state, isLoading: { ...state.isLoading, currencyLoading: false } };
      }
    default:
      return state;
  }
};

export default loaderReducer;
