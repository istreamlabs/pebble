import React from 'react';
import { shallow } from 'enzyme';
import DropdownMenuSeparator from './DropdownMenuSeparator';

describe('DropdownItemGroup', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DropdownMenuSeparator />); }).not.toThrow();
  });

  it('passes in the className if passed a href', () => {
    const wrapper = shallow(<DropdownMenuSeparator className="test-class" />);
    expect(wrapper.prop('className')).toContain('test-class');
  });
});
