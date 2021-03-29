// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './LinkButton' was resolved to '/Users/esja... Remove this comment to see the full error message
import LinkButton from './LinkButton';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Link/Link' was resolved to '/Users/esja... Remove this comment to see the full error message
import Link from '../Link/Link';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('LinkButton', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<LinkButton href="#">hello</LinkButton>);
    }).not.toThrow();
  });

  it('renders child elements', () => {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    const children = <span>Hello, World!</span>;
    const linkButton = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkButton href="#">{children}</LinkButton>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.contains(children)).toBeTruthy();
  });

  it('id is passed into button', () => {
    const id = 'myId';
    const linkButton = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkButton href="#" id={id}>
        foo
      </LinkButton>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.find(Link).prop('id')).toBe(id);
  });

  it('disable renders <a> without a href', () => {
    const linkButton = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkButton href="#" disabled>
        test
      </LinkButton>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.find('a').prop('href')).toBeFalsy();
  });

  it('passes in class name', () => {
    const linkButton = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkButton href="#" className="my-class">
        foo
      </LinkButton>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.find(Link).prop('className')).toContain('btn');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.find(Link).prop('className')).toContain(
      'my-class',
    );
  });

  it('sets an aria-label on the button', () => {
    const label = 'This a label';
    const linkButton = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LinkButton href="#" accessibilityLabel={label}>
        foo
      </LinkButton>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(linkButton.find(Link).prop('aria-label')).toBe(label);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('icon', () => {
    it('sets the correct icon', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LinkButton href="#" icon="add-circle">
          link button
        </LinkButton>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('Icon').prop('name')).toBe('add-circle');
    });
    it('sets the correct icon size', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LinkButton href="#" icon="add-circle" size="large">
          link button
        </LinkButton>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('Icon').prop('size')).toBe(20);
    });
    it('it places icon to left of button text', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LinkButton href="#" icon="add-circle">
          link button
        </LinkButton>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        button
          .find('.btn-content')
          .children()
          .first()
          .prop('className'),
      ).toContain('btn-icon');
    });
    it('positions the iconAfterText on the right side of the label', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LinkButton href="#" iconAfterText="add-circle">
          link button
        </LinkButton>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        button
          .find('.btn-content')
          .children()
          .last()
          .prop('className'),
      ).toContain('btn-icon');
    });
    it('renders the 2 icons when set', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <LinkButton
          href="#"
          icon="add-circle"
          iconAfterText="add-circle"
        >
          add button
        </LinkButton>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('.btn-icon')).toHaveLength(2);
    });
  });
});
