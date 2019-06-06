import React from 'react';
import { mount, shallow } from 'enzyme';
import { DropdownMenuWithoutOnClickOutside as DropdownMenu } from './DropdownMenu';
import Button from '../Button/Button';
import FocusTrap from 'focus-trap-react';

describe('DropdownMenu', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DropdownMenu toggle="click me"><div>overlay</div></DropdownMenu>); }).not.toThrow();
  });

  it('should apply false FocusTrap prop even if its open', () => {
    const wrapper = shallow(<DropdownMenu trapFocus={false} open toggle="click me"><div>overlay</div></DropdownMenu>);
    expect(wrapper.find(FocusTrap).prop('active')).toBe(false);
  });

  it('should cleanup event listener when unmounted', () => {
    document.removeEventListener = jest.fn();
    const instance = new DropdownMenu({});
    instance.componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalledWith('keydown', instance.handleKeydown, false);
  });

  describe('onToggle', () => {
    it('should toggle the dropdown open and call onOpen ', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      const instance = new DropdownMenu({ onOpen, onClose });
      const spy = jest.spyOn(instance, 'setState').mockImplementation((state, callback) => callback());
      instance.onToggle();
      expect(spy).toHaveBeenCalledWith({ isOverlayOpen: true }, expect.any(Function));
      expect(onOpen).toHaveBeenCalled();
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should toggle the dropdown closed and call onClose ', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      const instance = new DropdownMenu({ onOpen, onClose, open: true });
      const spy = jest.spyOn(instance, 'setState').mockImplementation((state, callback) => callback());
      instance.onToggle();
      expect(spy).toHaveBeenCalledWith({ isOverlayOpen: false }, expect.any(Function));
      expect(onClose).toHaveBeenCalled();
      expect(onOpen).not.toHaveBeenCalled();
    });
  });

  describe('handleClickOutside', () => {
    it('should close the overlay if it is open', () => {
      const onClose = jest.fn();
      const wrapper = shallow(<DropdownMenu open toggle="click me" onClose={onClose}><div>overlay</div></DropdownMenu>);
      wrapper.instance().handleClickOutside();
      expect(onClose).toHaveBeenCalled();
    });

    it('should no op if the overlay is closed', () => {
      const onClose = jest.fn();
      const instance = new DropdownMenu({ open: false, onClose });

      instance.handleClickOutside();
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe('handleClose', () => {
    it('should call onClose callback', () => {
      const onClose = jest.fn();
      const instance = new DropdownMenu({ open: false, onClose });

      instance.handleClose();
      expect(onClose).toHaveBeenCalled();
    });
  });

  describe('handleOpen', () => {
    it('should call onClose callback', () => {
      const onOpen = jest.fn();
      const instance = new DropdownMenu({ open: false, onOpen });

      instance.handleOpen();
      expect(onOpen).toHaveBeenCalled();
    });
  });

  describe('handleKeydown', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls handleClose when Escape key is pressed', () => {
      const instance = new DropdownMenu({ open: true });
      instance.setState = jest.fn();

      instance.handleKeydown({ event: 'keydown', key: 'Enter' });
      expect(instance.setState).toHaveBeenCalledTimes(0);

      instance.handleKeydown({ event: 'keydown', key: 'Escape' });
      expect(instance.setState).toHaveBeenCalledTimes(1);
    });
  });

  describe('renderToggle', () => {
    it('should set onClick to onToggle', () => {
      const wrapper = mount(<DropdownMenu open={false} toggle="click me"><div>overlay</div></DropdownMenu>);
      const toggleButton = wrapper.find(Button);
      toggleButton.simulate('click');
      expect(wrapper.state().isOverlayOpen).toBe(true);
    });

    it('adds an onClick handler to a custom trigger', () => {
      const customTrigger = <Button>click me</Button>;
      const onOpen = jest.fn();

      const wrapper = mount(<DropdownMenu toggle={customTrigger} onOpen={onOpen}><div>overlay</div></DropdownMenu>);
      const toggleButton = wrapper.find(Button);
      toggleButton.simulate('click');
      expect(onOpen).toHaveBeenCalled();
    });
  });
});
