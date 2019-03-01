import React from 'react';
import FocusTrap from 'focus-trap-react';
import { mount, shallow } from 'enzyme';
import Frame from './Frame';
import Button from '../Button/Button';
import MainMenu from '../MainMenu/MainMenu';

const myMock = jest.fn();

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
    onNavigationToggle={myMock}
    title="test frame"
    isShowingMobileNav={false}
    navigation={mainMenu}
  >
    body content
  </Frame>
);

const testFrameWithMobile = (
  <Frame
    onNavigationToggle={myMock}
    title="test frame"
    isShowingMobileNav
    navigation={mainMenu}
  >
    body content
  </Frame>
);

describe('Frame', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(testFrame); }).not.toThrow();
  });

  it('renders a skip to content button', () => {
    const wrapper = mount(testFrame);
    expect(wrapper.find(Button).first().text()).toBe('Skip to content');
  });

  it('it hides the mobile nav by default', () => {
    const wrapper = mount(testFrame);
    expect(wrapper.prop('isShowingMobileNav')).toBe(false);
  });

  it('opens the mobile nav when isShowingMobileNav is true', () => {
    const wrapper = shallow(testFrameWithMobile);
    expect(wrapper.find('.navigation').prop('className')).toContain('open');
  });

  it('sets FocusTrap to active when isShowingMobileNav is true', () => {
    const wrapper = shallow(testFrameWithMobile);
    expect(wrapper.find(FocusTrap).prop('active')).toBe(true);
  });

  it('onNavigationToggle is called when close nav button is clicked', () => {
    const wrapper = mount(testFrameWithMobile);
    wrapper.find('button.frame-close-nav').simulate('click');
    expect(myMock).toHaveBeenCalledTimes(1);
  });

  describe('skip-to-content', () => {
    it('skips to the main element when clicked', () => {
      const wrapper = shallow(testFrame);
      wrapper.instance().handleSkipToContent();
    });

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

    it('removes focus class to skip-to-content button when focused', () => {
      const wrapper = shallow(testFrame);
      wrapper.instance().handleBlur();
      expect(wrapper.find('.skip').prop('className')).toBe('skip');
    });
  });
});
