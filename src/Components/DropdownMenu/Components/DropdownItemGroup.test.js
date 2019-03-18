import React from 'react';
import { shallow } from 'enzyme';
import DropdownItemGroup from './DropdownItemGroup';

describe('DropdownItemGroup', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DropdownItemGroup title="test group">hello</DropdownItemGroup>); }).not.toThrow();
  });

  it('passes in the className if passed a href', () => {
    const wrapper = shallow(<DropdownItemGroup title="test group" className="test-class">link</DropdownItemGroup>);
    expect(wrapper.prop('className')).toContain('test-class');
  });
});
