const CURRENCY_API = 'https://api.exchangeratesapi.io/latest';
// This API uses European Central Bank exchange rates.
// Base currency for exchange is EURO.

const MAX_RATE_LENGTH = 6;

const labels = {
  'en-US': {
    currency: 'Currency',
    USD: 'US Dollar',
    CNY: 'Chinese Yuan',
    AUD: 'Australian Dollar',
    BRL: 'Brazilian Real',
    EUR: 'Euro',
    ZAR: 'South African Rand',
    INR: 'Indian Rupee',
    GBP: 'Pound Sterling',
  },
  'fr-FR': {
    currency: 'Monnaie',
    USD: 'Dollar des États-Unis',
    CNY: 'Yuan chinois',
    AUD: 'Dollar australien',
    BRL: 'Réal brésilien',
    EUR: 'Euro',
    ZAR: 'Rand sud-africain',
    INR: 'Roupie indienne',
    GBP: 'Livre sterling',
  },
  'ru-RU': {
    currency: 'Валюта',
    USD: 'Доллар США',
    CNY: 'Китайский юань',
    AUD: 'Австралийский доллар',
    BRL: 'Бразильский реал',
    EUR: 'Евро',
    ZAR: 'Южноафриканский рэнд',
    INR: 'Индийская рупия',
    GBP: 'Фунт стерлингов',
  },
};

export { CURRENCY_API, MAX_RATE_LENGTH, labels };
