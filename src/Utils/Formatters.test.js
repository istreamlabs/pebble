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
    it('returns original unformatted value when value is a string', () => {
      expect(Formatters.number('5555', { precision: 2 })).toBe(
        '5555',
      );
    });
  });

  describe('currency', () => {
    it('returns correct value when currencyCode is set to a valid country code', () => {
      expect(Formatters.currency('USD')('5')).toBe('$5.00');
      expect(Formatters.currency('CNY')(5)).toBe('CN¥5.00');
    });
  });

  describe('percentage', () => {
    it('returns correct value when precision is 0', () => {
      expect(Formatters.percentage(5, { precision: 0 })).toBe('500%');
      expect(Formatters.percentage(0.1, { precision: 0 })).toBe(
        '10%',
      );
      expect(Formatters.percentage(0.94, { precision: 0 })).toBe(
        '94%',
      );
    });
    it('returns value with commas separating thousands and correct precision', () => {
      expect(
        Formatters.percentage(1234.123456, { precision: 3 }),
      ).toBe('123,412.346%');
      expect(Formatters.percentage(0.999985, { precision: 3 })).toBe(
        '99.999%',
      );
    });
    it('returns original unformatted value when value is a string', () => {
      expect(Formatters.percentage('.5555', { precision: 1 })).toBe(
        '.5555',
      );
    });
  });
});
