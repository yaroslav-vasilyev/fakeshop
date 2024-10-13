import AsyncStorage from '@react-native-async-storage/async-storage';
import {Store, applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import productReducer from './productsReducer';
import {ProductsActions, ProductsState} from './types';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, productReducer);

export const store: Store<ProductsState, ProductsActions> = createStore(
  persistedReducer,
  applyMiddleware(thunk),
);

export const persistor = persistStore(store as any);
