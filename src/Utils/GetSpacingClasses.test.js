import getSpacingClasses from './GetSpacingClasses';

describe('Util > GetSpacingClasses', () => {
  it('returns correct class if passed a prefix and string', () => {
    expect(getSpacingClasses('p', '5')).toBe('p-5');
  });

  it('returns correct class if passed a prefix and number', () => {
    expect(getSpacingClasses('p', 5)).toBe('p-5');
  });

  it('returns correct array of classes if passed a prefix and array', () => {
    expect(getSpacingClasses('p', [5, 6, 7, 8])).toMatchObject(['p-5', 'p-6-ns', 'p-7-m', 'p-8-l']);
  });

  it('returns undefined if not passed an array, string, or number', () => {
    expect(getSpacingClasses('p', {})).toBe(undefined);
  });
});
