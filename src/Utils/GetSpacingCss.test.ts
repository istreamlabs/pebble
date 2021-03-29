import getSpacingCss from './GetSpacingCss';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetSpacingCss', () => {
  it('returns correct class if passed a prefix and string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', '5')).toMatchObject({
      styles: {},
      classes: ['p-5'],
    });
  });

  it('returns correct class if passed a margin and number ', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('m', 5)).toMatchObject({
      styles: {},
      classes: ['m-5'],
    });
  });

  it('returns correct array of classes if passed an array of strings', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', ['5', '6', '7', '8'])).toMatchObject({
      styles: {},
      classes: ['p-5', 'p-6-ns', 'p-7-m', 'p-8-l'],
    });
  });

  it('returns correct array of classes if passed an array of numbers', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', [5, 6, 7, 8])).toMatchObject({
      styles: {},
      classes: ['p-5', 'p-6-ns', 'p-7-m', 'p-8-l'],
    });
  });

  it('returns correct array of classes if passed an array of strings', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', [5, 6, 7, 8])).toMatchObject({
      styles: {},
      classes: ['p-5', 'p-6-ns', 'p-7-m', 'p-8-l'],
    });
  });

  it('returns correct array of classes if passed an array of css strings with 2 values', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getSpacingCss('p', ['5 1', '6 1', '7 1', '8 1']),
    ).toMatchObject({
      styles: {},
      classes: [
        'pt-5',
        'pr-1',
        'pb-5',
        'pl-1',
        'pt-6-ns',
        'pr-1-ns',
        'pb-6-ns',
        'pl-1-ns',
        'pt-7-m',
        'pr-1-m',
        'pb-7-m',
        'pl-1-m',
        'pt-8-l',
        'pr-1-l',
        'pb-8-l',
        'pl-1-l',
      ],
    });
  });

  it('returns correct array of classes if passed an array of css strings with 3 values', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getSpacingCss('p', ['5 1 2', '6 1 2', '7 1 2', '8 1 2']),
    ).toMatchObject({
      styles: {},
      classes: [
        'pt-5',
        'pr-1',
        'pb-2',
        'pl-1',
        'pt-6-ns',
        'pr-1-ns',
        'pb-2-ns',
        'pl-1-ns',
        'pt-7-m',
        'pr-1-m',
        'pb-2-m',
        'pl-1-m',
        'pt-8-l',
        'pr-1-l',
        'pb-2-l',
        'pl-1-l',
      ],
    });
  });

  it('returns correct array of classes if passed an array of css strings with 4 values', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getSpacingCss('p', [
        '5 1 2 3',
        '6 1 2 3',
        '7 1 2 3',
        '8 1 2 3',
      ]),
    ).toMatchObject({
      styles: {},
      classes: [
        'pt-5',
        'pr-1',
        'pb-2',
        'pl-3',
        'pt-6-ns',
        'pr-1-ns',
        'pb-2-ns',
        'pl-3-ns',
        'pt-7-m',
        'pr-1-m',
        'pb-2-m',
        'pl-3-m',
        'pt-8-l',
        'pr-1-l',
        'pb-2-l',
        'pl-3-l',
      ],
    });
  });

  it('returns undefined if not passed an array, string, or number', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', {})).toMatchObject({
      styles: {},
      classes: [],
    });
  });

  it('returns undefined if passed an empty array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', [])).toMatchObject({
      styles: {},
      classes: [],
    });
  });

  it('returns correct style if passed css unit', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getSpacingCss('p', '5px 10px')).toMatchObject({
      styles: '5px 10px',
      classes: [],
    });
  });
});
