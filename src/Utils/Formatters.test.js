import Formatters from './Formatters';

describe('Util > Formatters', () => {
  describe('number', () => {
    it('returns correct value when precision is 0', () => {
      expect(Formatters.number(5, { precision: 0 })).toBe('5');
    });
    it('returns value with commas separating thousands', () => {
      expect(Formatters.number(1234, { precision: 0 })).toBe('1,234');
    });
    it('returns value with commas separating thousands and correct precision', () => {
      expect(Formatters.number(1234.123456, { precision: 3 })).toBe(
        '1,234.123',
      );
    });
    it('returns value with commas separating thousands and correct precision', () => {
      expect(Formatters.number(1234.19, { precision: 1 })).toBe(
        '1,234.2',
      );
    });
  });
});
