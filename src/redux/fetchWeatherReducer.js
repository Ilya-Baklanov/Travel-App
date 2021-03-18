import { WEATHER_DATA } from './constants';

const initialState = {
  weatherDataRU: {
    language: '-',
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  },
  weatherDataEN: {
    language: '-',
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  },
  weatherDataFR: {
    language: '-',
    temperature: '-',
    icon: '-',
    description: '-',
    feelsLike: '-',
    wind: '-',
    humidity: '-',
  },
};

const fetchWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_DATA:
      if (action.payload.language === 'ru-RU') {
        state = { ...state, weatherDataRU: action.payload }
      }
      if (action.payload.language === 'en-US') {
        state = { ...state, weatherDataEN: action.payload }
      }
      if (action.payload.language === 'fr-FR') {
        state = { ...state, weatherDataFR: action.payload }
      }
      return state;
    default:
      return state;
  }
};

export default fetchWeatherReducer;
