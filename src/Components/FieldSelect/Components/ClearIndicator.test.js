import React from 'react';
import { shallow } from 'enzyme';

import ClearIndicator from './ClearIndicator';

describe('ClearIndicator', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<ClearIndicator innerProps={{ ref: React.createRef() }} />); }).not.toThrow();
  });
});
