import React from 'react';
import { shallow } from 'enzyme';

import Breadcrumb from './Breadcrumb';

describe('Breadcrumb', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Breadcrumb />); }).not.toThrow();
  });
});
