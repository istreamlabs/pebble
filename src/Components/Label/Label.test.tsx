import React from 'react';
import { shallow } from 'enzyme';

import Label from './Label';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

describe('Label', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Label id="input">label</Label>);
    }).not.toThrow();
  });
  it('adds classes', () => {
    const wrapper = shallow(
      <Label id="input" disabled invalid required>
        label
      </Label>,
    );
    expect(
      ['neutral-500', 'red'].every(c =>
        wrapper.find('label').hasClass(c),
      ),
    ).toEqual(true);
    expect(wrapper.find('span').props().className).toBe(
      'required-input',
    );
  });
  it('renders a Visually Hidden label', () => {
    const wrapper = shallow(
      <Label id="input" hide>
        hidden label
      </Label>,
    );
    expect(wrapper.find(VisuallyHidden)).toHaveLength(1);
  });
});
