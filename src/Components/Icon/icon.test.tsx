// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Icon' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Icon, { parseSize } from './Icon';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Icon', () => {
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('parseSize', () => {
    it('does nothing is already number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize(6)).toEqual(6);
    });

    it('converts string number to number', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize('6')).toEqual(6);
    });

    it('returns default size if nothing is passed', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(parseSize()).toEqual(16);
    });
  });

  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Icon name="add-circle" />);
    }).not.toThrow();
  });

  it('has correct defaults', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Icon.defaultProps.size).toEqual(16);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(Icon.defaultProps.ariaHidden).toEqual(true);
  });

  it('has case insensitive name', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Icon name="Add-Circle" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('className')).not.toContain(
      'not-found',
    );
  });

  it('renders height and width as 16px by default', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Icon name="add-circle" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('height')).toEqual('16px');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('width')).toEqual('16px');
  });

  it('uses size to set height and width', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Icon name="add-circle" size={20} />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('height')).toEqual('20px');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('width')).toEqual('20px');
  });

  it('renders a title tag when accessibilityLabel set', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Icon name="add-circle" accessibilityLabel="assistive text" />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.html()).toContain('<title>assistive text</title>');
  });

  it('renders aria-hidden tags correctly', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const hidden = shallow(<Icon name="add-circle" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(hidden.find('svg').prop('aria-hidden')).toEqual(true);
    const shown = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Icon name="add-circle" ariaHidden={false} />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(shown.find('svg').prop('aria-hidden')).toEqual(false);
  });

  it('sets the viewbox on svg', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Icon name="add-circle" accessibilityLabel="assistive text" />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('viewBox')).toEqual('0 0 16 16');
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Icon name="add-circle" className="myClass" />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('className')).toEqual(
      'icon myClass',
    );
  });

  it('returns a special icon if the name is bad', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<Icon name="" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').prop('className')).toContain(
      'not-found',
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.find('svg').html()).toContain('path');
  });
});
