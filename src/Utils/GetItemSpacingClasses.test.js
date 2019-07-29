import getItemSpacingClasses from './GetItemSpacingClasses';

describe('Util > GetItemSpacingClasses', () => {
  describe('Single Direction, Single Spacing', () => {
    it('returns correct class if passed a single number and direction is row', () => {
      expect(getItemSpacingClasses('row', 1)).toMatchObject({
        classes: ['mr-1'],
        styles: null,
      });
    });
    it('returns correct class if passed a single number and direction is column', () => {
      expect(getItemSpacingClasses('column', 1)).toMatchObject({
        classes: ['mb-1'],
        styles: null,
      });
    });
    it('returns correct classes if passed an array and direction is row', () => {
      expect(
        getItemSpacingClasses('row', [1, 2, 3, 4]),
      ).toMatchObject({
        classes: ['mr-1', 'mr-2-ns', 'mr-3-m', 'mr-4-l'],
        styles: null,
      });
    });
    it('returns correct classes if passed an array and direction is column', () => {
      expect(
        getItemSpacingClasses('column', [8, 6, 4, 2]),
      ).toMatchObject({
        classes: ['mb-8', 'mb-6-ns', 'mb-4-m', 'mb-2-l'],
        styles: null,
      });
    });
  });

  describe('Array Direction, Single Spacing', () => {
    it('returns correct classes if one direction', () => {
      expect(getItemSpacingClasses(['row'], 1)).toMatchObject({
        classes: ['mr-1'],
        styles: null,
      });
    });
    it('returns correct classes if 4 directions', () => {
      expect(
        getItemSpacingClasses(['row', 'column', 'row', 'column'], 1),
      ).toMatchObject({
        classes: ['mr-1', 'mb-1-ns', 'mr-1-m', 'mb-1-l'],
        styles: null,
      });
    });
  });

  describe('Array Direction, Array Spacing', () => {
    it('returns correct classes if 2 directions and 2 spacings', () => {
      expect(getItemSpacingClasses(['row'], [7])).toMatchObject({
        classes: ['mr-7'],
        styles: null,
      });
    });
    it('returns correct classes if 2 directions and 2 spacings', () => {
      expect(
        getItemSpacingClasses(['row', 'column'], [3, 7]),
      ).toMatchObject({
        classes: ['mr-3', 'mb-7-ns'],
        styles: null,
      });
    });
    it('returns correct classes if 4 directions and 4 spacings', () => {
      expect(
        getItemSpacingClasses(
          ['row', 'column', 'row', 'column'],
          [3, 7, 4, 5],
        ),
      ).toMatchObject({
        classes: ['mr-3', 'mb-7-ns', 'mr-4-m', 'mb-5-l'],
        styles: null,
      });
    });
  });
});
