// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';
import { useMobileLayout } from '../../Hooks';

// @ts-expect-error ts-migrate(6142) FIXME: Module './TenantMenu' was resolved to '/Users/esja... Remove this comment to see the full error message
import TenantMenu from './TenantMenu';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
import { TENANTS } from '../../demo/data';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
jest.mock('../../Hooks/UseMobileLayout');

describe('TenantMenu', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    useMobileLayout.mockClear();
    useMobileLayout.mockImplementation(() => false);
  });

  it('renders without crashing', () => {
    expect(() => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      shallow(<TenantMenu />);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    }).not.toThrow();
  });

  describe('renderHeader', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('adds add organization button when onAddTenant is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        <TenantMenu tenants={TENANTS} onAddTenant={mock} />,
      );
      expect(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
        wrapper.find({ accessibilityLabel: 'add organization' }),
      ).toHaveLength(1);
    });

    it('adds close organization menu button when onCloseTenantMenu is defined', () => {
      const mock = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      expect(
        wrapper.find({
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          accessibilityLabel: 'close organization menu',
        }),
      ).toHaveLength(1);
    });

    it('sets the close organization menu icon to close if viewed in mobile sized viewport', () => {
      const mock = jest.fn();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      useMobileLayout.mockImplementation(() => true);
      const wrapper = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Button).prop('icon')).toBe('close');
    });

    it('sets the close organization menu icon to nav-left if viewed in desktop sized viewport', () => {
      const mock = jest.fn();
      const wrapper = mount(
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        <TenantMenu tenants={TENANTS} onCloseTenantMenu={mock} />,
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      );
      expect(wrapper.find(Button).prop('icon')).toBe('nav-left');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    });
  });

  describe('renderTenants', () => {
    // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
    it('renders empty tenant list', () => {
      const wrapper = mount(
        <TenantMenu
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          emptyMessage={<div id="emptyMessage">i am empty</div>}
        />,
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      );
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      expect(wrapper.find('#emptyMessage')).toHaveLength(1);
    });
    it('renders one tenant', () => {
      const wrapper = mount(
        <TenantMenu
          tenants={[
            {
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              name: 'Genco Pura Olive Oil Company',
              id: 'genco-prod',
              realm: 'production',
              url: 'https://www.istreamplanet.com',
            },
          ]}
        />,
      );
      expect(wrapper.find('li')).toHaveLength(1);
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('renders correct number of tenants when passed more than one', () => {
      const wrapper = mount(<TenantMenu tenants={TENANTS} />);
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      expect(wrapper.find('li')).toHaveLength(13);
    });
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    it('adds the currently selected organization Icon', () => {
      const wrapper = mount(
        <TenantMenu currentTenantId="genco-prod" tenants={TENANTS} />,
      );
      expect(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        wrapper.find({
          // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
          accessibilityLabel: 'currently selected organization',
        }),
      ).toHaveLength(1);
    });
  });
});
