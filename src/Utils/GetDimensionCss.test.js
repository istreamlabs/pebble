import getDimensionCss from './GetDimensionCss';

describe('Util > GetDimensionCss', () => {
  it('returns correct class if passed a prefix and string', () => {
    expect(getDimensionCss('width', '5')).toMatchObject({
      styles: null,
      classes: ['w5'],
    });
  });

  it('returns correct class if passed a width and number greater than 9', () => {
    expect(getDimensionCss('width', 20)).toMatchObject({
      styles: null,
      classes: ['w-20'],
    });
  });

  it('returns correct array of classes if passed a prefix and array', () => {
    expect(getDimensionCss('width', [5, 6, 70, 8])).toMatchObject({
      styles: null,
      classes: ['w5', 'w6-ns', 'w-70-m', 'w8-l'],
    });
  });

  it('returns undefined if not passed an array, string, or number', () => {
    expect(getDimensionCss('width', {})).toMatchObject({
      styles: null,
      classes: [],
    });
  });

  it('returns undefined if passed an empty array', () => {
    expect(getDimensionCss('width', [])).toMatchObject({
      styles: null,
      classes: [],
    });
  });
  it('returns correct style if passed css unit', () => {
    expect(getDimensionCss('width', '5px')).toMatchObject({
      styles: '5px',
      classes: [],
    });
  });
});
