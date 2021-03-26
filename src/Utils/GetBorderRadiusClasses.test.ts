import getBorderRadiusClasses from './GetBorderRadiusClasses';

describe('Util > GetBorderRadiusClasses', () => {
  it('returns correct class if passed a number', () => {
    expect(getBorderRadiusClasses(1)).toBe('br1');
  });

  it('returns correct class if passed a string', () => {
    expect(getBorderRadiusClasses('1')).toBe('br1');
  });

  it('returns correct array of responsive classes when passed an array', () => {
    expect(getBorderRadiusClasses([0, 1, 2, 'pill'])).toMatchObject([
      'br0',
      'br1-ns',
      'br2-m',
      'br-pill-l',
    ]);
  });

  it('returns undefined if not passed an array, string, or number', () => {
    expect(getBorderRadiusClasses({})).toBe(undefined);
  });

  it('returns undefined if passed an empty array', () => {
    expect(getBorderRadiusClasses([])).toBe(undefined);
  });

  it('returns undefined if passed an empty array', () => {
    expect(getBorderRadiusClasses(7)).toBe('br7');
  });
});
