import getOverflowClasses from './GetOverflowClasses';

describe('Util > GetBorderRadiusClasses', () => {
  it('returns correct class if passed a string of visible', () => {
    expect(getOverflowClasses('visible')).toBe('overflow-visible');
  });

  it('returns nothing if passed an unknown string', () => {
    expect(getOverflowClasses('unknown')).toBe(undefined);
  });

  it('returns correct classes if passed an object with vertical overflow', () => {
    expect(getOverflowClasses({ vertical: 'auto' })).toBe(
      'overflow-y-auto',
    );
  });

  it('returns correct class if passed an object with horizontal overflow', () => {
    expect(getOverflowClasses({ horizontal: 'auto' })).toBe(
      'overflow-x-auto',
    );
  });

  it('returns correct class if passed an object with horizontal AND vertical overflow', () => {
    expect(
      getOverflowClasses({ horizontal: 'auto', vertical: 'hidden' }),
    ).toBe('overflow-x-auto overflow-y-hidden');
  });

  it('returns correct array of responsive classes when passed an array', () => {
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
    expect(getOverflowClasses(['visible', 'scroll'])).toMatchObject([
      'overflow-visible',
      'overflow-scroll-ns',
    ]);
  });

  it('returns correct array of vertical responsive classes when passed an array of objects', () => {
    expect(
      getOverflowClasses([
        { vertical: 'visible' },
        { vertical: 'scroll' },
      ]),
    ).toMatchObject(['overflow-y-visible', 'overflow-y-scroll-ns']);
  });

  it('returns correct array of horizontal responsive classes when passed an array of objects', () => {
    expect(
      getOverflowClasses([
        { horizontal: 'visible' },
        { horizontal: 'scroll' },
      ]),
    ).toMatchObject(['overflow-x-visible', 'overflow-x-scroll-ns']);
  });

  it('returns correct array of horizontal AND vertical responsive classes when passed an array of objects', () => {
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
    expect(getOverflowClasses([])).toBe(undefined);
  });

  it('returns undefined if passed a number', () => {
    expect(getOverflowClasses(7)).toBe(undefined);
  });
});
