import getItemSpacingClasses from './GetItemSpacingClasses';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > GetItemSpacingClasses', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Single Direction, Single Spacing', () => {
    it('returns correct class if passed a single number and direction is row', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getItemSpacingClasses('row', 1)).toMatchObject({
        classes: ['mr-1'],
        styles: {},
      });
    });
    it('returns correct class if passed a single number and direction is row in an array', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getItemSpacingClasses(['row'], 1)).toMatchObject({
        classes: ['mr-1'],
        styles: {},
      });
    });
    it('returns correct class if passed a single number and direction is column', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getItemSpacingClasses('column', 1)).toMatchObject({
        classes: ['mb-1'],
        styles: {},
      });
    });
    it('returns correct classes if passed an array and direction is row', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses('row', [1, 2, 3, 4]),
      ).toMatchObject({
        classes: ['mr-1', 'mr-2-ns', 'mr-3-m', 'mr-4-l'],
        styles: {},
      });
    });
    it('returns correct classes if passed an array and direction is column', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses('column', [8, 6, 4, 2]),
      ).toMatchObject({
        classes: ['mb-8', 'mb-6-ns', 'mb-4-m', 'mb-2-l'],
        styles: {},
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Array Direction, Single Spacing', () => {
    it('returns correct classes if one direction', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getItemSpacingClasses(['row'], 1)).toMatchObject({
        classes: ['mr-1'],
        styles: {},
      });
    });
    it('returns correct classes if 4 directions', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses(['row', 'column', 'row', 'column'], 1),
      ).toMatchObject({
        classes: [
          'mr-1',
          'mb-1-ns',
          'mr-0-ns',
          'mr-1-m',
          'mb-0-m',
          'mb-1-l',
          'mr-0-l',
        ],
        styles: {},
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('Array Direction, Array Spacing', () => {
    it('returns correct classes if 2 directions and 2 spacings', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(getItemSpacingClasses(['row'], [7])).toMatchObject({
        classes: ['mr-7'],
        styles: {},
      });
    });
    it('returns correct classes if 2 directions and 2 spacings', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses(['row', 'column'], [3, 7]),
      ).toMatchObject({
        classes: ['mr-3', 'mb-7-ns', 'mr-0-ns'],
        styles: {},
      });
    });
    it('returns correct classes if 4 directions and 4 spacings', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses(
          ['row', 'column', 'row', 'column'],
          [3, 7, 4, 5],
        ),
      ).toMatchObject({
        classes: [
          'mr-3',
          'mb-7-ns',
          'mr-0-ns',
          'mr-4-m',
          'mb-0-m',
          'mb-5-l',
          'mr-0-l',
        ],
        styles: {},
      });
    });
    it('returns correct classes if 2 directions and 3 spacings', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses(['row', 'column'], [3, 7, 4]),
      ).toMatchObject({
        classes: ['mr-3', 'mb-7-ns', 'mr-0-ns', 'mb-4-m', 'mr-0-m'],
        styles: {},
      });
    });
    it('returns correct classes if 2 directions and 4 spacings', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        getItemSpacingClasses(['row', 'column'], [3, 7, 4, 1]),
      ).toMatchObject({
        classes: [
          'mr-3',
          'mb-7-ns',
          'mr-0-ns',
          'mb-4-m',
          'mr-0-m',
          'mb-1-l',
          'mr-0-l',
        ],
        styles: {},
      });
    });
  });
});
