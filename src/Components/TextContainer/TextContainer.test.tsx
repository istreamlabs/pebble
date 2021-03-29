// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './TextContainer' was resolved to '/Users/e... Remove this comment to see the full error message
import TextContainer from './TextContainer';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('TextContainer', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<TextContainer>hello</TextContainer>);
    }).not.toThrow();
  });

  it('renders children', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TextContainer>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <p>Hello Pebble</p>
      </TextContainer>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('p').text()).toBe('Hello Pebble');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <TextContainer className="myClass">test</TextContainer>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('div').prop('className')).toContain(
      'myClass',
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('text size', () => {
    it('sets the text size', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextContainer size="1">test</TextContainer>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('fs-1');
    });
    it('sets the default text size', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const wrapper = shallow(<TextContainer>test</TextContainer>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).toContain('fs-5');
    });
    it('sets the default text size', () => {
      const wrapper = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <TextContainer size={null}>test</TextContainer>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(wrapper.prop('className')).not.toContain('fs');
    });
  });
});
