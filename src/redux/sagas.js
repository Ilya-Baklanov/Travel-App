import { takeEvery, put, call, take } from 'redux-saga/effects';

import 'regenerator-runtime/runtime';

import { CURRENCY_API, MAX_RATE_LENGTH } from '../components/home/Widgets/WidgetCurrency/constants';
import OWM_API from '../components/home/Widgets/WidgetWeather/constants';

import {
  fetchWeatherResponse,
  fetchCurrencyResponse,
  showLoaderAction,
  hideLoaderAction,
} from './actions';
import { WEATHER_PROPS, CURRENCY_PROPS, WEATHER_REQUEST, CURRENCY_REQUEST } from './constants';

function* sagaWatcher() {
  yield takeEvery(WEATHER_REQUEST, weatherRequestWorker);
  yield takeEvery(CURRENCY_REQUEST, currencyRequestWorker);
}

function* weatherRequestWorker() {
  yield put(showLoaderAction('weather'));
  const action = yield take(WEATHER_PROPS);
  const payload = yield call(fetchWeather, action.payload);
  yield put(fetchWeatherResponse(payload));
  yield put(hideLoaderAction('weather'));
}

function getNoWeather() {
  return {
    language: '-',
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  };
}

async function fetchWeather(props) {
  //console.log('request for a new weather!');
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      props.city
    )}&exclude=hourly,minutely&units=metric&appid=${OWM_API}&lang=${props.language.substring(0, 2)}`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const owfIcon = `owf-${data.weather[0].id}-${data.weather[0].icon.substr(-1, 1)}`;
      return {
        language: props.language,
        temperature: Math.round(data.main.temp),
        icon: owfIcon,
        description: data.weather[0].description,
        feelsLike: Math.round(data.main.feels_like),
        wind: data.wind.speed,
        humidity: data.main.humidity,
      };
    })
    .catch(() => {
      return getNoWeather();
    });
  return weatherData;
}

function* currencyRequestWorker() {
  yield put(showLoaderAction('currency'));
  const action = yield take(CURRENCY_PROPS);
  const payload = yield call(fetchCurrency, action.payload);
  yield put(fetchCurrencyResponse(payload));
  yield put(hideLoaderAction('currency'));
}

function getNoRate() {
  return {
    USD: '-',
    EUR: '-',
    RUB: '-',
  };
}

async function fetchCurrency(props) {
  const rates = await fetch(CURRENCY_API)
    .then((rates) => {
      return rates.json();
    })
    .then((data) => {
      const EUR = props.currency === 'EUR' ? '1' : data.rates[props.currency];
      const USD = String(Number(EUR) / Number(data.rates['USD'])).slice(0, MAX_RATE_LENGTH);
      const RUB = String((Number(EUR) / Number(data.rates['RUB'])) * 100).slice(0, MAX_RATE_LENGTH);
      return {
        USD,
        EUR,
        RUB,
      };
    })
    .catch(() => {
      return getNoRate();
    });
  return rates;
}

export default sagaWatcher;
