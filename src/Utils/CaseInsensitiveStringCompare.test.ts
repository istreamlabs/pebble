import caseInsensitiveStringCompare from './CaseInsensitiveStringCompare';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > CaseInsensitiveStringCompare', () => {
  it('returns false if first value not string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(caseInsensitiveStringCompare(5, '5')).toBeFalsy();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(caseInsensitiveStringCompare(undefined, '5')).toBeFalsy();
  });

  it('returns false if second value not string', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(caseInsensitiveStringCompare('5', 5)).toBeFalsy();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(caseInsensitiveStringCompare('5', undefined)).toBeFalsy();
  });

  it('does a case insensitive compare', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(caseInsensitiveStringCompare('A', 'a')).toBeTruthy();
  });
});
