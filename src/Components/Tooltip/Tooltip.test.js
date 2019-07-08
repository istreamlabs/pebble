import React from 'react';
import { shallow } from 'enzyme';

import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Tooltip />);
    }).not.toThrow();
  });
  it('defaults', () => {
    expect(Tooltip.defaultProps.active).toBe(false);
    expect(Tooltip.defaultProps.placement).toBe('top');
  });

  describe('handleMouseEnter', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleMouseEnter();
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: true,
      });
    });
  });

  describe('handleMouseLeave', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleMouseLeave();
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: false,
      });
    });
  });

  describe('handleFocus', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleFocus();
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: true,
      });
    });
  });

  describe('handleBlur', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleBlur();
      expect(instance.setState).toHaveBeenCalledWith({
        tooltipVisible: false,
      });
    });
  });

  describe('renderTrigger', () => {
    it('adds the correct props when passed a string', () => {
      const stringTrigger = 'test';
      const instance = new Tooltip({ children: stringTrigger });
      const result = instance.renderTrigger(React.createRef());
      expect(result.props.onMouseEnter).toEqual(
        instance.handleMouseEnter,
      );
      expect(result.props.onMouseLeave).toEqual(
        instance.handleMouseLeave,
      );
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
    it('adds the correct props when passed a node', () => {
      const nodeTrigger = <span>test</span>;
      const instance = new Tooltip({ children: nodeTrigger });
      const result = instance.renderTrigger(React.createRef());
      expect(result.props.onMouseEnter).toEqual(
        instance.handleMouseEnter,
      );
      expect(result.props.onMouseLeave).toEqual(
        instance.handleMouseLeave,
      );
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
  });

  describe('renderTooltip', () => {
    it('renders a node with the correct props', () => {
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
      expect(result.props['data-placement']).toEqual('top');
      expect(result.props.children).toEqual(content);
      expect(result.props.style).toEqual(testStyle);
    });
  });

  describe('render', () => {
    it('renders the Popper when active', () => {
      const wrapper = shallow(
        <Tooltip content="tooltip content" active>
          test
        </Tooltip>,
      );
      expect(wrapper.find('Popper')).toHaveLength(1);
    });
    it('does not render Popper when inactive', () => {
      const wrapper = shallow(
        <Tooltip content="tooltip content">test</Tooltip>,
      );
      expect(wrapper.find('Popper')).toHaveLength(0);
    });
  });
});
