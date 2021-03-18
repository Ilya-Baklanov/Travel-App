import { combineReducers } from 'redux';

import authReducer from './authReducer';
import fetchCurrencyReducer from './fetchCurrencyReducer';
import fetchWeatherReducer from './fetchWeatherReducer';
import loaderReducer from './loaderReducer';
import registrationReducer from './registrationReducer';
import switchLanguageReducer from './switchLanguageReducer';
import switchCountryReducer from './switchCountryReducer';

const rootReducer = combineReducers({
  authReducer,
  loaderReducer,
  registrationReducer,
  fetchWeatherReducer,
  fetchCurrencyReducer,
  switchLanguageReducer,
  switchCountryReducer,
});

export default rootReducer;
