import { numberWithCommas } from './functions';

describe('isBoolean', () => {
  it('should return the proper separation of numbers in a string', () => {
    expect(numberWithCommas(1000)).toBe('1,000');
  });

  it('should return the proper separation of string numbers as a new string', () => {
    expect(numberWithCommas('1000')).toBe('1,000');
  });
});
