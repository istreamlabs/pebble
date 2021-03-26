import React from 'react';
import TabPanel from './TabPanel';
import { shallow } from 'enzyme';

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
