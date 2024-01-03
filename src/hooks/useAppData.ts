import React from 'react';
import { AppContext } from '../contexts/contexts';

export const useAppData = () => {
  const appData = React.useContext(AppContext);
  if (!appData) {
    throw new Error('useStores must be used within a StoreProvider.');
  }
  return appData;
};
