import React from 'react';

import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { ToastProvider } from './toast';
import { persistor, store } from '../store';

const AppProvider: React.FC = ({ children }) => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ToastProvider>
        {children}
      </ToastProvider>
    </PersistGate>
  </ReduxProvider>
);

export default AppProvider;
