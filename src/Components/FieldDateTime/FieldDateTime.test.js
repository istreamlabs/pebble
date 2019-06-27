import React from 'react';
import { shallow } from 'enzyme';

import FieldDateTime from './FieldDateTime';
import Label from '../Label/Label';
import Text from '../Text/Text';
import moment from 'moment';

const requiredProps = {
  id: 'myDateTimePicker',
  label: 'select a time',
  onChange: jest.fn()
};

describe('FieldDateTime', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<FieldDateTime {...requiredProps} />); }).not.toThrow();
  });

  describe('renderLabel', () => {
    it('uses pebble label component', () => {
      const instance = new FieldDateTime({
        isInvalid: true,
        disabled: true,
        id: 'myID',
        hideLabel: true,
        label: 'myLabel'
      });

      const result = instance.renderLabel();

      expect(result.type).toEqual(Label);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        isInvalid: true,
        disabled: true,
        id: 'myID',
        hideLabel: true,
        label: 'myLabel'
      });

      const result = instance.renderLabel();

      expect(result.props.id).toEqual('myID');
      expect(result.props.children).toEqual('myLabel');
      expect(result.props.invalid).toEqual(true);
      expect(result.props.disabled).toEqual(true);
      expect(result.props.hide).toEqual(true);
    });
  });

  describe('getDateFormat', () => {
    it('returns a user specified format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        dateFormat: 'YY-M-D'
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YY-M-D');
    });
    it('returns default with a user specified time format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        timeFormat: 'H:m'
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YYYY-MM-DD H:m');
    });
    it('returns default without time format', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        excludeTime: true
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YYYY-MM-DD');
    });
  });

  describe('renderHelpTextMarkup', () => {
    it('does nothing if there is no help text', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });

      const result = instance.renderHelpTextMarkup();

      expect(result).toBeUndefined();
    });
    it('uses pebble text component', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        helpText: 'help text...'
      });

      const result = instance.renderHelpTextMarkup();

      expect(result.type).toEqual(Text);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        helpText: 'help text...'
      });

      const result = instance.renderHelpTextMarkup();

      expect(result.props.size).toEqual('6');
      expect(result.props.className).toEqual('db mt-2');
      expect(result.props.children).toEqual('help text...');
    });
  });

  describe('renderValidationTextMarkup', () => {
    it('does nothing if component is valid', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: false,
        validationText: 'validation text...'
      });

      const result = instance.renderValidationTextMarkup();

      expect(result).toBeUndefined();
    });
    it('does nothing if there is no validation text', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
      });

      const result = instance.renderValidationTextMarkup();

      expect(result).toBeUndefined();
    });
    it('uses pebble text component', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
        validationText: 'validation text...'
      });

      const result = instance.renderValidationTextMarkup();

      expect(result.type).toEqual(Text);
    });
    it('Sets the correct properties', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
        isInvalid: true,
        validationText: 'validation text...'
      });

      const result = instance.renderValidationTextMarkup();

      expect(result.props.size).toEqual('6');
      expect(result.props.appearance).toEqual('danger');
      expect(result.props.className).toEqual('db pt-2');
      expect(result.props.children).toEqual('validation text...');
    });
  });

  describe('onChange', () => {
    it('trims seconds and converts to ISO string', () => {
      const mockChange = jest.fn();
      const instance = new FieldDateTime({
        ...requiredProps,
        onChange: mockChange
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      instance.onChange(value);

      expect(mockChange).toHaveBeenCalledWith(value.startOf('minute').toISOString());
    });
    it('trims time and converts to ISO string', () => {
      const mockChange = jest.fn();
      const instance = new FieldDateTime({
        ...requiredProps,
        excludeTime: true,
        onChange: mockChange
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      instance.onChange(value);

      expect(mockChange).toHaveBeenCalledWith(value.startOf('day').toISOString());
    });
  });

  describe('FilterDate', () => {
    it('always returns true if there is no filterDate func provided', () => {
      const instance = new FieldDateTime({
        ...requiredProps,
      });

      const result = instance.filterDate();

      expect(result).toBeTruthy();
    });

    it('calls user provided filter func with ISO string', () => {
      const mockFilter = jest.fn(() => false);
      const instance = new FieldDateTime({
        ...requiredProps,
        filterDate: mockFilter,
      });
      const value = moment('1986-09-02T01:01:01.000Z');

      const result = instance.filterDate(value);

      expect(result).toBeFalsy();
      expect(mockFilter).toHaveBeenCalledWith(value.toISOString());
    });
  });
});
