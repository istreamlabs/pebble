import getDimensionCss, { getPrefix } from './GetDimensionCss';

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

describe('Util > GetDimensionCss > getPrefix', () => {
  it('returns correct width prefix when value is 9 or less', () => {
    expect(getPrefix('width', 1)).toEqual('w');
    expect(getPrefix('width', 2)).toEqual('w');
    expect(getPrefix('width', 3)).toEqual('w');
    expect(getPrefix('width', 4)).toEqual('w');
    expect(getPrefix('width', 5)).toEqual('w');
    expect(getPrefix('width', 6)).toEqual('w');
    expect(getPrefix('width', 7)).toEqual('w');
    expect(getPrefix('width', 7)).toEqual('w');
    expect(getPrefix('width', 9)).toEqual('w');
    expect(getPrefix('width', 10)).toEqual('w-');
  });
  it('returns correct height prefix when value is 9 or less', () => {
    expect(getPrefix('height', 1)).toEqual('h');
    expect(getPrefix('height', 2)).toEqual('h');
    expect(getPrefix('height', 3)).toEqual('h');
    expect(getPrefix('height', 4)).toEqual('h');
    expect(getPrefix('height', 5)).toEqual('h');
    expect(getPrefix('height', 6)).toEqual('h');
    expect(getPrefix('height', 7)).toEqual('h');
    expect(getPrefix('height', 7)).toEqual('h');
    expect(getPrefix('height', 9)).toEqual('h');
    expect(getPrefix('height', 10)).toEqual('h-');
  });

  it('returns correct maxWidth prefix when value is 9 or less', () => {
    expect(getPrefix('maxWidth', 1)).toEqual('mw');
    expect(getPrefix('maxWidth', 2)).toEqual('mw');
    expect(getPrefix('maxWidth', 3)).toEqual('mw');
    expect(getPrefix('maxWidth', 4)).toEqual('mw');
    expect(getPrefix('maxWidth', 5)).toEqual('mw');
    expect(getPrefix('maxWidth', 6)).toEqual('mw');
    expect(getPrefix('maxWidth', 7)).toEqual('mw');
    expect(getPrefix('maxWidth', 7)).toEqual('mw');
    expect(getPrefix('maxWidth', 9)).toEqual('mw');
    expect(getPrefix('maxWidth', 10)).toEqual('mw-');
    expect(getPrefix('maxWidth', 'none')).toEqual('mw-');
  });
});
