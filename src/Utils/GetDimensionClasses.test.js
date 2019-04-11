import getDimensionClasses from './GetDimensionClasses';

describe('Util > GetDimensionClasses', () => {
  it('returns correct class if passed a prefix and string', () => {
    expect(getDimensionClasses('width', '5')).toBe('w5');
  });

  it('returns correct class if passed a width and number', () => {
    expect(getDimensionClasses('width', 5)).toBe('w5');
  });

  it('returns correct class if passed a width and number greater than 9', () => {
    expect(getDimensionClasses('width', 20)).toBe('w-20');
  });

  it('returns correct class if passed a margin and number ', () => {
    expect(getDimensionClasses('m', 5)).toBe('m-5');
  });

  it('returns correct array of classes if passed a prefix and array', () => {
    expect(getDimensionClasses('width', [5, 6, 7, 8])).toMatchObject(['w5', 'w6-ns', 'w7-m', 'w8-l']);
  });

  it('returns undefined if not passed an array, string, or number', () => {
    expect(getDimensionClasses('width', {})).toBe(undefined);
  });

  it('returns undefined if passed an empty array', () => {
    expect(getDimensionClasses('width', [])).toBe(undefined);
  });
});
