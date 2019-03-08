import React from 'react';
import { shallow } from 'enzyme';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Dropdown overlay={<div>overlay</div>}>hello</Dropdown>); }).not.toThrow();
  });

  describe('onToggle', () => {
    it('should toggle the dropdown open and call onOpen and onClose', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      const wrapper = shallow(<Dropdown onOpen={onOpen} onClose={onClose} overlay={<div>overlay</div>}><button type="button">click me</button></Dropdown>);
      const toggleButton = wrapper.find('button');
      toggleButton.simulate('click');
      expect(wrapper.state().isOverlayOpen).toBe(true);
      expect(onOpen).toHaveBeenCalled();
      toggleButton.simulate('click');
      expect(onClose).toHaveBeenCalled();
      expect(wrapper.state().isOverlayOpen).toBe(false);
    });
  });

  describe('handleClose', () => {
    it('should cleanup event listener', () => {
      document.removeEventListener = jest.fn();

      const instance = new Dropdown({ open: false });

      instance.handleClose();
      expect(document.removeEventListener).toHaveBeenCalled();
    });
    it('should call onClose callback', () => {
      const onClose = jest.fn();
      const instance = new Dropdown({ open: false, onClose });

      instance.handleClose();
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('handleOpen', () => {
    it('should add event listener', () => {
      document.addEventListener = jest.fn();

      const instance = new Dropdown({ open: false });

      instance.handleOpen();
      expect(document.addEventListener).toHaveBeenCalled();
    });
    it('should call onClose callback', () => {
      const onOpen = jest.fn();
      const instance = new Dropdown({ open: false, onOpen });

      instance.handleOpen();
      expect(onOpen).toHaveBeenCalled();
    });
  });

  describe('renderToggle', () => {
    it('should set onClick to onToggle', () => {
      const wrapper = shallow(<Dropdown overlay={<div>overlay</div>}><button type="button">click me</button></Dropdown>);
      const toggleButton = wrapper.find('button');
      toggleButton.simulate('click');
      expect(wrapper.state().isOverlayOpen).toBe(true);
    });
  });
});
