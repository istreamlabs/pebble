// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DropdownMenu' was resolved to '/Users/es... Remove this comment to see the full error message
import { DropdownMenuWithoutOnClickOutside as DropdownMenu } from './DropdownMenu';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DropdownMenu', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownMenu toggle="click me">
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <div>overlay</div>
        </DropdownMenu>,
      );
    }).not.toThrow();
  });

  it('should apply false FocusTrap prop even if its open', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropdownMenu trapFocus={false} open toggle="click me">
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <div>overlay</div>
      </DropdownMenu>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(FocusTrap).prop('active')).toBe(false);
  });

  it('should cleanup event listener when unmounted', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    document.removeEventListener = jest.fn();
    const instance = new DropdownMenu({});
    instance.componentWillUnmount();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      instance.handleKeydown,
      false,
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onToggle', () => {
    it('should toggle the dropdown open and call onOpen ', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onOpen = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onClose = jest.fn();

      const event = {};

      const instance = new DropdownMenu({ onOpen, onClose });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const spy = jest
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      instance.onToggle(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(spy).toHaveBeenCalledWith(
        { isOverlayOpen: true },
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.any(Function),
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onOpen).toHaveBeenCalledWith(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onClose).not.toHaveBeenCalled();
    });

    it('should toggle the dropdown closed and call onClose ', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onOpen = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const onClose = jest.fn();

      const event = {};

      const instance = new DropdownMenu({
        onOpen,
        onClose,
        open: true,
      });
      const spy = jest
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      instance.onToggle(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(spy).toHaveBeenCalledWith(
        { isOverlayOpen: false },
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        expect.any(Function),
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onClose).toHaveBeenCalled();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onOpen).not.toHaveBeenCalled();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleOverlayClick', () => {
    it('should do nothing if event is not a real event object', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.spyOn(instance, 'setState').mockImplementation(jest.fn());

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.handleOverlayClick();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).not.toHaveBeenCalled();
      instance.handleOverlayClick({});
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('should do nothing if closest does not return node', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.spyOn(instance, 'setState').mockImplementation(jest.fn());

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.handleOverlayClick({
        target: {
          closest: () => null,
        },
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('should call set state if menuItem clicked', () => {
      const instance = new DropdownMenu({
        open: true,
        toggle: 'click me',
      });

      jest
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      jest.spyOn(instance, 'handleClose');

      const event = {
        target: {
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          closest: () => <Button role="menuitem">item</Button>,
        },
      };

      instance.handleOverlayClick(event);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.handleClose).toHaveBeenCalledWith(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledWith(
        { isOverlayOpen: false },
        expect.any(Function),
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleClickOutside', () => {
    it('should close the overlay if it is open', () => {
      const onClose = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <DropdownMenu open toggle="click me" onClose={onClose}>
          <div>overlay</div>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        </DropdownMenu>,
      );

      const event = {};

      wrapper.instance().handleClickOutside(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onClose).toHaveBeenCalledWith(event);
    });

    it('should no op if the overlay is closed', () => {
      const onClose = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const instance = new DropdownMenu({ open: false, onClose });

      instance.handleClickOutside();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onClose).not.toHaveBeenCalled();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleClose', () => {
    it('should call onClose callback', () => {
      const onClose = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const instance = new DropdownMenu({ open: false, onClose });

      const event = {};

      instance.handleClose(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onClose).toHaveBeenCalledWith(event);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleOpen', () => {
    it('should call onOpen callback', () => {
      const onOpen = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const instance = new DropdownMenu({ open: false, onOpen });

      const event = {};

      instance.handleOpen(event);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(onOpen).toHaveBeenCalledWith(event);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('handleKeydown', () => {
    beforeEach(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
      jest.restoreAllMocks();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    });

    it('calls handleClose when Escape key is pressed', () => {
      const instance = new DropdownMenu({ open: true });
      instance.setState = jest.fn();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.handleKeydown({ event: 'keydown', key: 'Enter' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledTimes(0);

      jest
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        .spyOn(instance, 'setState')
        .mockImplementation((state, callback) => callback());
      jest.spyOn(instance, 'handleClose');

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const event = { event: 'keydown', key: 'Escape' };
      instance.handleKeydown(event);

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalledTimes(1);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.handleClose).toHaveBeenCalledWith(event);
    });
  });

  describe('renderToggle', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('should set onClick to onToggle', () => {
      const instance = new DropdownMenu({ toggle: 'hello' });
      const result = instance.renderToggle(React.createRef());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onClick).toEqual(instance.onToggle);
    });

    it('adds an onClick handler to a custom trigger', () => {
      const customTrigger = <Button>click me</Button>;
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const instance = new DropdownMenu({ toggle: customTrigger });
      const result = instance.renderToggle(React.createRef());
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.onClick).toEqual(instance.onToggle);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props.children).toContain('click me');
    });
  });

  describe('renderOverlay', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('sets correct properties on the overlay', () => {
      const instance = new DropdownMenu({ toggle: 'hello' });
      instance.state.isOverlayOpen = true;
      const result = instance.renderOverlay({
        ref: React.createRef(),
        placement: 'bottom-end',
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props['aria-hidden']).toEqual(false);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props['aria-expanded']).toEqual(true);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result.props['data-placement']).toEqual('bottom-end');
    });
  });
});
