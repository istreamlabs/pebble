import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import Tab from './Tab';

describe('Tabs', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Tabs tabs={[]}>hello</Tabs>); }).not.toThrow();
  });

  it('renders Tabs prop array', () => {
    expect(shallow(
      <Tabs tabs={[
        { id: 1, content: 'tab 1' },
        { id: 2, content: 'tab 2' }
      ]}
      >
      test
      </Tabs>
    ).find(Tab)).toHaveLength(2);
  });
});
