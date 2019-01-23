import caseInsensativeStringCompare from './CaseInsensativeStringCompare';

describe('Util > CaseInsensativeStringCompare', () => {
  it('returns false if first value not string', () => {
    expect(caseInsensativeStringCompare(5, '5')).toBeFalsy();
    expect(caseInsensativeStringCompare(undefined, '5')).toBeFalsy();
  });

  it('returns false if second value not string', () => {
    expect(caseInsensativeStringCompare('5', 5)).toBeFalsy();
    expect(caseInsensativeStringCompare('5', undefined)).toBeFalsy();
  });

  it('does a case insensative compare', () => {
    expect(caseInsensativeStringCompare('A', 'a')).toBeTruthy();
  });
});
