import React from 'react';
import { shallow } from 'enzyme';

import TableBody from './TableBody';

describe('TableBody', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<TableBody />);
    }).not.toThrow();
  });
});
