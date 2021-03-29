// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow, mount } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Header' was resolved to '/Users/esjaasta... Remove this comment to see the full error message
import Header from './Header';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../Button/Button' was resolved to '/... Remove this comment to see the full error message
import Button from '../../../Button/Button';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Header', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Header>hello</Header>);
    }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header className="myClass">test</Header>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('Block').prop('className')).toContain(
      'myClass',
    );
  });

  it('renders header actions', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Header title="title" actions={<Button>action button</Button>}>
        test
      </Header>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.contains(Button)).toBeTruthy();
  });
});
