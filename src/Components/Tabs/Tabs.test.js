import React from 'react';
import { shallow } from 'enzyme';

import Tabs from './Tabs';
import Tab from './Components/Tab';
import TabPanel from './Components/TabPanel';

const tabs = [
  {
    id: 'one',
    label: 'One',
    panelId: 'one-content',
    content: 'one content',
  },
  {
    id: 'two',
    label: 'Two',
    panelId: 'two-content',
    content: 'two content',
  },
];

describe('Tabs', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(
        <Tabs selectedId="one" tabs={tabs}>
          hello
        </Tabs>,
      );
    }).not.toThrow();
  });

  it('renders Tabs prop array', () => {
    expect(
      shallow(<Tabs selectedId="one" tabs={tabs} />).find(Tab),
    ).toHaveLength(2);
  });

  describe('isOverflowActive', () => {
    const noOverflow = () => {
      return {
        offsetHeight: 2,
        scrollHeight: 1,
      };
    };

    const yesOverflow = () => {
      return {
        offsetHeight: 1,
        scrollHeight: 2,
      };
    };

    it('returns false when offsetHeight > scrollHeight', () => {
      const wrapper = shallow(<Tabs tabs={tabs} selectedId="two" />);
      expect(wrapper.instance().isOverflowActive(noOverflow())).toBe(
        false,
      );
    });

    it('returns true when offsetHeight < scrollHeight', () => {
      const wrapper = shallow(<Tabs tabs={tabs} selectedId="two" />);
      expect(wrapper.instance().isOverflowActive(yesOverflow())).toBe(
        true,
      );
    });
  });

  describe('getTabsMarkup', () => {
    it('selects the selected Tab', () => {
      const wrapper = shallow(<Tabs tabs={tabs} selectedId="two" />);
      const TabsArray = wrapper.find(Tab);
      expect(TabsArray.at(1).prop('isSelected')).toBe(true);
    });

    it('selects the first Tab by default', () => {
      const wrapper = shallow(<Tabs tabs={tabs} />);
      const TabsArray = wrapper.find(Tab);
      expect(TabsArray.at(0).prop('isSelected')).toBe(true);
    });

    it('selects the selected Tab when passed children', () => {
      const wrapper = shallow(
        <Tabs selectedId="panel-2">
          <TabPanel id="1" label="1" tabId="panel-1">
            panel 1
          </TabPanel>
          <TabPanel id="2" label="2" tabId="panel-2">
            panel 1
          </TabPanel>
        </Tabs>,
      );
      expect(wrapper.find('#panel-2').prop('isSelected')).toBe(true);
    });

    it('selects the first Tab by default passed children', () => {
      const wrapper = shallow(
        <Tabs>
          <TabPanel id="1" label="1" tabId="panel-1">
            panel 1
          </TabPanel>
          <TabPanel id="2" label="2" tabId="panel-2">
            panel 1
          </TabPanel>
        </Tabs>,
      );
      const TabsArray = wrapper.find(Tab);
      expect(TabsArray.at(0).prop('isSelected')).toBe(true);
    });
  });
});
