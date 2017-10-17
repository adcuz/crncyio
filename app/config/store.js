import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddelware from 'redux-saga';
import reducers from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddelware();
const middleware = [sagaMiddleware];

if (__DEV__) {
  // middleware.push(logger);
}

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));

sagaMiddleware.run(rootSaga);

export default store;
