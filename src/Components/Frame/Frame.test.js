import React from 'react';
import FocusTrap from 'focus-trap-react';
import { shallow } from 'enzyme';

import { getBreakpointLayout } from '../../Utils';

import Frame from './Frame';
import MainMenu from '../MainMenu/MainMenu';
import TenantMenu from '../TenantMenu/TenantMenu';

const TENANTS = [
  {
    name: 'Acme Corporation',
    id: 'acme-prod',
    realm: 'production',
    url: 'https://www.istreamplanet.com',
  },
  {
    name: 'Cyberdyne Systems',
    id: 'cyberdyne-dev',
    realm: 'dev',
    url: 'https://www.istreamplanet.com',
  },
];

const navToggleMock = jest.fn();

const menu = [
  {
    label: 'Dashboard',
    icon: 'dashboard',
  },
];

const mainMenu = <MainMenu menu={menu} />;

const testFrame = (
  <Frame title="test frame" navigation={mainMenu}>
    body content
  </Frame>
);

describe('Frame', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(testFrame);
    }).not.toThrow();
  });

  describe('getFrameTitle', () => {
    it('returns currentTenant name and realm if currentTenant is set', () => {
      const instance = new Frame({
        currentTenant: {
          name: 'Cyberdyne Systems',
          id: 'cyberdyne-dev',
          realm: 'dev',
          url: 'https://www.istreamplanet.com',
        },
      });
      const result = shallow(instance.getFrameTitle());
      expect(result.text()).toContain('Cyberdyne Systems');
    });
  });

  describe('renderNavigation', () => {
    it('renders a navigation wrapped in a FocusTrap with active set to true, when passed a navigation', () => {
      const wrapper = shallow(testFrame);
      wrapper.setState({
        isShowingMobileNav: true,
        breakpoints: [true, true],
      });

      expect(wrapper.find(FocusTrap).exists()).toBe(true);
      expect(wrapper.find(FocusTrap).prop('active')).toBe(true);
    });

    it('does not set onShowTenantMenu prop of the MainMenu when there are NO tenants', () => {
      const wrapper = shallow(
        <Frame title="test" navigation={mainMenu} />,
      );

      expect(wrapper.find(MainMenu)).toHaveLength(1);
      expect(
        wrapper.find(MainMenu).prop('onShowTenantMenu'),
      ).toBeUndefined();
    });

    it('sets onShowTenantMenu prop of the MainMenu when there are tenants', () => {
      const wrapper = shallow(
        <Frame
          tenants={TENANTS}
          title="test"
          navigation={mainMenu}
        />,
      );

      expect(wrapper.find(MainMenu)).toHaveLength(1);
      expect(
        wrapper.find(MainMenu).prop('onShowTenantMenu'),
      ).toBeDefined();
    });
  });

  describe('renderTenantMenu', () => {
    it('returns a TenantMenu if showTenantMenu is true', () => {
      const wrapper = shallow(
        <Frame
          tenants={TENANTS}
          title="test"
          navigation={mainMenu}
        />,
      );
      wrapper.setState({
        showTenantMenu: true,
        breakpoints: [true, true],
      });

      expect(wrapper.find(TenantMenu)).toHaveLength(1);
    });
  });

  describe('handleNavigationToggle', () => {
    it('calls setState with opposite state', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      instance.setState = jest.fn();
      instance.handleNavigationToggle();

      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      expect(args[0]).toEqual({ isShowingMobileNav: true });
    });

    it('calls onNavigationToggle with opposite state', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      instance.setState = jest.fn();
      instance.handleNavigationToggle();

      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).toHaveBeenCalledWith(true);
    });

    it('does not call onNavigationToggle if not defined', () => {
      const instance = new Frame({
        onNavigationToggle: undefined,
      });

      instance.setState = jest.fn();
      instance.handleNavigationToggle();

      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).not.toHaveBeenCalledWith(true);
    });
  });

  describe('handleNavigationDismiss', () => {
    it('does nothing if already false', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });
      instance.setState = jest.fn();

      instance.handleNavigationDismiss();
      expect(instance.setState).not.toHaveBeenCalled();
    });

    it('calls setState if isShowingMobileNav is true', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      instance.state = {
        isSkipFocused: true,
        isShowingMobileNav: true,
      };

      instance.setState = jest.fn();

      instance.handleNavigationDismiss();

      const args = instance.setState.mock.calls[0];
      expect(args[0]).toEqual({ isShowingMobileNav: false });
      args[1]();
      expect(navToggleMock).toHaveBeenCalledWith(false);
    });

    it('calls setState if showTenantMenu is true', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      instance.state = {
        isSkipFocused: true,
        showTenantMenu: true,
      };

      instance.setState = jest.fn();

      instance.handleNavigationDismiss();

      const args = instance.setState.mock.calls[0];
      expect(args[0]).toEqual({ showTenantMenu: false });
    });

    it('calls onNavigationToggle', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      instance.state = {
        isSkipFocused: true,
        isShowingMobileNav: true,
      };

      instance.setState = jest.fn();

      instance.handleNavigationDismiss();

      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).toHaveBeenCalledWith(false);
    });

    it('does not call onNavigationToggle if it is not defined', () => {
      const instance = new Frame({
        onNavigationToggle: undefined,
      });

      instance.state = {
        isSkipFocused: true,
        isShowingMobileNav: true,
      };

      instance.setState = jest.fn();

      instance.handleNavigationDismiss();
      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).not.toHaveBeenCalledWith(false);
    });
  });

  describe('handleTenantMenuToggle', () => {
    it('calls setState with opposite state', () => {
      const instance = new Frame();

      instance.setState = jest.fn();
      instance.handleTenantMenuToggle();

      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      expect(args[0]).toEqual({ showTenantMenu: true });
    });
  });

  it('should cleanup event listener when unmounted', () => {
    document.removeEventListener = jest.fn();
    const instance = new Frame({});
    instance.componentWillUnmount();
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      instance.handleNavKeydown,
      false,
    );
  });

  describe('handleOnClick', () => {
    it('does nothing if target is not a tag', () => {
      const instance = new Frame({});
      const spy = jest
        .spyOn(instance, 'handleNavigationDismiss')
        .mockImplementation(() => {});
      instance.handleOnClick({
        target: { tagName: 'div', href: '/foo' },
      });
      expect(spy).not.toHaveBeenCalled();
    });
    it('does nothing if target does not have href', () => {
      const instance = new Frame({});
      const spy = jest
        .spyOn(instance, 'handleNavigationDismiss')
        .mockImplementation(() => {});
      instance.handleOnClick({ target: { tagName: 'a' } });
      expect(spy).not.toHaveBeenCalled();
    });
    it('dismisses nav if click was on something that would navigate', () => {
      const instance = new Frame({});
      const spy = jest
        .spyOn(instance, 'handleNavigationDismiss')
        .mockImplementation(() => {});
      instance.handleOnClick({
        target: { tagName: 'a', href: '/foo' },
      });
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSkipToMain', () => {
    it('sets tabindex and focus on ref', () => {
      const instance = new Frame({});
      const mock = {
        current: {
          setAttribute: jest.fn(),
          focus: jest.fn(),
        },
      };
      instance.mainContent = mock;

      instance.handleSkipToMain();

      expect(mock.current.setAttribute).toHaveBeenCalledWith(
        'tabindex',
        '-1',
      );
      expect(mock.current.focus).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleBlurMain', () => {
    it('removes tab index', () => {
      const instance = new Frame({});
      const mock = {
        current: {
          removeAttribute: jest.fn(),
        },
      };
      instance.mainContent = mock;

      instance.handleBlurMain();

      expect(mock.current.removeAttribute).toHaveBeenCalledWith(
        'tabindex',
      );
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
      expect(instance.setState).toBeCalledWith({
        isSkipFocused: true,
      });
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
      expect(instance.setState).toBeCalledWith({
        isSkipFocused: false,
      });
    });
  });

  describe('handleResize', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls setState', () => {
      const instance = new Frame();
      instance.setState = jest.fn();
      instance.handleResize();
      expect(instance.setState).toBeCalledWith({
        breakpoints: getBreakpointLayout(),
      });
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
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(
        0,
      );

      instance.handleNavKeydown({ event: 'keydown', key: 'Escape' });
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(
        1,
      );
    });
  });

  describe('skip-to-content', () => {
    it('adds focus class to skip-to-content button when focused', () => {
      const wrapper = shallow(testFrame);
      wrapper.setState({ isSkipFocused: true });
      expect(wrapper.find('.skip').prop('className')).toContain(
        'focused',
      );
    });

    it('adds focus class to skip-to-content button when focused', () => {
      const wrapper = shallow(testFrame);
      wrapper.instance().handleFocus();
      expect(wrapper.find('.skip').prop('className')).toBe(
        'skip focused',
      );
    });
  });
});
