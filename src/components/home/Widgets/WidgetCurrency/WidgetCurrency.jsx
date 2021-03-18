import React from 'react';
import { connect } from 'react-redux';
import {labels} from './constants';

import styles from './widgetCurrency.scss';

function WidgetCurrency(props) {
  const { exchangeRate } = props;

  return (
    <div className={styles['widget-currency']}>
      <p className={styles['header']}>{labels[props.lang].currency}</p>
      <p className={styles['currency-code']}>{props.currency}</p>
      <p className={styles['currency-name']}>{labels[props.lang][props.currency]}</p>
      <p className={styles['info']}>1 USD: {exchangeRate.USD}</p>
      <p className={styles['info']}>1 EUR: {exchangeRate.EUR}</p>
      <p className={styles['info']}>100 RUB: {exchangeRate.RUB}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  exchangeRate: state.fetchCurrencyReducer.rate,
});

export default connect(mapStateToProps, null)(WidgetCurrency);
