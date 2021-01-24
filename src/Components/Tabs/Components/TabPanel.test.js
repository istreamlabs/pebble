import React from 'react';
import { shallow } from 'enzyme';

import TabPanel from './TabPanel';

describe('Tab', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(
        <TabPanel id="test-panel" label="tab label" tabId="1">
          hello
        </TabPanel>,
      );
    }).not.toThrow();
  });
});
