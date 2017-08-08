import { createStore, compose, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers/index';
import rootSaga from '../sagas';
import { updateLocation, history } from './location';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  applyMiddleware(
    createLogger(),
    sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f,
  // you can apply you middleware here
);
export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  store.asyncReducers = {};

  // 监听浏览器history变化，绑定到store。取消监听直接调用store.unsubscribeHistory()
  store.unsubscribeHistory = history.listen(updateLocation(store));
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /*eslint-disable*/
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
      /*eslint-disable*/
    });
  }
  return store;
}
