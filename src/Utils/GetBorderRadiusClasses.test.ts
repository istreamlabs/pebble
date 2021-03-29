import getBorderRadiusClasses from './GetBorderRadiusClasses';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetBorderRadiusClasses', () => {
  it('returns correct class if passed a number', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses(1)).toBe('br1');
  });

  it('returns correct class if passed a string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses('1')).toBe('br1');
  });

  it('returns correct array of responsive classes when passed an array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses([0, 1, 2, 'pill'])).toMatchObject([
      'br0',
      'br1-ns',
      'br2-m',
      'br-pill-l',
    ]);
  });

  it('returns undefined if not passed an array, string, or number', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses({})).toBe(undefined);
  });

  it('returns undefined if passed an empty array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses([])).toBe(undefined);
  });

  it('returns undefined if passed an empty array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getBorderRadiusClasses(7)).toBe('br7');
  });
});
