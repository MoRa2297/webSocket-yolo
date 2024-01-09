import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { ContextData, UserData } from '../types';
import { checkUserDataScore } from '../utils/checkUserDataScore';

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

  const updateUserData = (newUserData: UserData) => {
    const isUserDataUpdateable = checkUserDataScore(
      userData,
      sliderValue,
      newUserData.score,
    );
    if (isUserDataUpdateable) {
      setLastUpdatedUserID(newUserData.userId);
      setUserData((prevArray) =>
        [...prevArray, newUserData]
          .sort((a, b) => a.score - b.score)
          .reverse()
          .slice(0, sliderValue),
      );
    }
  };

  const deleteUserData = (userId: string) => {
    setUserData((prevArray) =>
      prevArray.filter((item) => item.userId !== userId),
    );
  };

  const sliceUserData = () => {
    setUserData((prevArray) =>
      [...prevArray]
        .sort((a, b) => a.score - b.score)
        .reverse()
        .slice(0, sliderValue),
    );
  };

  useEffect(() => {
    sliceUserData();
  }, [sliderValue]);

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
