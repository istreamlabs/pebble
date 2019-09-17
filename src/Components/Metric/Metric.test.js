import React from 'react';
import { shallow } from 'enzyme';

import Metric from './Metric';

describe('Metric', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Metric value={54321} title="test" />);
    }).not.toThrow();
  });
});
