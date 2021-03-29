import Formatters from './Formatters';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Util > Formatters', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('number', () => {
    it('returns correct value when precision is 0', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.number(5, { precision: 0 })).toBe('5');
    });
    it('returns value with commas separating thousands', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.number(1234, { precision: 0 })).toBe('1,234');
    });
    it('returns value with commas separating thousands and correct precision', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.number(1234.123456, { precision: 3 })).toBe(
        '1,234.123',
      );
    });
    it('returns value with commas separating thousands and correct precision', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.number(1234.19, { precision: 1 })).toBe(
        '1,234.2',
      );
    });
    it('returns original unformatted value when value is a string', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.number('5555', { precision: 2 })).toBe(
        '5555',
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('currency', () => {
    it('returns correct value when currencyCode is set to a valid country code', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.currency('USD')('5')).toContain('$');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.currency('CNY')(5)).toContain('¥');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('percentage', () => {
    it('returns correct value when precision is 0', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.percentage(5, { precision: 0 })).toBe('500%');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.percentage(0.1, { precision: 0 })).toBe(
        '10%',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.percentage(0.94, { precision: 0 })).toBe(
        '94%',
      );
    });
    it('returns value with commas separating thousands and correct precision', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        Formatters.percentage(1234.123456, { precision: 3 }),
      ).toBe('123,412.346%');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.percentage(0.999985, { precision: 3 })).toBe(
        '99.999%',
      );
    });
    it('returns original unformatted value when value is a string', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(Formatters.percentage('.5555', { precision: 1 })).toBe(
        '.5555',
      );
    });
  });
});
