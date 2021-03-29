// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Heading' was resolved to '/Users/esjaast... Remove this comment to see the full error message
import Heading, { parseSize, parseElement } from './Heading';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Heading', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('parseSize', () => {
    it('does nothing is already number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize(6, 1)).toEqual(6);
    });

    it('converts string number to number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize('6', 1)).toEqual(6);
    });

    it('return default size if larger than 8', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize('9', 1)).toEqual(1);
    });

    it('return default size if less than 1', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize('0', 1)).toEqual(1);
    });

    it('return default size if string is not a number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize('abc', 1)).toEqual(1);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('parseElement', () => {
    it('does nothing is already number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseElement(6)).toEqual(6);
    });

    it('converts string number to number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseElement('6')).toEqual(6);
    });

    it('return default size if larger than 8', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseElement('9')).toEqual(2);
    });

    it('return default size if less than 1', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseElement('0')).toEqual(2);
    });

    it('return default size if string is not a number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseElement('abc')).toEqual(2);
    });
  });

  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Heading>hello</Heading>);
    }).not.toThrow();
  });

  it('has correct defaults', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Heading.defaultProps.element).toEqual(2);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Heading.defaultProps.responsive).toEqual(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Heading.defaultProps.color).toEqual('neutral-700');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Heading className="myClass">test</Heading>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('h2').prop('className')).toContain('myClass');
  });

  it('size is set correctly', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Heading element={1} size={4}>
        hello
      </Heading>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('h1').prop('className')).toContain(
      'heading-4-responsive',
    );
  });

  it('responsive is set correctly', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Heading element={1} size={4} responsive={false}>
        hello
      </Heading>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('h1').prop('className')).toContain(
      'heading-4',
    );
  });
});
