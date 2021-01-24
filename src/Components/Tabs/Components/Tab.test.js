import React from 'react';
import { mount, shallow } from 'enzyme';

import Tab from './Tab';

describe('Tab', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Tab>hello</Tab>); }).not.toThrow();
  });

  describe('handleClick()', () => {
    it('passes in onClick', () => {
      const mockFunc = jest.fn();
      const wrapper = mount(<Tab onClick={mockFunc}>foo</Tab>);
      wrapper.find('button').simulate('click');
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });
});
