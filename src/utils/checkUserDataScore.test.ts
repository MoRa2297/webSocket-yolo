import { UserData } from '../types';
import { checkUserDataScore } from './checkUserDataScore';

describe('find', () => {
  test('Insert data with bigger score', () => {
    let array1: UserData[] = [
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
    let sliderValue = 2;

    expect(checkUserDataScore(array1, sliderValue, 100)).toBe(true);
  });

  test('Insert data with smaller score', () => {
    let array1: UserData[] = [
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
    let sliderValue = 2;

    expect(checkUserDataScore(array1, sliderValue, 1)).toBe(false);
  });

  test('Insert data with array smaller than the limit', () => {
    let array1: UserData[] = [
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
    let sliderValue = 3;

    expect(checkUserDataScore(array1, sliderValue, 1)).toBe(true);
  });
});
