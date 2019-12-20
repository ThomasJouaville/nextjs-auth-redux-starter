import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

/**
 * Redux dev tools setup
 * @link https://github.com/zalmoxisus/redux-devtools-extension
 */
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const initStore = (initialState = {}) => {
  return createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk)),
  );
};
