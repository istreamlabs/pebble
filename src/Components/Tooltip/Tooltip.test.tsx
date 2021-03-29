// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Tooltip' was resolved to '/Users/esjaast... Remove this comment to see the full error message
import Tooltip from './Tooltip';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Tooltip', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Tooltip />);
    }).not.toThrow();
  });
  it('defaults', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Tooltip.defaultProps.active).toBe(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Tooltip.defaultProps.placement).toBe('top');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleMouseEnter', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.setState = jest.fn();
      instance.handleMouseEnter();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: true,
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleMouseLeave', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.setState = jest.fn();
      instance.handleMouseLeave();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: false,
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleFocus', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.setState = jest.fn();
      instance.handleFocus();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: true,
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleBlur', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.setState = jest.fn();
      instance.handleBlur();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: false,
      });
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderTrigger', () => {
    it('adds the correct props when passed a string', () => {
      const stringTrigger = 'test';
      const instance = new Tooltip({ children: stringTrigger });
      const result = instance.renderTrigger(React.createRef());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onMouseEnter).toEqual(
        instance.handleMouseEnter,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onMouseLeave).toEqual(
        instance.handleMouseLeave,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
    it('adds the correct props when passed a node', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const nodeTrigger = <span>test</span>;
      const instance = new Tooltip({ children: nodeTrigger });
      const result = instance.renderTrigger(React.createRef());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onMouseEnter).toEqual(
        instance.handleMouseEnter,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onMouseLeave).toEqual(
        instance.handleMouseLeave,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('renderTooltip', () => {
    it('renders a node with the correct props', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const trigger = <span>test</span>;
      const content = 'tooltip content';
      const testStyle = 'color: #000';
      const testRef = React.createRef();
      const instance = new Tooltip({ children: trigger, content });
      const result = instance.renderTooltip({
        ref: testRef,
        placement: 'top',
        style: testStyle,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props['data-tooltip-placement']).toEqual('top');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.children).toEqual(content);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.style).toEqual(testStyle);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('render', () => {
    it('renders the Popper when active', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tooltip content="tooltip content" active>
          test
        </Tooltip>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Popper')).toHaveLength(1);
    });
    it('does not render Popper when inactive', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tooltip content="tooltip content">test</Tooltip>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('Popper')).toHaveLength(0);
    });
  });
});
