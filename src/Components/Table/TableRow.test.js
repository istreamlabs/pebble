import React from 'react';
import { shallow } from 'enzyme';

import TableRow from './TableRow';

describe('TableRow', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<TableRow />); }).not.toThrow();
  });
});
