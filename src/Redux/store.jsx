// src/Redux/store.jsx

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { thunk } from 'redux-thunk'; 
import storage from 'redux-persist-indexeddb-storage';

// Import reducers - authReducer import removed
import userReducer from './reducers/userReducer';
import generalReducer from './reducers/generalReducer';

const rootReducer = combineReducers({
  // authReducer removed
  userReducer: userReducer,
  generalReducer: generalReducer,
});

const persistConfig = {
  key: 'root',
  storage: storage('myDB'),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
