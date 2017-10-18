/* eslint func-names: "off" */
import { takeEvery, select, call, put } from 'redux-saga/effects';
import {
  GET_INITIAL_CONVERSION,
  SWAP_CURRENCY,
  SET_BASE_CURRENCY,
  CONVERSION_ERROR,
  CONVERSION_RESULT,
} from '../actions/currencies';

const getLatestRate = currency => fetch(`http://api.fixer.io/latest?base=${currency}`);

const fetchLatestConversionRates = function* (action) {
  let { currency } = action;
  if (currency === undefined) {
    currency = yield select(state => state.currencies.baseCurrency);
  }

  try {
    const response = yield call(getLatestRate, currency);
    let result;
    try {
      result = yield response.json();
    } catch (e) {
      result = {
        error: 'There was a problem getting the latest currency data. Please try again.',
      };
    }

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (e) {
    yield put({ type: CONVERSION_ERROR, error: e.message });
  }
};

const rootSaga = function* () {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRates);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRates);
  yield takeEvery(SET_BASE_CURRENCY, fetchLatestConversionRates);
};

export default rootSaga;
