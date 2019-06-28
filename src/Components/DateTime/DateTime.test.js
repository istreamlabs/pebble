import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Text from '../Text/Text';

import DateTime from './DateTime';

describe('DateTime', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DateTime />); }).not.toThrow();
  });

  describe('getDateFormat', () => {
    it('returns a user specified format', () => {
      const instance = new DateTime({
        dateFormat: 'YY-M-D'
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YY-M-D');
    });
    it('returns default with a user specified time format', () => {
      const instance = new DateTime({
        timeFormat: 'H:m'
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YYYY-MM-DD H:m');
    });
    it('returns default without time format', () => {
      const instance = new DateTime({
        excludeTime: true
      });

      const result = instance.getDateFormat();

      expect(result).toEqual('YYYY-MM-DD');
    });
  });

  describe('renderLabel', () => {
    it('returns a Text component', () => {
      const testLabel = 'test label';
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        label: testLabel
      });
      const result = instance.renderLabel();

      expect(result.type).toEqual(Text);
    });
    it('returns nothing if label is not defined', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
      });
      const result = instance.renderLabel();

      expect(result).toBeUndefined;
    });
    it('returns a label if set', () => {
      const testLabel = 'test label';
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        label: testLabel
      });

      const result = shallow(instance.renderLabel());
      expect(result.text()).toBe(testLabel);
    });
  });

  describe('renderAlternativeDateTimeDisplay', () => {
    it('renders local when using the default of utc', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        showAlternativeTimeZone: true,
      });
      const momentDate = moment('1986-09-02T01:01:01.000Z');
      jest.spyOn(instance, 'getDateFormat').mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(instance.renderAlternativeDateTimeDisplay());

      expect(result.contains('local')).toBeTruthy();
      expect(instance.getDateFormat).toHaveBeenCalled();
      expect(result.contains(momentDate.local().format('YYYY-MM-DD HH:mm'))).toBeTruthy();
    });

    it('renders utc when using the local', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
        displayLocalDateTime: true,
        showAlternativeTimeZone: true,
      });
      const momentDate = moment('1986-09-02T01:01:01.000Z');
      jest.spyOn(instance, 'getDateFormat').mockImplementation(() => 'YYYY-MM-DD HH:mm');

      const result = shallow(instance.renderAlternativeDateTimeDisplay());

      expect(result.contains('UTC')).toBeTruthy();
      expect(instance.getDateFormat).toHaveBeenCalled();
      expect(result.contains(momentDate.utc().format('YYYY-MM-DD HH:mm'))).toBeTruthy();
    });
  });

  describe('render', () => {
    it('calls all the correct helper methods', () => {
      const instance = new DateTime({
        value: '1986-09-02T01:01:01.000Z',
      });
      jest.spyOn(instance, 'renderLabel').mockImplementation(jest.fn());
      jest.spyOn(instance, 'getDateFormat').mockImplementation(jest.fn());
      jest.spyOn(instance, 'renderAlternativeDateTimeDisplay').mockImplementation(jest.fn());

      instance.render();

      expect(instance.renderLabel).toHaveBeenCalled();
      expect(instance.getDateFormat).toHaveBeenCalled();
      expect(instance.renderAlternativeDateTimeDisplay).toHaveBeenCalled();
    });

    it('adds UTC prefix to input by default', () => {
      const wrapper = shallow(<DateTime
        value="1986-09-02T01:01:01.000Z"
      />);
      expect(wrapper.find('.DateTime-timezone').contains('UTC')).toBeDefined();
    });
    it('adds local prefix to if displayLocalDateTime is true', () => {
      const wrapper = shallow(<DateTime
        displayLocalDateTime
        value="1986-09-02T01:01:01.000Z"
      />);
      expect(wrapper.find('.DateTime-timezone').contains('local')).toBeDefined();
    });

    it('adds displays default date-time format when value is valid date', () => {
      const wrapper = shallow(<DateTime
        value="1986-09-02T01:01:01.000Z"
      />);
      expect(wrapper.find('.DateTime-value').contains('1986-09-02 01:01:01')).toBeDefined();
    });
  });
});
