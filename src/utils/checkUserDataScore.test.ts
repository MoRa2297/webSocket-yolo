import { UserData } from '../types';
import { checkUserDataScore } from './checkUserDataScore';

const exampleData: UserData[] = [
  {
    avatar: 'string',
    email: 'string',
    score: 15,
    userId: '1',
    username: 'string',
  },
  {
    avatar: 'string',
    email: 'string',
    score: 27,
    userId: '2',
    username: 'string',
  },
];

describe('Function: checkUserDataScore (Check if the user can be insert into the userData array)', () => {
  test('Insert data with bigger score', () => {
    const sliderValue = 2;
    expect(checkUserDataScore(exampleData, sliderValue, 100)).toBe(true);
  });

  test('Insert data with smaller score', () => {
    const sliderValue = 2;
    expect(checkUserDataScore(exampleData, sliderValue, 1)).toBe(false);
  });

  test('Insert data with array smaller than the limit', () => {
    const sliderValue = 3;
    expect(checkUserDataScore(exampleData, sliderValue, 50)).toBe(true);
  });
});
