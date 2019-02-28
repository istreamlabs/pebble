import React from 'react';
import { mount, shallow } from 'enzyme';
import Frame from './Frame';
import Button from '../Button/Button';

const myMock = jest.fn();

const testFrame = (
  <Frame
    onNavigationToggle={myMock}
    title="test frame"
    isShowingMobileNav={false}
    navigation={<div>nav</div>}
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
});
