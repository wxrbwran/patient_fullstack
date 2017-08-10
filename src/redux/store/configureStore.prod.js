import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';


const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  applyMiddleware(
    sagaMiddleware
  ),
);

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    enhancer,
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
