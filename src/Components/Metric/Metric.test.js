import React from 'react';
import { shallow } from 'enzyme';
import { useResponsiveLayout } from '../../Hooks';

import Text from '../Text/Text';
import Tooltip from '../Tooltip/Tooltip';
import Metric from './Metric';

jest.mock('../../Hooks/UseResponsiveLayout');

describe('Metric', () => {
  beforeEach(() => {
    useResponsiveLayout.mockClear();
    useResponsiveLayout.mockImplementation(() => [false, false]);
  });
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Metric value={54321} title="test" />);
    }).not.toThrow();
  });

  it('sets the correct Text sizes if not mobile', () => {
    const wrapper = shallow(<Metric value="5" title="test metric" />);
    expect(
      wrapper
        .find(Text)
        .at(0)
        .prop('size'),
    ).toBe(6);
    expect(
      wrapper
        .find(Text)
        .at(1)
        .prop('size'),
    ).toBe(1);
  });
  it('sets the correct Text sizes if mobile', () => {
    useResponsiveLayout.mockClear();
    useResponsiveLayout.mockImplementation(() => [true, false]);
    const wrapper = shallow(<Metric value="5" title="test metric" />);
    expect(
      wrapper
        .find(Text)
        .at(0)
        .prop('size'),
    ).toBe(7);
    expect(
      wrapper
        .find(Text)
        .at(1)
        .prop('size'),
    ).toBe(3);
  });

  describe('helpText', () => {
    it('adds a Tooltip if helpText is set', () => {
      const txt = 'tooltip help text';
      const wrapper = shallow(
        <Metric value="5" title="test metric" helpText={txt} />,
      );
      expect(wrapper.find(Tooltip)).toHaveLength(1);
      expect(wrapper.find(Tooltip).prop('content')).toBe(txt);
    });
    it('does not render a Tooltip if helpText is not set', () => {
      const wrapper = shallow(
        <Metric value="5" title="test metric" />,
      );
      expect(wrapper.find(Tooltip)).toHaveLength(0);
    });
  });
  describe('prefix and suffix', () => {
    it('adds a prefix if set', () => {
      const txt = 'prefix text';
      const wrapper = shallow(
        <Metric
          value="5"
          title="test metric"
          prefix={txt}
          prefixClassName="prefixClass"
        />,
      );
      expect(wrapper.find('.prefixClass')).toHaveLength(1);
      expect(wrapper.find('.prefixClass').html()).toContain(txt);
    });
    it('does not render a prefix if prefix is not set', () => {
      const wrapper = shallow(
        <Metric
          value="5"
          title="test metric"
          prefixClassName="prefixClass"
        />,
      );
      expect(wrapper.find('.prefixClass')).toHaveLength(0);
    });
    it('adds a suffix if set', () => {
      const txt = 'suffix text';
      const wrapper = shallow(
        <Metric
          value="5"
          title="test metric"
          suffix={txt}
          suffixClassName="suffixClass"
        />,
      );
      expect(wrapper.find('.suffixClass')).toHaveLength(1);
      expect(wrapper.find('.suffixClass').html()).toContain(txt);
    });
    it('does not render a suffix if suffix is not set', () => {
      const wrapper = shallow(
        <Metric
          value="5"
          title="test metric"
          suffixClassName="suffixClass"
        />,
      );
      expect(wrapper.find('.suffixClass')).toHaveLength(0);
    });
  });

  it('adds a Tooltip if helpText is set', () => {
    const txt = 'tooltip help text';
    const wrapper = shallow(
      <Metric value="5" title="test metric" helpText={txt} />,
    );
    expect(wrapper.find(Tooltip)).toHaveLength(1);
    expect(wrapper.find(Tooltip).prop('content')).toBe(txt);
  });

  describe('renderValue', () => {
    it('calls formatter if value is a number', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      shallow(
        <Metric value={3} formatter={customFormatter} title="test" />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith(3, {
        formatter: customFormatter,
        title: 'test',
        value: 3,
      });
    });
    it('calls formatter if value is a string', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      shallow(
        <Metric value="3" formatter={customFormatter} title="test" />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith('3', {
        formatter: customFormatter,
        title: 'test',
        value: '3',
      });
    });
    it('returns the node and does not call formatter if value is not a number or string', () => {
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      const wrapper = shallow(
        <Metric
          value={<div id="test">test</div>}
          formatter={customFormatter}
          title="test"
        />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(0);
      expect(wrapper.find('div#test')).toHaveLength(1);
    });
  });
});