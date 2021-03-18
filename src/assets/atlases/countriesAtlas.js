export default [
  {
    id: '1',
    code: 'AUS',
  },
  {
    id: '2',
    code: 'BRA',
  },
  {
    id: '3',
    code: 'CHN',
  },
  {
    id: '4',
    code: 'FRA',
  },
  {
    id: '5',
    code: 'GBR',
  },
  {
    id: '6',
    code: 'IND',
  },
  {
    id: '7',
    code: 'USA',
  },
  {
    id: '8',
    code: 'ZAF',
  },
];

export const labels = {
  'en-US': {
    ZAF: { name: 'South Africa', capital: 'Pretoria' },
    USA: { name: 'United States', capital: 'Washington' },
    CHN: { name: 'China', capital: 'Beijing' },
    AUS: { name: 'Australia', capital: 'Canberra' },
    BRA: { name: 'Brazil', capital: 'Brasilia' },
    FRA: { name: 'France', capital: 'Paris' },
    GBR: { name: 'United Kingdom', capital: 'London' },
    IND: { name: 'India', capital: 'New Delhi' },
  },
  'fr-FR': {
    ZAF: { name: 'Afrique du Sud', capital: 'Pretoria' },
    USA: { name: 'États-Unis', capital: 'Washington' },
    CHN: { name: 'Chine', capital: 'Pékin' },
    AUS: { name: 'Australie', capital: 'Canberra' },
    BRA: { name: 'Brésil', capital: 'Brasilia' },
    FRA: { name: 'France', capital: 'Paris' },
    GBR: { name: 'Royaume-Uni', capital: 'Londres' },
    IND: { name: 'Inde', capital: 'New Delhi' },
  },
  'ru-RU': {
    ZAF: { name: 'ЮАР', capital: 'Претория' },
    USA: { name: 'США', capital: 'Вашингтон' },
    CHN: { name: 'Китай', capital: 'Пекин' },
    AUS: { name: 'Австралия', capital: 'Канберра' },
    BRA: { name: 'Бразилия', capital: 'Бразилиа' },
    FRA: { name: 'Франция', capital: 'Париж' },
    GBR: { name: 'Великобритания', capital: 'Лондон' },
    IND: { name: 'Индия', capital: 'Нью-Дели' },
  },
};

export const codes = {
  ZAF: { currency: 'ZAR', zone: 'Africa/Johannesburg' },
  USA: { currency: 'USD', zone: 'America/New_York' },
  CHN: { currency: 'CNY', zone: 'Asia/Shanghai' },
  AUS: { currency: 'AUD', zone: 'Australia/Sydney' },
  BRA: { currency: 'BRL', zone: 'America/Sao_Paulo' },
  FRA: { currency: 'EUR', zone: 'Europe/Paris' },
  GBR: { currency: 'GBP', zone: 'Europe/London' },
  IND: { currency: 'INR', zone: 'Asia/Kolkata' },
};
