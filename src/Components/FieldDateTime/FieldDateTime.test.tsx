// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './FieldDateTime' was resolved to '/Users/e... Remove this comment to see the full error message
import FieldDateTime from './FieldDateTime';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Label/Label' was resolved to '/Users/es... Remove this comment to see the full error message
import Label from '../Label/Label';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'moment' or its corresponding t... Remove this comment to see the full error message
import moment from 'moment';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-datepicker' or its corre... Remove this comment to see the full error message
import DatePicker from 'react-datepicker';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';

const requiredProps = {
  id: 'myDateTimePicker',
  label: 'select a time',
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  onChange: jest.fn(),
};

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('FieldDateTime', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<FieldDateTime {...requiredProps} />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderLabel', () => {
    it('uses pebble label component', () => {
      const instance = new FieldDateTime({
        isInvalid: true,
        disabled: true,
        id: 'myID',
        hideLabel: true,
        label: 'myLabel',
      });

      const result = instance.renderLabel();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.type).toEqual(Label);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        isInvalid: true,
        disabled: true,
        id: 'myID',
        hideLabel: true,
        label: 'myLabel',
      });

      const result = instance.renderLabel();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.id).toEqual('myID');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.children).toEqual('myLabel');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.invalid).toEqual(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.disabled).toEqual(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.hide).toEqual(true);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getDateFormat', () => {
    it('returns a user specified format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        dateFormat: 'YY-M-D',
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YY-M-D');
    });
    it('returns default with a user specified time format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        timeFormat: 'H:m',
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YYYY-MM-DD H:m Z');
    });
    it('returns default without time format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        excludeTime: true,
      });

      const result = instance.getDateFormat();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toEqual('YYYY-MM-DD');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderHelpTextMarkup', () => {
    it('does nothing if there is no help text', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });

      const result = instance.renderHelpTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeUndefined();
    });
    it('uses pebble text component', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        helpText: 'help text...',
      });

      const result = instance.renderHelpTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.type).toEqual(Text);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        helpText: 'help text...',
      });

      const result = instance.renderHelpTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.size).toEqual('6');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.className).toEqual('db mt-2');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.children).toEqual('help text...');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderValidationTextMarkup', () => {
    it('does nothing if component is valid', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: false,
        validationText: 'validation text...',
      });

      const result = instance.renderValidationTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeUndefined();
    });
    it('does nothing if there is no validation text', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
      });

      const result = instance.renderValidationTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeUndefined();
    });

    it('uses pebble text component', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
        validationText: 'validation text...',
      });

      const result = instance.renderValidationTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.type).toEqual(Text);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
        validationText: 'validation text...',
      });

      const result = instance.renderValidationTextMarkup();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.size).toEqual('6');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.appearance).toEqual('danger');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.className).toEqual('db pt-2');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.children).toEqual('validation text...');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('convertIsoStringToMoment', () => {
    it('returns a value moment object', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });
      const result = instance.convertIsoStringToMoment(
        '2019-06-26T12:00:00.000Z',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(moment.isMoment(result)).toBeTruthy();
    });

    it('throws for invalid isoString', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(() =>
        instance.convertIsoStringToMoment('2019-60-26T12:00:00.000Z'),
      ).toThrow();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onChange', () => {
    it('trims seconds and converts to ISO string', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockChange = jest.fn();
      const instance = new FieldDateTime({
        ...requiredProps,
        onChange: mockChange,
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      instance.onChange(value);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockChange).toHaveBeenCalledWith(
        value.startOf('minute').toISOString(),
      );
    });
    it('trims time and converts to ISO string', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockChange = jest.fn();
      const instance = new FieldDateTime({
        ...requiredProps,
        excludeTime: true,
        onChange: mockChange,
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      instance.onChange(value);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockChange).toHaveBeenCalledWith(
        value.startOf('day').toISOString(),
      );
    });
    it('returns empty string if value is cleared', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockChange = jest.fn();
      const instance = new FieldDateTime({
        ...requiredProps,
        onChange: mockChange,
      });

      instance.onChange(null);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockChange).toHaveBeenCalledWith('');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('FilterDate', () => {
    it('always returns true if there is no filterDate func provided', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });

      const result = instance.filterDate();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeTruthy();
    });

    it('calls user provided filter func with ISO string', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFilter = jest.fn(() => false);
      const instance = new FieldDateTime({
        ...requiredProps,
        filterDate: mockFilter,
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      const result = instance.filterDate(value);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeFalsy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mockFilter).toHaveBeenCalledWith(value.toISOString());
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderAlternativeDateTimeDisplay', () => {
    it('renders local when using the default of utc', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        value: '1986-09-02T01:01:01.000Z',
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
      expect(result.contains('Local')).toBeTruthy();
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
      const instance = new FieldDateTime({
        ...requiredProps,
        value: '1986-09-02T01:01:01.000Z',
        selectLocalDateTime: true,
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
      expect(result.contains('UTC')).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getDateFormat).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        result.contains(momentDate.utc().format('YYYY-MM-DD HH:mm')),
      ).toBeTruthy();
    });

    it('renders nothing if value is empty', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        value: '',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getDateFormat')
        .mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(
        instance.renderAlternativeDateTimeDisplay(),
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.contains('Local')).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getDateFormat).not.toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.text()).toEqual('<Block /><Block />');
    });

    it('renders grayed background when disabled', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        value: '1986-09-02T01:01:01.000Z',
        disabled: true,
      });

      const result = shallow(
        instance.renderAlternativeDateTimeDisplay(),
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        result
          .find(Block)
          .at(1)
          .prop('style'),
      ).toMatchObject({ borderLeft: 0 });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('render', () => {
    it('calls all the correct helper methods', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        value: '1986-09-02T01:01:01.000Z',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderLabel')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'getDateFormat')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderAlternativeDateTimeDisplay')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderHelpTextMarkup')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'renderValidationTextMarkup')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest
        .spyOn(instance, 'convertIsoStringToMoment')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(jest.fn());

      instance.render();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.renderLabel).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.getDateFormat).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        instance.renderAlternativeDateTimeDisplay,
      ).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.renderHelpTextMarkup).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.renderValidationTextMarkup).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.convertIsoStringToMoment).toHaveBeenCalled();
    });

    it('uses the react date picker and passes correct non configurable options', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldDateTime {...requiredProps} />);

      const picker = wrapper.find(DatePicker);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().disabledKeyboardNavigation).toEqual(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().utcOffset).toEqual(0);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().calendarClassName).toEqual(
        'FieldDatePickerCalendar',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().popperPlacement).toEqual('bottom-start');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().adjustDateOnChange).toBeFalsy();
    });

    it('uses date-time icon by default', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldDateTime {...requiredProps} />);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).props().name).toEqual('date-time');
    });

    it('uses calendar icon when excluding time', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime {...requiredProps} excludeTime />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).props().name).toEqual('calendar');
    });

    it('passes popperPlacement when provided', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime
          {...requiredProps}
          popperPlacement="top-end"
        />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find(DatePicker).props().popperPlacement,
      ).toEqual('top-end');
    });

    it('passes a min and max date when provided', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime
          {...requiredProps}
          minDate="1986-09-02T01:01:01.000Z"
          maxDate="1986-09-03T01:01:01.000Z"
        />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(DatePicker).props().minDate).toBeDefined();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(DatePicker).props().maxDate).toBeDefined();
    });

    it('passes undefined if value is empty', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime {...requiredProps} value="" />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find(DatePicker).props().selected,
      ).toBeUndefined();
    });

    it('passes placeholderText if value is empty', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime
          {...requiredProps}
          placeholderText="my text"
        />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find(DatePicker).props().placeholderText,
      ).toEqual('my text');
    });

    it('passes false allowSameDay prop to react date picker when excludeTime is true', () => {
      const props = { ...requiredProps, excludeTime: true };
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldDateTime {...props} />);
      const picker = wrapper.find(DatePicker);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().allowSameDay).toEqual(false);
    });

    it('passes true allowSameDay prop to react date picker when excludeTime is false', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldDateTime {...requiredProps} />);
      const picker = wrapper.find(DatePicker);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(picker.props().allowSameDay).toEqual(true);
    });

    it('adds UTC prefix to input by default', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<FieldDateTime {...requiredProps} />);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find('.FieldDateTime-timezone').contains('UTC'),
      ).toBeDefined();
    });

    it('adds local prefix to input when selecting local time', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime {...requiredProps} selectLocalDateTime />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        wrapper.find('.FieldDateTime-timezone').contains('Local'),
      ).toBeDefined();
    });

    it('sets correct classes and properties when invalid', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <FieldDateTime {...requiredProps} isInvalid />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(DatePicker).props().className).toContain(
        'input-error',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).props().className).toContain('red');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Icon).props().className).not.toContain(
        'neutral-400',
      );
    });
  });
});
