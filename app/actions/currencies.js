export const GET_INITIAL_CONVERSION = 'GET_INITIAL_CONVERSION';
export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';
export const SET_BASE_CURRENCY = 'SET_BASE_CURRENCY';
export const SET_QUOTE_CURRENCY = 'SET_QUOTE_CURRENCY';
export const CONVERSION_RESULT = 'CONVERSION_RESULT';
export const CONVERSION_ERROR = 'CONVERSION_ERROR';

export const setBaseCurrency = currency => ({
  type: SET_BASE_CURRENCY,
  currency,
});

export const setQuoteCurrency = currency => ({
  type: SET_QUOTE_CURRENCY,
  currency,
});

export const swapCurrencies = () => ({
  type: SWAP_CURRENCY,
});

export const changeCurrencyAmount = amount => ({
  type: CHANGE_CURRENCY_AMOUNT,
  amount: parseFloat(amount),
});

export const getInitialConversion = () => ({
  type: GET_INITIAL_CONVERSION,
});
