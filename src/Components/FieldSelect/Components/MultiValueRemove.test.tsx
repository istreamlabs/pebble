import React from 'react';
import { shallow } from 'enzyme';

import MultiValueRemove from './MultiValueRemove';

describe('MultiValueRemove', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<MultiValueRemove />);
    }).not.toThrow();
  });
});
