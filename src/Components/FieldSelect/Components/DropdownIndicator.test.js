import React from 'react';
import { shallow } from 'enzyme';

import DropdownIndicator from './DropdownIndicator';

describe('DropdownIndicator', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<DropdownIndicator />); }).not.toThrow();
  });
});
