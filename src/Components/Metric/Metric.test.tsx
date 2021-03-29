// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';
import { useResponsiveLayout } from '../../Hooks';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Text from '../Text/Text';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Tooltip/Tooltip' was resolved to '/User... Remove this comment to see the full error message
import Tooltip from '../Tooltip/Tooltip';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Metric' was resolved to '/Users/esjaasta... Remove this comment to see the full error message
import Metric from './Metric';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Metric' was resolved to '/Users/esjaasta... Remove this comment to see the full error message
import { getMetricValueSize } from './Metric';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../Hooks/UseResponsiveLayout');

describe('getMetricValueSize()', () => {
  it('returns correct font size when size is large', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getMetricValueSize('large')).toBe(1);
  });
  it('returns correct font size when size is medium', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getMetricValueSize('medium')).toBe(2);
  });
  it('returns correct font size when size is small', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getMetricValueSize('small')).toBe(5);
  });
  it('returns correct font size when size is not small, medium or large', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(getMetricValueSize('foo')).toBe(1);
  });
});

describe('Metric', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    useResponsiveLayout.mockClear();
    useResponsiveLayout.mockImplementation(() => [false, false]);
  });
  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<Metric value={54321} title="test" />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  it('sets the correct Text sizes if not mobile', () => {
    const wrapper = shallow(<Metric value="5" title="test metric" />);
    expect(
      wrapper
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        .find(Text)
        .at(0)
        .prop('size'),
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    ).toBe(6);
    expect(
      wrapper
        .find(Text)
        .at(1)
        .prop('size'),
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        .prop('size'),
    ).toBe(7);
    expect(
      wrapper
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        .find(Text)
        .at(1)
        .prop('size'),
    ).toBe(1);
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('calls colorRules if colorRules is a function', () => {
    const customFunc = jest.fn().mockImplementation(() => 'success');
    shallow(
      <Metric
        value="5"
        title="test metric"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        colorRules={customFunc}
      />,
    );
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(customFunc).toHaveBeenCalledTimes(1);
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('calls console.warn if colorRules returns an unknown value', () => {
    const customFunc = jest.fn().mockImplementation(() => 'unknown');
    const spy = jest.spyOn(global.console, 'warn');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    shallow(
      <Metric
        value="5"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        title="test metric"
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'global'.
        colorRules={customFunc}
      />,
    );
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    expect(spy).toHaveBeenCalledTimes(1);
  });
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  it('sets the correct color if colorRules is an object', () => {
    const cpuHealth = {
      '0-71': 'neutral',
      '71-81': 'warn',
      '81-99': 'danger',
      '99-100': 'success',
    };
    const neutral = mount(
      <Metric value="5" title="test metric" colorRules={cpuHealth} />,
    );
    const warn = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Metric
        value="71"
        title="test metric"
        colorRules={cpuHealth}
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      />,
    );
    const danger = mount(
      <Metric
        value="81"
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        title="test metric"
        colorRules={cpuHealth}
      />,
    );
    const success = mount(
      <Metric
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        value="99"
        title="test metric"
        colorRules={cpuHealth}
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(neutral.find('.neutral-600')).toHaveLength(1);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(warn.find('.yellow')).toHaveLength(1);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(danger.find('.red')).toHaveLength(1);
    expect(success.find('.green')).toHaveLength(1);
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  });

  describe('helpText', () => {
    it('adds a Tooltip if helpText is set', () => {
      const txt = 'tooltip help text';
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Metric value="5" title="test metric" helpText={txt} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Tooltip)).toHaveLength(1);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Tooltip).prop('content')).toBe(txt);
    });
    it('does not render a Tooltip if helpText is not set', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Metric value="5" title="test metric" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Tooltip)).toHaveLength(0);
    });
  });
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('prefix and suffix', () => {
    it('adds a prefix if set', () => {
      const txt = 'prefix text';
      const wrapper = shallow(
        <Metric
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          value="5"
          title="test metric"
          prefix={txt}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          prefixClassName="prefixClass"
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('.prefixClass')).toHaveLength(1);
      expect(wrapper.find('.prefixClass').html()).toContain(txt);
    });
    it('does not render a prefix if prefix is not set', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(
        <Metric
          value="5"
          title="test metric"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          prefixClassName="prefixClass"
        />,
      );
      expect(wrapper.find('.prefixClass')).toHaveLength(0);
    });
    it('adds a suffix if set', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const txt = 'suffix text';
      const wrapper = shallow(
        <Metric
          value="5"
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          title="test metric"
          suffix={txt}
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          suffixClassName="suffixClass"
        />,
      );
      expect(wrapper.find('.suffixClass')).toHaveLength(1);
      expect(wrapper.find('.suffixClass').html()).toContain(txt);
    });
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    it('does not render a suffix if suffix is not set', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        <Metric
          value="5"
          title="test metric"
          suffixClassName="suffixClass"
        />,
      );
      expect(wrapper.find('.suffixClass')).toHaveLength(0);
    });
  });

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  it('adds a Tooltip if helpText is set', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    const txt = 'tooltip help text';
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      <Metric value="5" title="test metric" helpText={txt} />,
    );
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    expect(wrapper.find(Tooltip)).toHaveLength(1);
    expect(wrapper.find(Tooltip).prop('content')).toBe(txt);
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  describe('renderValue', () => {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    it('calls formatter if value is a number', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const customFormatter = jest
        .fn()
        .mockImplementation(() => <div>test</div>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        <Metric value={3} formatter={customFormatter} title="test" />,
      );
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith(3, {
        formatter: customFormatter,
        size: 'large',
        title: 'test',
        value: 3,
      });
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    it('calls formatter if value is a string', () => {
      const customFormatter = jest
        .fn()
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        .mockImplementation(() => <div>test</div>);
      shallow(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        <Metric value="3" formatter={customFormatter} title="test" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(customFormatter).toHaveBeenCalledTimes(1);
      expect(customFormatter).toHaveBeenCalledWith('3', {
        formatter: customFormatter,
        size: 'large',
        title: 'test',
        value: '3',
      });
    });
    it('returns the node and does not call formatter if value is not a number or string', () => {
      const customFormatter = jest
        .fn()
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .mockImplementation(() => <div>test</div>);
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        <Metric
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          value={<div id="test">test</div>}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          formatter={customFormatter}
          title="test"
        />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(customFormatter).toHaveBeenCalledTimes(0);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('div#test')).toHaveLength(1);
    });
  });
});
