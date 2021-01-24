export default {
  number: (value, { precision }) => {
    if (typeof value === 'number') {
      return Intl.NumberFormat(navigator.language, {
        minimumFractionDigits: precision || null,
        maximumFractionDigits: precision || null,
      }).format(value);
    }
    return value;
  },
  currency: (currencyCode = 'USD') => {
    return value => {
      const currencyFormat = new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: currencyCode,
      });
      return currencyFormat.format(value);
    };
  },
  percentage: (value, { precision }) => {
    if (typeof value === 'number') {
      return Intl.NumberFormat(undefined, {
        style: 'percent',
        minimumFractionDigits: precision || null,
      }).format(value);
    }
    return value;
  },
};
