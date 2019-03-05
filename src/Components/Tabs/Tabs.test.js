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
        { id: 'overview', content: 'overview-content' },
        { id: 'metadata', content: 'metadata-content' }
      ]}
      >
      test
      </Tabs>
    ).find(Tab)).toHaveLength(2);
  });
});
