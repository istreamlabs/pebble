import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import Button from '../../../Button/Button';

describe('Header', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Header>hello</Header>); }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Header className="myClass">test</Header>);
    expect(wrapper.find('div').prop('className')).toContain('myClass');
  });

  it('renders header actions', () => {
    const wrapper = mount(<Header title="title" actions={<Button>action button</Button>}>test</Header>);
    expect(wrapper.contains(Button)).toBeTruthy();
  });
});
