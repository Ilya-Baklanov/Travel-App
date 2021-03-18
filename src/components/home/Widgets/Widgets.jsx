import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { labels, codes } from '../../../assets/atlases/countriesAtlas';

import styles from '@/components/home/style.scss';

import {
  weatherRequestAction,
  dispatchWeatherPropsToSaga,
  currencyRequestAction,
  dispatchCurrencyPropsToSaga,
} from '../../../redux/actions';
import Loader from '../../Loader/Loader';

import WidgetCurrency from './WidgetCurrency/WidgetCurrency';
import WidgetTime from './WidgetTime/WidgetTime';
import WidgetWeather from './WidgetWeather/WidgetWeather';

const Widgets = (props) => {
  const weatherPropsRU = {
    city: labels['ru-RU'][props.country].capital,
    language: 'ru-RU',
  };
  const weatherPropsEN = {
    city: labels['en-US'][props.country].capital,
    language: 'en-US',
  };
  const weatherPropsFR = {
    city: labels['fr-FR'][props.country].capital,
    language: 'fr-FR',
  };

  const currencyProps = {
    currency: codes[props.country].currency,
    language: props.language,
  };

  const fetchWidgetsData = () => {
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsRU);
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsEN);
    props.weatherRequestAction();
    props.dispatchWeatherPropsToSaga(weatherPropsFR);

    props.currencyRequestAction();
    props.dispatchCurrencyPropsToSaga(currencyProps);
  };

  useEffect(() => {
    fetchWidgetsData();
  }, []);

  return (
    <div className={styles['widgets-container']}>
      <WidgetTime zone={codes[props.country].zone} lang={props.language} />

      {props.currencyLoading ? (
        <Loader />
      ) : (
        <WidgetCurrency currency={currencyProps.currency} lang={props.language} />
      )}

      {props.weatherLoading ? (
        <Loader />
      ) : (
        <WidgetWeather city={labels[props.language][props.country].capital} lang={props.language} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  weatherLoading: state.loaderReducer.isLoading.weatherLoading,
  currencyLoading: state.loaderReducer.isLoading.currencyLoading,
  language: state.switchLanguageReducer.language,
  country: state.switchCountryReducer.country,
});

const mapDispatchToProps = {
  weatherRequestAction,
  dispatchWeatherPropsToSaga,
  currencyRequestAction,
  dispatchCurrencyPropsToSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(Widgets);
