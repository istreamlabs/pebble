import React from 'react';
import { shallow } from 'enzyme';
import { Reference } from 'react-popper';


import Tooltip from './Tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Tooltip />); }).not.toThrow();
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
      expect(instance.setState).toHaveBeenCalledWith({ tooltipVisible: true });
    });
  });

  describe('handleMouseLeave', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleMouseLeave();
      expect(instance.setState).toHaveBeenCalledWith({ tooltipVisible: false });
    });
  });

  describe('handleFocus', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleFocus();
      expect(instance.setState).toHaveBeenCalledWith({ tooltipVisible: true });
    });
  });

  describe('handleBlur', () => {
    it('hides the tooltip', () => {
      const instance = new Tooltip({ children: 'test' });
      instance.setState = jest.fn();
      instance.handleBlur();
      expect(instance.setState).toHaveBeenCalledWith({ tooltipVisible: false });
    });
  });

  describe('renderTrigger', () => {
    it('adds the correct props when passed a string', () => {
      const stringTrigger = 'test';
      const instance = new Tooltip({ children: stringTrigger });
      const result = instance.renderTrigger(React.createRef());
      expect(result.props.onMouseEnter).toEqual(instance.handleMouseEnter);
      expect(result.props.onMouseLeave).toEqual(instance.handleMouseLeave);
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
    it('adds the correct props when passed a node', () => {
      const nodeTrigger = <span>test</span>;
      const instance = new Tooltip({ children: nodeTrigger });
      const result = instance.renderTrigger(React.createRef());
      expect(result.props.onMouseEnter).toEqual(instance.handleMouseEnter);
      expect(result.props.onMouseLeave).toEqual(instance.handleMouseLeave);
      expect(result.props.onFocus).toEqual(instance.handleFocus);
      expect(result.props.onBlur).toEqual(instance.handleBlur);
    });
  });

  describe('render', () => {
    it('renders a node with the correct props', () => {
      const testRef = React.createRef();
      const wrapper = shallow(<Tooltip><div>test</div></Tooltip>)
        .find(Reference)
        .renderProp('children')(testRef);

      expect(wrapper.find('div')).toHaveLength(1);
      expect(wrapper.find('div').prop('children')).toEqual('test');
      expect(wrapper.find('div').prop('tabIndex')).toEqual(0);
    });
    it('renders a string with the correct props', () => {
      const testRef = React.createRef();
      const wrapper = shallow(<Tooltip>test</Tooltip>)
        .find(Reference)
        .renderProp('children')(testRef);

      expect(wrapper.find('span')).toHaveLength(1);
      expect(wrapper.find('span').prop('children')).toEqual('test');
      expect(wrapper.find('span').prop('tabIndex')).toEqual('0');
    });
  });
});
