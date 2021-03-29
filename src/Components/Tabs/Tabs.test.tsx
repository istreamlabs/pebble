// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Tabs' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Tabs from './Tabs';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Tab' was resolved to '/Users/... Remove this comment to see the full error message
import Tab from './Components/Tab';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/TabPanel' was resolved to '/U... Remove this comment to see the full error message
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

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Tabs', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs selectedId="one" tabs={tabs}>
          hello
        </Tabs>,
      );
    }).not.toThrow();
  });

  it('renders Tabs prop array', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Tabs selectedId="one" tabs={tabs} />).find(Tab),
    ).toHaveLength(2);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('getTabsMarkup', () => {
    it('selects the selected Tab', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Tabs tabs={tabs} selectedId="two" />);
      const TabsArray = wrapper.find(Tab);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(TabsArray.at(1).prop('isSelected')).toBe(true);
    });

    it('selects the first Tab by default', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Tabs tabs={tabs} />);
      const TabsArray = wrapper.find(Tab);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(TabsArray.at(0).prop('isSelected')).toBe(true);
    });

    it('selects the selected Tab when passed children', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs selectedId="panel-2">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TabPanel id="1" label="1" tabId="panel-1">
            panel 1
          </TabPanel>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TabPanel id="2" label="2" tabId="panel-2">
            panel 1
          </TabPanel>
        </Tabs>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find('#panel-2').prop('isSelected')).toBe(true);
    });

    it('selects the first Tab by default passed children', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Tabs>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TabPanel id="1" label="1" tabId="panel-1">
            panel 1
          </TabPanel>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <TabPanel id="2" label="2" tabId="panel-2">
            panel 1
          </TabPanel>
        </Tabs>,
      );
      const TabsArray = wrapper.find(Tab);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(TabsArray.at(0).prop('isSelected')).toBe(true);
    });
  });
});
