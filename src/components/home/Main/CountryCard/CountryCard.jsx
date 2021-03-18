import React from 'react';

import styles from '@/components/home/Main/CountryCard/style.scss';
import { labels } from '../../../../assets/atlases/countriesAtlas';

const localLabels = {
  'en-US': {
    capital: 'Capital',
  },
  'fr-FR': {
    capital: 'Capitale',
  },
  'ru-RU': {
    capital: 'Столица',
  },
};

const CountryCard = ({ onClick, countryCode, language }) => {
  return (
    <div onClick={onClick} className={styles['country-card-wrapper']}>
      <img
        className={styles['country-card-photo']}
        src={`../../../assets/countries/${countryCode}/photo/thumb.jpg`}
        alt={`${countryCode}`}
      />
      <div className={styles['country-name']}>{labels[language][countryCode].name}</div>
      <div className={styles['country-capital']}>
        {localLabels[language].capital}: {labels[language][countryCode].capital}
      </div>
    </div>
  );
};

export default CountryCard;
