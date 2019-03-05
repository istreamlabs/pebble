import React from 'react';
import { shallow } from 'enzyme';

import Tab from './Tab';

describe('Tab', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Tab>hello</Tab>); }).not.toThrow();
  });
});
