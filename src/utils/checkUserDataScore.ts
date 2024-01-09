import { UserData } from '../types';

export const checkUserDataScore = (
  userData: UserData[],
  sliderValue: number,
  newValue: number,
): boolean => {
  if (userData.length < sliderValue) {
    return true;
  }

  const filteredArray = userData
    .sort((a, b) => a.score - b.score)
    .reverse()
    .slice(0, sliderValue);

  return filteredArray.some((data) => newValue > data.score);
};
