import {
  createStore, combineReducers, Store, Reducer,
} from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';

import { persistStore, persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';

import Reducers from './reducers';

const rootReducer: Reducer<any, any> = combineReducers({
  ...Reducers,
});

const persistConfig = {
  key: 'weather-web',
  storage,
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);
export const store: Store = createStore(
  pReducer,
  // eslint-disable-next-line no-underscore-dangle
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);
