import React from 'react';
import { shallow } from 'enzyme';

import FormLayoutRow from './FormLayoutRow';

describe('FormLayoutRow', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<FormLayoutRow />); }).not.toThrow();
  });

  it('tightens spacing between fields', () => {
    const wrapper = shallow(<FormLayoutRow tight />);
    expect(wrapper.prop('itemSpacing')).toBe(3);
  });

  it('adds a width of 100% to children if the child does not already have a width', () => {
    const wrapper = shallow(<FormLayoutRow><div /></FormLayoutRow>);
    expect(wrapper.find('div').prop('className')).toBe('w-100');
  });

  it('does not apply a width of 100% to children if the child has a width set', () => {
    const wrapper = shallow(<FormLayoutRow><div width="5" /></FormLayoutRow>);
    expect(wrapper.find('div').prop('className')).toBe('');
  });
});
