import parseTextSize from './ParseTextSize';

describe('Util > ParseTextSize', () => {
  it('returns default size if value is size is less than 1', () => {
    expect(parseTextSize(0)).toBe(5);
  });

  it('returns default size if value is size is greater than 7', () => {
    expect(parseTextSize(8)).toBe(5);
  });

  it('returns size if passed a value from 1 to 7', () => {
    expect(parseTextSize('1')).toBe(1);
    expect(parseTextSize(7)).toBe(7);
  });
});
