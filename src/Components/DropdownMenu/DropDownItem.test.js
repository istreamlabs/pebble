import React from 'react';
import { shallow } from 'enzyme';
import DropdownItem from './DropdownItem';
import LinkButton from '../LinkButton/LinkButton';

describe('DropdownItem', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DropdownItem>hello</DropdownItem>); }).not.toThrow();
  });

  it('renders a LinkButton if passed a href', () => {
    const wrapper = shallow(<DropdownItem href="/test">link</DropdownItem>);
    expect(wrapper.find(LinkButton)).toHaveLength(1);
  });
});
