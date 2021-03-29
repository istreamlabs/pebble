import getOverflowClasses from './GetOverflowClasses';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetBorderRadiusClasses', () => {
  it('returns correct class if passed a string of visible', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses('visible')).toBe('overflow-visible');
  });

  it('returns nothing if passed an unknown string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses('unknown')).toBe(undefined);
  });

  it('returns correct classes if passed an object with vertical overflow', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses({ vertical: 'auto' })).toBe(
      'overflow-y-auto',
    );
  });

  it('returns correct class if passed an object with horizontal overflow', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses({ horizontal: 'auto' })).toBe(
      'overflow-x-auto',
    );
  });

  it('returns correct class if passed an object with horizontal AND vertical overflow', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getOverflowClasses({ horizontal: 'auto', vertical: 'hidden' }),
    ).toBe('overflow-x-auto overflow-y-hidden');
  });

  it('returns correct array of responsive classes when passed an array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getOverflowClasses(['auto', 'hidden', 'visible', 'scroll']),
    ).toMatchObject([
      'overflow-auto',
      'overflow-hidden-ns',
      'overflow-visible-m',
      'overflow-scroll-l',
    ]);
  });

  it('returns correct array of responsive classes when passed an array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses(['visible', 'scroll'])).toMatchObject([
      'overflow-visible',
      'overflow-scroll-ns',
    ]);
  });

  it('returns correct array of vertical responsive classes when passed an array of objects', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getOverflowClasses([
        { vertical: 'visible' },
        { vertical: 'scroll' },
      ]),
    ).toMatchObject(['overflow-y-visible', 'overflow-y-scroll-ns']);
  });

  it('returns correct array of horizontal responsive classes when passed an array of objects', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getOverflowClasses([
        { horizontal: 'visible' },
        { horizontal: 'scroll' },
      ]),
    ).toMatchObject(['overflow-x-visible', 'overflow-x-scroll-ns']);
  });

  it('returns correct array of horizontal AND vertical responsive classes when passed an array of objects', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getOverflowClasses([
        { horizontal: 'visible', vertical: 'auto' },
        { horizontal: 'scroll', vertical: 'hidden' },
      ]),
    ).toMatchObject([
      'overflow-x-visible overflow-y-auto',
      'overflow-x-scroll-ns overflow-y-hidden-ns',
    ]);
  });

  it('returns undefined if passed an empty array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses([])).toBe(undefined);
  });

  it('returns undefined if passed a number', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getOverflowClasses(7)).toBe(undefined);
  });
});
