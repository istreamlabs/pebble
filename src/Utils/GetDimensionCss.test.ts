import getDimensionCss, { getPrefix } from './GetDimensionCss';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetDimensionCss', () => {
  it('returns correct class if passed a prefix and string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', '5')).toMatchObject({
      styles: null,
      classes: ['w5'],
    });
  });

  it('returns correct class if passed a width and number greater than 9', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', 20)).toMatchObject({
      styles: null,
      classes: ['w-20'],
    });
  });

  it('returns correct array of classes if passed a prefix and array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', [5, 6, 70, 8])).toMatchObject({
      styles: null,
      classes: ['w5', 'w6-ns', 'w-70-m', 'w8-l'],
    });
  });

  it('returns undefined if not passed an array, string, or number', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', {})).toMatchObject({
      styles: null,
      classes: [],
    });
  });

  it('returns undefined if passed an empty array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', [])).toMatchObject({
      styles: null,
      classes: [],
    });
  });
  it('returns correct style if passed css unit', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getDimensionCss('width', '5px')).toMatchObject({
      styles: '5px',
      classes: [],
    });
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetDimensionCss > getPrefix', () => {
  it('returns correct width prefix when value is 9 or less', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 1)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 2)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 3)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 4)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 5)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 6)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 7)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 7)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 9)).toEqual('w');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('width', 10)).toEqual('w-');
  });
  it('returns correct height prefix when value is 9 or less', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 1)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 2)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 3)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 4)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 5)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 6)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 7)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 7)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 9)).toEqual('h');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('height', 10)).toEqual('h-');
  });

  it('returns correct maxWidth prefix when value is 9 or less', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 1)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 2)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 3)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 4)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 5)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 6)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 7)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 7)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 9)).toEqual('mw');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 10)).toEqual('mw-');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getPrefix('maxWidth', 'none')).toEqual('mw-');
  });
});
