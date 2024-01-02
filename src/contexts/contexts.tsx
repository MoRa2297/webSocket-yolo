import React, { ReactNode, createContext, useState } from 'react';
import { ContextData, UserData } from '../types';

export const AppContext = createContext<ContextData | null>(null);

interface Props {
  children: ReactNode;
}

const AppProvider = ({ children }: Props) => {
  const [sliderValue, setSliderValue] = useState<number>(10);
  const [userData, setUserData] = useState<UserData[]>([]);
  const [lastUpdatedUserID, setLastUpdatedUserID] = useState('');

  const updateSliderValue = (newValue: number) => {
    setSliderValue(newValue);
  };

  const updateUserData = (userData: UserData) => {
    setLastUpdatedUserID(userData.userId);
    setUserData((prevArray) =>
      [...prevArray, userData]
        .sort((a, b) => a.score - b.score)
        .reverse()
        .slice(0, sliderValue),
    );
  };

  const deleteUserData = (userId: string) => {
    setUserData((prevArray) =>
      prevArray.filter((item) => item.userId !== userId),
    );
  };

  return (
    <AppContext.Provider
      value={{
        sliderValue,
        userData,
        lastUpdatedUserID,
        updateSliderValue,
        updateUserData,
        deleteUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
