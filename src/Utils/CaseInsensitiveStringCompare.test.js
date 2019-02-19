import caseInsensitiveStringCompare from './CaseInsensitiveStringCompare';

describe('Util > CaseInsensitiveStringCompare', () => {
  it('returns false if first value not string', () => {
    expect(caseInsensitiveStringCompare(5, '5')).toBeFalsy();
    expect(caseInsensitiveStringCompare(undefined, '5')).toBeFalsy();
  });

  it('returns false if second value not string', () => {
    expect(caseInsensitiveStringCompare('5', 5)).toBeFalsy();
    expect(caseInsensitiveStringCompare('5', undefined)).toBeFalsy();
  });

  it('does a case insensitive compare', () => {
    expect(caseInsensitiveStringCompare('A', 'a')).toBeTruthy();
  });
});
