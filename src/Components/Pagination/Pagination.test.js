import React from 'react';
import { shallow } from 'enzyme';

import Pagination from './Pagination';

describe('Pagination', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Pagination />); }).not.toThrow();
  });
});
