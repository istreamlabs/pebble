import getFlexPropertyClasses from './GetFlexPropertyClasses';

describe('Util > GetFlexDirectionClasses', () => {
  it('returns correct class if passed row', () => {
    expect(getFlexPropertyClasses('flex', 'row')).toBe('flex-row');
  });

  it('returns correct class if passed row', () => {
    expect(getFlexPropertyClasses('items', 'baseline')).toBe('items-baseline');
  });

  it('returns correct array of responsive classes when passed an array', () => {
    expect(getFlexPropertyClasses('flex', ['row', 'column', 'row', 'column'])).toMatchObject(['flex-row', 'flex-column-ns', 'flex-row-m', 'flex-column-l']);
  });

  it('returns correct array of responsive classes when passed an array', () => {
    expect(getFlexPropertyClasses('content', ['start', 'center', 'end', 'between'])).toMatchObject(['content-start', 'content-center-ns', 'content-end-m', 'content-between-l']);
  });
});
