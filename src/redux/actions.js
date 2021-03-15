import {
  WEATHER_PROPS,
  CURRENCY_PROPS,
  LOADER_OFF,
  LOADER_ON,
  LOGIN,
  QUIT,
  REGISTRATION_SUCCESS,
  WEATHER_REQUEST,
  WEATHER_DATA,
  RATE,
  CURRENCY_REQUEST,
} from './constants';

const authAction = () => ({
  type: LOGIN,
});

const quitAction = () => ({
  type: QUIT,
});

const weatherRequestAction = () => ({
  type: WEATHER_REQUEST,
});

const currencyRequestAction = () => ({
  type: CURRENCY_REQUEST,
});

const dispatchWeatherPropsToSaga = (weatherProps) => ({
  type: WEATHER_PROPS,
  payload: weatherProps,
});

const dispatchCurrencyPropsToSaga = (currencyProps) => ({
  type: CURRENCY_PROPS,
  payload: currencyProps,
});

const fetchWeatherResponse = (weatherData) => ({
  type: WEATHER_DATA,
  payload: weatherData,
});

const fetchCurrencyResponse = (rate) => ({
  type: RATE,
  payload: rate,
});

const showLoaderAction = (loaderType) => ({
  type: LOADER_ON,
  loaderType,
});

const hideLoaderAction = (loaderType) => ({
  type: LOADER_OFF,
  loaderType,
});

const registrationSuccess = () => ({
  type: REGISTRATION_SUCCESS,
});

export {
  authAction,
  quitAction,
  weatherRequestAction,
  currencyRequestAction,
  dispatchWeatherPropsToSaga,
  dispatchCurrencyPropsToSaga,
  fetchWeatherResponse,
  fetchCurrencyResponse,
  showLoaderAction,
  hideLoaderAction,
  registrationSuccess,
};
