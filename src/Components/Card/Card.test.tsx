// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow, mount } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Card' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Card from './Card';
import Header from './Components/Header';
import Section from './Components/Section';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Card', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Card>hello</Card>);
    }).not.toThrow();
  });

  it('allows for custom classes', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Card className="myClass">test</Card>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Block).prop('className')).toContain(
      'myClass',
    );
  });

  it('wraps children in Section if sectioned', () => {
    const wrapper = mount(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card sectioned>
        {null}
        {false}
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>child 1</p>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>child 2</p>
      </Card>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find(Section)).toHaveLength(2);
  });

  it('sets the correct background and border for muted cards', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Card muted>test</Card>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('Block').prop('background')).toBe(
      'neutral-200',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('Block').prop('border')).toBeNull();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('header', () => {
    it('renders a header when a title is passed', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Card title="test-title">test</Card>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Header)).toHaveLength(1);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Header).html()).toContain('test-title');
    });
    it('renders a header when a title is passed', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card headerActions={<button type="button">test</button>}>
          test
        </Card>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Header)).toHaveLength(1);
    });
    it('does not get rendered if a title or headerActions is not passed', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<Card>test</Card>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.find(Header)).toHaveLength(0);
    });
  });
});
