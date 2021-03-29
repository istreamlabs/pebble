// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './DropdownItem' was resolved to '/Users/es... Remove this comment to see the full error message
import DropdownItem from './DropdownItem';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../LinkButton/LinkButton' was resolved ... Remove this comment to see the full error message
import LinkButton from '../../LinkButton/LinkButton';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('DropdownItem', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<DropdownItem>hello</DropdownItem>);
    }).not.toThrow();
  });

  it('renders a LinkButton if passed a href', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <DropdownItem href="/test">link</DropdownItem>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(LinkButton)).toHaveLength(1);
  });
});
