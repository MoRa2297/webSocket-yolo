export type UserData = {
  avatar: string;
  email: string;
  score: number;
  userId: string;
  username: string;
};

export interface ContextData {
  sliderValue: number;
  userData: UserData[];
  lastUpdatedUserID: string;
  updateSliderValue: (value: number) => void;
  updateUserData: (value: UserData) => void;
  deleteUserData: (userId: string) => void;
}
