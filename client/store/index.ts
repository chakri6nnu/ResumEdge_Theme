import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import undoable from 'redux-undo';

import calendarReducer from '@/store/apps/calendar';
import chatReducer from '@/store/apps/chat';
import emailReducer from '@/store/apps/email';
import invoiceReducer from '@/store/apps/invoice';
import permissionsReducer from '@/store/apps/permissions';
import userReducer from '@/store/apps/user';
import authReducer from '@/store/auth/authSlice';
import buildReducer from '@/store/build/buildSlice';
import modalReducer from '@/store/modal/modalSlice';
import resumeReducer from '@/store/resume/resumeSlice';

import syncSaga from './sagas/sync';
import storage from './storage';

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  chat: chatReducer,
  user: userReducer,
  email: emailReducer,
  invoice: invoiceReducer,
  calendar: calendarReducer,
  permissions: permissionsReducer,
  auth: authReducer,
  modal: modalReducer,
  build: buildReducer,
  resume: undoable(resumeReducer),
});

const persistedReducers = persistReducer({ key: 'root', storage, whitelist: ['auth', 'build'] }, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }).concat(sagaMiddleware);
  },
});

sagaMiddleware.run(() => syncSaga(store.dispatch));

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
