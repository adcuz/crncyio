import {
  SET_BASE_CURRENCY,
  SET_QUOTE_CURRENCY,
  CHANGE_CURRENCY_AMOUNT,
  SWAP_CURRENCY,
  CONVERSION_RESULT,
  CONVERSION_ERROR,
  GET_INITIAL_CONVERSION,
} from '../actions/currencies';

const initialState = {
  baseCurrency: 'GBP',
  quoteCurrency: 'EUR',
  amount: 100,
  conversions: {},
};

const setConversions = (state, action) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {},
  };

  if (state.conversions[action.currency]) {
    conversion = state.conversions[action.currency];
  }

  return { ...state.conversions, [action.currency]: conversion };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: action.currency,
        conversions: setConversions(state, action),
      };

    case SET_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: action.currency,
        conversions: setConversions(state, action),
      };

    case CHANGE_CURRENCY_AMOUNT:
      return { ...state, amount: action.amount || 0 };

    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency,
        conversions: setConversions(state, { currency: state.quoteCurrency }),
      };

    case CONVERSION_RESULT:
      return {
        ...state,
        conversions: {
          ...state.conversions,
          [action.result.base]: {
            isFetching: false,
            rates: action.result.rates,
            date: action.result.date,
          },
        },
      };

    case CONVERSION_ERROR:
      return { ...state, error: action.error };

    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversions(state, { currency: state.baseCurrency }),
      };

    default:
      return state;
  }
};

export default reducer;
