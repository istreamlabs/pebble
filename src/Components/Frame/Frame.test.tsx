// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Frame' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Frame from './Frame';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../MainMenu/MainMenu' was resolved to '/Us... Remove this comment to see the full error message
import MainMenu from '../MainMenu/MainMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Overlay/Overlay' was resolved to '/User... Remove this comment to see the full error message
import Overlay from '../Overlay/Overlay';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../TenantMenu/TenantMenu' was resolved to ... Remove this comment to see the full error message
import TenantMenu from '../TenantMenu/TenantMenu';
import { getBreakpointLayout } from '../../Utils';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.

jest.mock('../../Utils/GetBreakpointLayout');

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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    label: 'Dashboard',
    icon: 'dashboard',
  },
];

const mainMenu = <MainMenu menu={menu} />;

const testFrame = (
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <Frame title="test frame" navigation={mainMenu}>
    body content
  </Frame>
);

describe('Frame', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    jest.resetAllMocks();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    getBreakpointLayout.mockClear();
    getBreakpointLayout.mockImplementation(() => [false, false]);
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(testFrame);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  describe('getFrameTitle', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
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

    it('includes title if set', () => {
      const instance = new Frame({
        title: 'hello world',
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      });
      const result = instance.getFrameTitle();
      expect(result).toEqual('hello world');
    });

    it('includes title if set', () => {
      const instance = new Frame({
        currentTenant: null,
        title: null,
      });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const result = instance.getFrameTitle();
      expect(result).toBeUndefined();
    });
  });

  describe('renderMainMenu', () => {
    it('renders a navigation wrapped in a FocusTrap with active set to true, when passed a navigation', () => {
      const wrapper = shallow(testFrame);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      wrapper.setState({
        isShowingMobileNav: true,
        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
        isMobile: true,
      });

      expect(wrapper.find(FocusTrap).exists()).toBe(true);
      expect(wrapper.find(FocusTrap).prop('active')).toBe(true);
    });

    it('sets onShowTenantMenu prop of the MainMenu when there are tenants', () => {
      const wrapper = shallow(
        <Frame
          tenants={TENANTS}
          currentTenant={{
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            name: 'Cyberdyne Systems',
            // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
            id: 'cyberdyne-dev',
            realm: 'dev',
            url: 'https://www.istreamplanet.com',
          }}
          title="test"
          navigation={mainMenu}
        />,
      );

      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.find(MainMenu)).toHaveLength(1);
      expect(
        wrapper.find(MainMenu).prop('onShowTenantMenu'),
      ).toBeDefined();
      expect(
        wrapper.find(MainMenu).props('mobileHeaderContent'),
      ).toBeDefined();
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('sets mobileHeaderContent', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        <Frame title="test" navigation={mainMenu} />,
      );

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(MainMenu)).toHaveLength(1);
      expect(wrapper.find(MainMenu).prop('title')).toBe('test');
      expect(
        wrapper.find(MainMenu).props('mobileHeaderContent'),
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      ).toBeDefined();
    });
  });

  describe('renderTenantMenu', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('returns a TenantMenu if showTenantMenu is true', () => {
      const wrapper = shallow(
        <Frame
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          tenants={TENANTS}
          title="test"
          navigation={mainMenu}
        />,
      );
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      wrapper.setState({
        showTenantMenu: true,
        isMobile: true,
      });

      expect(wrapper.find(TenantMenu)).toHaveLength(1);
    });
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  });

  describe('handleNavigationToggle', () => {
    it('calls setState with opposite state', () => {
      const instance = new Frame({
        onNavigationToggle: navToggleMock,
      });

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      instance.setState = jest.fn();
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      instance.handleNavigationToggle();

      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      expect(args[0]).toEqual({ isShowingMobileNav: true });
    });

    it('calls onNavigationToggle with opposite state', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const instance = new Frame({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        onNavigationToggle: navToggleMock,
      });

      instance.setState = jest.fn();
      instance.handleNavigationToggle();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toHaveBeenCalled();

      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).toHaveBeenCalledWith(true);
    });

    it('does not call onNavigationToggle if not defined', () => {
      const instance = new Frame({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        onNavigationToggle: undefined,
      });

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      instance.setState = jest.fn();
      instance.handleNavigationToggle();

      expect(instance.setState).toHaveBeenCalled();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const args = instance.setState.mock.calls[0];
      args[1]();
      expect(navToggleMock).not.toHaveBeenCalledWith(true);
    });
  });

  describe('handleNavigationDismiss', () => {
    it('does nothing if already false', () => {
      const instance = new Frame({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        onNavigationToggle: navToggleMock,
      });
      instance.setState = jest.fn();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      instance.handleNavigationDismiss();
      expect(instance.setState).not.toHaveBeenCalled();
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('calls setState if isShowingMobileNav is true', () => {
      const instance = new Frame({
        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
        onNavigationToggle: navToggleMock,
      });

      instance.state = {
        isSkipFocused: true,
        isShowingMobileNav: true,
      };

      instance.setState = jest.fn();

      instance.handleNavigationDismiss();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const args = instance.setState.mock.calls[0];
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.handleNavigationDismiss();

      const args = instance.setState.mock.calls[0];
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(args[0]).toEqual({ showTenantMenu: false });
    });

    it('calls onNavigationToggle', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    it('does not call onNavigationToggle if it is not defined', () => {
      const instance = new Frame({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  describe('handleTenantMenuToggle', () => {
    it('calls setState with opposite state', () => {
      const instance = new Frame();

      instance.setState = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    expect(document.removeEventListener).toHaveBeenCalledWith(
      'keydown',
      instance.handleNavKeydown,
      false,
    );
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
  describe('renderOverlay', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('returns null if showTenantMenu and isMobile is false', () => {
      const instance = new Frame({ navigation: mainMenu });
      instance.state = {
        isMobile: false,
        isShowingMobileNav: true,
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        showTenantMenu: false,
      };
      const result = instance.renderOverlay();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(result).toBeUndefined();
    });
    it('returns an Overlay if showTenantMenu true', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      const instance = new Frame();
      instance.state = {
        showTenantMenu: true,
      };
      const result = instance.renderOverlay();
      expect(result.type).toEqual(Overlay);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    });
    it('returns an Overlay if navigation and isShowingMobileNav', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      getBreakpointLayout.mockImplementation(() => [true, true]);
      const instance = new Frame();
      instance.state = {
        // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
        isMobile: true,
        isShowingMobileNav: true,
        showTenantMenu: false,
      };
      const result = instance.renderOverlay();
      expect(result.type).toEqual(Overlay);
    });
  });

  describe('handleOnClick', () => {
    it('does nothing if target is not a tag', () => {
      const instance = new Frame({});
      const spy = jest
        .spyOn(instance, 'handleNavigationDismiss')
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        .mockImplementation(() => {});
      instance.handleOnClick({
        target: { tagName: 'div', href: '/foo' },
      });
      expect(spy).not.toHaveBeenCalled();
    });
    it('does nothing if target does not have href', () => {
      const instance = new Frame({});
      const spy = jest
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        target: { tagName: 'a', href: '/foo' },
      });
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      expect(spy).toHaveBeenCalled();
    });
  });

  describe('handleSkipToMain', () => {
    it('sets tabindex and focus on ref', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const instance = new Frame({});
      const mock = {
        current: {
          setAttribute: jest.fn(),
          focus: jest.fn(),
        },
      };
      instance.mainContent = mock;

      instance.handleSkipToMain();

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(mock.current.setAttribute).toHaveBeenCalledWith(
        'tabindex',
        '-1',
      );
      expect(mock.current.focus).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleBlurMain', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    it('removes tab index', () => {
      const instance = new Frame({});
      const mock = {
        current: {
          removeAttribute: jest.fn(),
        },
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      instance.mainContent = mock;

      instance.handleBlurMain();

      expect(mock.current.removeAttribute).toHaveBeenCalledWith(
        'tabindex',
      );
    });
  });

  describe('handleFocus', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls setState', () => {
      const instance = new Frame();
      instance.setState = jest.fn();
      instance.handleFocus();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.setState).toBeCalledWith({
        isSkipFocused: true,
      });
    });
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  });

  describe('handleBlur', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls setState', () => {
      const instance = new Frame();
      instance.setState = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.handleBlur();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      expect(instance.setState).toBeCalledWith({
        isSkipFocused: false,
      });
    });
  });

  describe('handleResize', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('calls setState if isMobile is false but getBreakpointLayout returns isPhone', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      getBreakpointLayout.mockImplementation(() => [true, false]);
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      const instance = new Frame();
      instance.state = {
        isMobile: false,
      };
      instance.setState = jest.fn();

      instance.handleResize();
      expect(instance.setState).toHaveBeenCalledWith({
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        isMobile: true,
      });
    });
    it('calls setState if isMobile is false but getBreakpointLayout returns isTablet', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      getBreakpointLayout.mockImplementation(() => [false, true]);
      const instance = new Frame();
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      instance.state = {
        isMobile: false,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
      };
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      instance.setState = jest.fn();

      instance.handleResize();
      expect(instance.setState).toHaveBeenCalledWith({
        isMobile: true,
      });
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    it('does not setState if getBreakpointLayout returns true and isMobile is true', () => {
      getBreakpointLayout.mockImplementation(() => [false, true]);
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      const instance = new Frame();
      instance.state = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
        isMobile: true,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      };
      instance.setState = jest.fn();

      instance.handleResize();
      expect(instance.setState).not.toHaveBeenCalled();
    });
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  describe('handleNavKeydown', () => {
    beforeEach(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      jest.restoreAllMocks();
    });

    it('calls handleNavigationDismiss when Escape key is pressed', () => {
      // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
      const instance = new Frame();
      instance.handleNavigationDismiss = jest.fn();

      instance.handleNavKeydown({ event: 'keydown', key: 'Enter' });
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(
        0,
      );

      instance.handleNavKeydown({ event: 'keydown', key: 'Escape' });
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      expect(instance.handleNavigationDismiss).toHaveBeenCalledTimes(
        1,
      );
    });
  });

  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      wrapper.instance().handleFocus();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('.skip').prop('className')).toBe(
        'skip focused',
      );
    });
  });
});
// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
