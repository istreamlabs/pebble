import React from 'react';
import FocusTrap from 'focus-trap-react';
import { mount, shallow } from 'enzyme';
import Frame from './Frame';
import MainMenu from '../MainMenu/MainMenu';

const navToggleMock = jest.fn();

const menu = [
  {
    id: '1',
    label: 'Dashboard',
    description: '',
    href: '/',
    icon: 'dashboard'
  },
];

const mainMenu = <MainMenu menu={menu} />;

const testFrame = (
  <Frame
    onNavigationToggle={navToggleMock}
    title="test frame"
    isShowingMobileNav={false}
    navigation={mainMenu}
  >
    body content
  </Frame>
);

const testFrameWithMobile = (
  <Frame
    onNavigationToggle={navToggleMock}
    title="test frame"
    isShowingMobileNav
    navigation={mainMenu}
  >
    body content
  </Frame>
);

describe('Frame', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    expect(() => { shallow(testFrame); }).not.toThrow();
  });

  it('renders a navigation wrapped in a FocusTrap with active set to false, when passed a navigation', () => {
    const wrapper = shallow(testFrame);

    expect(wrapper.find(FocusTrap).exists()).toBe(true);
    expect(wrapper.find(FocusTrap).prop('active')).toBe(false);
  });

  it('renders a navigation wrapped in a FocusTrap with active set to true, when passed a navigation', () => {
    const wrapper = shallow(testFrameWithMobile);

    expect(wrapper.find(FocusTrap).exists()).toBe(true);
    expect(wrapper.find(FocusTrap).prop('active')).toBe(true);
  });

  it('onNavigationToggle is called when isShowingMobileNav is true', () => {
    const instance = new Frame({
      onNavigationToggle: navToggleMock,
      isShowingMobileNav: true
    });

    instance.handleNavigationDismiss();
    expect(navToggleMock).toHaveBeenCalled();
  });

  it('onNavigationToggle is not called when isShowingMobileNav is false', () => {
    const instance = new Frame({
      onNavigationToggle: navToggleMock,
      isShowingMobileNav: false
    });

    instance.handleNavigationDismiss();
    expect(navToggleMock).not.toHaveBeenCalled();
  });

  it('should cleanup event listener when unmounted', () => {
    document.removeEventListener = jest.fn();

    const wrapper = mount(testFrame);

    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalled();
  });

  describe('handleSkipToMain', () => {
    it('sets tabindex and focus on ref', () => {
      const instance = new Frame({});
      const mock = {
        current: {
          setAttribute: jest.fn(),
          focus: jest.fn()
        }
      };
      instance.mainContent = mock;

      instance.handleSkipToMain();

      expect(mock.current.setAttribute).toHaveBeenCalledWith('tabindex', '-1');
      expect(mock.current.focus).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleBlurMain', () => {
    it('removes tab index', () => {
      const instance = new Frame({});
      const mock = {
        current: {
          removeAttribute: jest.fn()
        }
      };
      instance.mainContent = mock;

      instance.handleBlurMain();

      expect(mock.current.removeAttribute).toHaveBeenCalledWith('tabindex');
    });
  });

  describe('handleFocus', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls setState', () => {
      const instance = new Frame();
      instance.setState = jest.fn();
      instance.handleFocus();
      expect(instance.setState).toBeCalledWith({ isSkipFocused: true });
    });
  });

  describe('handleBlur', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls setState', () => {
      const instance = new Frame();
      instance.setState = jest.fn();
      instance.handleBlur();
      expect(instance.setState).toBeCalledWith({ isSkipFocused: false });
    });
  });

  describe('handleNavKeydown', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls handleNavigationDismiss when Escape key is pressed', () => {
      const instance = new Frame();
      instance.handleNavigationDismiss = jest.fn();

      instance.handleNavKeydown({ event: 'keydown', key: 'Enter' });
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(0);

      instance.handleNavKeydown({ event: 'keydown', key: 'Escape' });
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(1);
    });
  });

  describe('skip-to-content', () => {
    it('adds focus class to skip-to-content button when focused', () => {
      const wrapper = shallow(testFrame);
      wrapper.setState({ isSkipFocused: true });
      expect(wrapper.find('.skip').prop('className')).toContain('focused');
    });

    it('adds focus class to skip-to-content button when focused', () => {
      const wrapper = shallow(testFrame);
      wrapper.instance().handleFocus();
      expect(wrapper.find('.skip').prop('className')).toBe('skip focused');
    });
  });
});
