import React from 'react';
import { mount, shallow } from 'enzyme';
import List from './List';

describe('List', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(
        <List>
          <li>item</li>
        </List>,
      );
    }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(
      <List>
        <li>item</li>
      </List>,
    );
    expect(wrapper.find('li').text()).toBe('item');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      <List className="myClass">
        <li>item</li>
      </List>,
    );
    expect(wrapper.find('ul').prop('className')).toContain('myClass');
  });

  it('renders ordered list', () => {
    const wrapper = shallow(
      <List ordered>
        <li>item</li>
      </List>,
    );
    expect(wrapper.find('ol').length).toBe(1);
  });

  it('sets the text size', () => {
    const wrapper = mount(<List size="1">test</List>);
    expect(
      wrapper.find('.text-container').prop('className'),
    ).toContain('fs-1');
  });
});
