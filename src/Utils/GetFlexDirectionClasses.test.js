import getFlexDirectionClasses from './GetFlexDirectionClasses';

describe('Util > GetFlexDirectionClasses', () => {
  it('returns correct class if passed row', () => {
    expect(getFlexDirectionClasses('row')).toBe('flex-row');
  });

  it('returns correct array of responsive classes when passed an array', () => {
    expect(getFlexDirectionClasses(['row', 'column', 'row', 'column'])).toMatchObject(['flex-row', 'flex-column-ns', 'flex-row-m', 'flex-column-l']);
  });

  it('returns undefined if direction is a string that is not row or column', () => {
    expect(getFlexDirectionClasses('blah')).toBe(undefined);
  });
});
