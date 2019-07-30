import getDimensionClasses from './GetDimensionClasses';

describe('Util > GetDimensionClasses', () => {
  it('returns correct class if passed a prefix and string', () => {
    expect(getDimensionClasses('width', '5')).toMatchObject({
      styles: null,
      classes: 'w5',
    });
  });

  it('returns correct class if passed a width and number greater than 9', () => {
    expect(getDimensionClasses('width', 20)).toMatchObject({
      styles: null,
      classes: 'w-20',
    });
  });

  it('returns correct class if passed a margin and number ', () => {
    expect(getDimensionClasses('m', 5)).toMatchObject({
      styles: null,
      classes: 'm-5',
    });
  });

  it('returns correct array of classes if passed a prefix and array', () => {
    expect(getDimensionClasses('width', [5, 6, 70, 8])).toMatchObject(
      { styles: null, classes: ['w5', 'w6-ns', 'w-70-m', 'w8-l'] },
    );
  });

  it('returns undefined if not passed an array, string, or number', () => {
    expect(getDimensionClasses('width', {})).toMatchObject({
      styles: null,
      classes: undefined,
    });
  });

  it('returns undefined if passed an empty array', () => {
    expect(getDimensionClasses('width', [])).toMatchObject({
      styles: null,
      classes: undefined,
    });
  });
});
