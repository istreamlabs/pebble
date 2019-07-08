import React from 'react';
import { shallow } from 'enzyme';

import FieldToggle from './FieldToggle';

describe('FieldToggle', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<FieldToggle id="test" label="test toggle" />);
    }).not.toThrow();
  });
});
