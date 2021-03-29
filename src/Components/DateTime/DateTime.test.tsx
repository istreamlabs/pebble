// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'moment' or its corresponding t... Remove this comment to see the full error message
import moment from 'moment';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';

// @ts-expect-error ts-migrate(6142) FIXME: Module './DateTime' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import DateTime from './DateTime';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DateTime', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<DateTime />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getDateFormat', () => {
    it('returns a user specified format', () => {
      const instance = new DateTime({
        dateFormat: 'YY-M-D',
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YY-M-D');
    });
    it('returns default with a user specified time format', () => {
      const instance = new DateTime({
        timeFormat: 'H:m',
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YYYY-MM-DD H:m');
    });
    it('returns default without time format', () => {
      const instance = new DateTime({
        excludeTime: true,
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YYYY-MM-DD');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderLabel', () => {
    it('returns a Text component', () => {
      const testLabel = 'test label';
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        label: testLabel,
      });
      const result = instance.renderLabel();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.type).toEqual(Text);
    });
    it('returns nothing if label is not defined', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
      });
      const result = instance.renderLabel();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeUndefined;
    });
    it('returns a label if set', () => {
      const testLabel = 'test label';
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        label: testLabel,
      });

      const result = shallow(instance.renderLabel());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.text()).toBe(testLabel);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderAlternativeDateTimeDisplay', () => {
    it('renders local when using the default of utc', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        showAlternativeTimeZone: true,
      });
      const momentDate = moment('1986-09-02T01:01:01.000Z');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getDateFormat')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(
        instance.renderAlternativeDateTimeDisplay(),
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.contains('local')).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getDateFormat).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        result.contains(
          momentDate.local().format('YYYY-MM-DD HH:mm'),
        ),
      ).toBeTruthy();
    });

    it('renders utc when using the local', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        displayLocalDateTime: true,
        showAlternativeTimeZone: true,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getFormattedDateTime')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(
        instance.renderAlternativeDateTimeDisplay(),
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.contains('UTC')).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getFormattedDateTime).toHaveBeenCalled();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderTime', () => {
    it('returns a tooltip with local time when using the default of utc and showAlternative time is false', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        showAlternativeTimeZone: false,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getFormattedDateTime')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(instance.renderTime());

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getFormattedDateTime).toHaveBeenCalledWith(
        'UTC',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        result.find({ content: 'YYYY-MM-DD HH:mm local' }),
      ).toBeTruthy();
    });

    it('returns utc time when using the default of utc and showAlternative time is true', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        showAlternativeTimeZone: true,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getFormattedDateTime')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(instance.renderTime());

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getFormattedDateTime).toHaveBeenCalledWith(
        'UTC',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.text()).toBe('YYYY-MM-DD HH:mm');
    });

    it('returns local time when displayLocalDateTime is true', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        displayLocalDateTime: true,
        showAlternativeTimeZone: true,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getFormattedDateTime')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(instance.renderTime());

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getFormattedDateTime).toHaveBeenCalledWith(
        'local',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.text()).toBe('YYYY-MM-DD HH:mm');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('render', () => {
    it('calls all the correct helper methods', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderLabel')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderTime')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderAlternativeDateTimeDisplay')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());

      instance.render();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.renderLabel).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.renderTime).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        instance.renderAlternativeDateTimeDisplay,
      ).toHaveBeenCalled();
    });

    it('adds UTC prefix to input by default', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DateTime value="1986-09-02T01:01:01.000Z" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find('.DateTime-timezone').contains('UTC'),
      ).toBeDefined();
    });
    it('adds local prefix to if displayLocalDateTime is true', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DateTime
          displayLocalDateTime
          value="1986-09-02T01:01:01.000Z"
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find('.DateTime-timezone').contains('local'),
      ).toBeDefined();
    });

    it('adds displays default date-time format when value is valid date', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DateTime value="1986-09-02T01:01:01.000Z" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper
          .find('.DateTime-value')
          .contains('1986-09-02 01:01:01'),
      ).toBeDefined();
    });
  });
});
