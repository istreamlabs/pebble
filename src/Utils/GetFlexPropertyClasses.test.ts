import getFlexPropertyClasses from './GetFlexPropertyClasses';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetFlexDirectionClasses', () => {
  it('returns correct class if passed row', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getFlexPropertyClasses('flex', 'row')).toBe('flex-row');
  });

  it('returns correct class if passed row', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getFlexPropertyClasses('items', 'baseline')).toBe(
      'items-baseline',
    );
  });

  it('returns correct array of responsive classes when passed an array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFlexPropertyClasses('flex', [
        'row',
        'column',
        'row',
        'column',
      ]),
    ).toMatchObject([
      'flex-row',
      'flex-column-ns',
      'flex-row-m',
      'flex-column-l',
    ]);
  });

  it('returns correct array of responsive classes when passed an array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      getFlexPropertyClasses('content', [
        'start',
        'center',
        'end',
        'between',
      ]),
    ).toMatchObject([
      'content-start',
      'content-center-ns',
      'content-end-m',
      'content-between-l',
    ]);
  });
});
