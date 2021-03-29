import parseTextSize from './ParseTextSize';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > ParseTextSize', () => {
  it('returns default size if value is size is less than 1', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(parseTextSize(0)).toBe(5);
  });

  it('returns default size if value is size is greater than 7', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(parseTextSize(8)).toBe(5);
  });

  it('returns size if passed a value from 1 to 7', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(parseTextSize('1')).toBe(1);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(parseTextSize(7)).toBe(7);
  });
});
