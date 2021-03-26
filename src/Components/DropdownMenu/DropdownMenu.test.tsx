import Button from '../Button/Button';
import { DropdownMenuWithoutOnClickOutside as DropdownMenu } from './DropdownMenu';
import FocusTrap from 'focus-trap-react';
import React from 'react';
import { shallow } from 'enzyme';

describe('DropdownMenu', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(
        <DropdownMenu toggle="click me">
          <div>overlay</div>
        </DropdownMenu>,
      );
    }).not.toThrow();
  });

  it('should apply false FocusTrap prop even if its open', () => {
    const wrapper = shallow(
      <DropdownMenu trapFocus={false} open toggle="click me">
        <div>overlay</div>
      </DropdownMenu>,
    );
    expect(wrapper.find(FocusTrap).prop('active')).toBe(false);
  });

  it('should cleanup event listener when unmounted', () => {
    document.removeEventListener = jest.fn();
    const instance = new DropdownMenu({});
    instance.componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      instance.handleKeydown,
      false,
    );
  });

  describe('onToggle', () => {
    it('should toggle the dropdown open and call onOpen ', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      const event = {};

      const instance = new DropdownMenu({ onOpen, onClose });
      const spy = jest
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      instance.onToggle(event);
      expect(spy).toHaveBeenCalledWith(
        { isOverlayOpen: true },
        expect.any(Function),
      );
      expect(onOpen).toHaveBeenCalledWith(event);
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should toggle the dropdown closed and call onClose ', () => {
      const onOpen = jest.fn();
      const onClose = jest.fn();

      const event = {};

      const instance = new DropdownMenu({
        onOpen,
        onClose,
        open: true,
      });
      const spy = jest
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      instance.onToggle(event);
      expect(spy).toHaveBeenCalledWith(
        { isOverlayOpen: false },
        expect.any(Function),
      );
      expect(onClose).toHaveBeenCalled();
      expect(onOpen).not.toHaveBeenCalled();
    });
  });

  describe('handleOverlayClick', () => {
    it('should do nothing if event is not a real event object', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });
      jest.spyOn(instance, 'setState').mockImplementation(jest.fn());

      instance.handleOverlayClick();
      expect(instance.setState).not.toHaveBeenCalled();
      instance.handleOverlayClick({});
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('should do nothing if closest does not return node', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });
      jest.spyOn(instance, 'setState').mockImplementation(jest.fn());

      instance.handleOverlayClick({
        target: {
          closest: () => null,
        },
      });
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('should call set state if menuItem clicked', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });

      jest
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      jest.spyOn(instance, 'handleClose');

      const event = {
        target: {
          closest: () => <Button role="menuitem">item</Button>,
        },
      };

      instance.handleOverlayClick(event);

      expect(instance.handleClose).toHaveBeenCalledWith(event);
      expect(instance.setState).toHaveBeenCalledWith(
        { isOverlayOpen: false },
        expect.any(Function),
      );
    });
  });

  describe('handleClickOutside', () => {
    it('should close the overlay if it is open', () => {
      const onClose = jest.fn();
      const wrapper = shallow(
        <DropdownMenu open toggle="click me" onClose={onClose}>
          <div>overlay</div>
        </DropdownMenu>,
      );

      const event = {};

      wrapper.instance().handleClickOutside(event);
      expect(onClose).toHaveBeenCalledWith(event);
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

      const event = {};

      instance.handleClose(event);
      expect(onClose).toHaveBeenCalledWith(event);
    });
  });

  describe('handleOpen', () => {
    it('should call onOpen callback', () => {
      const onOpen = jest.fn();
      const instance = new DropdownMenu({ open: false, onOpen });

      const event = {};

      instance.handleOpen(event);
      expect(onOpen).toHaveBeenCalledWith(event);
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

      jest
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      jest.spyOn(instance, 'handleClose');

      const event = { event: 'keydown', key: 'Escape' };
      instance.handleKeydown(event);

      expect(instance.setState).toHaveBeenCalledTimes(1);
      expect(instance.handleClose).toHaveBeenCalledWith(event);
    });
  });

  describe('renderToggle', () => {
    it('should set onClick to onToggle', () => {
      const instance = new DropdownMenu({ toggle: 'hello' });
      const result = instance.renderToggle(React.createRef());
      expect(result.props.onClick).toEqual(instance.onToggle);
    });

    it('adds an onClick handler to a custom trigger', () => {
      const customTrigger = <Button>click me</Button>;
      const instance = new DropdownMenu({ toggle: customTrigger });
      const result = instance.renderToggle(React.createRef());
      expect(result.props.onClick).toEqual(instance.onToggle);
      expect(result.props.children).toContain('click me');
    });
  });

  describe('renderOverlay', () => {
    it('sets correct properties on the overlay', () => {
      const instance = new DropdownMenu({ toggle: 'hello' });
      instance.state.isOverlayOpen = true;
      const result = instance.renderOverlay({
        ref: React.createRef(),
        placement: 'bottom-end',
      });
      expect(result.props['aria-hidden']).toEqual(false);
      expect(result.props['aria-expanded']).toEqual(true);
      expect(result.props['data-placement']).toEqual('bottom-end');
    });
  });
});
