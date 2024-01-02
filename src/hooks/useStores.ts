import React from 'react';
import { AppContext } from '../contexts/contexts';

export const useAppData = () => {
  const appData = React.useContext(AppContext);
  if (!appData) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStores must be used within a StoreProvider.');
  }
  return appData;
};
