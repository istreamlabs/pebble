// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { mount, shallow } from 'enzyme';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'focus-trap-react' or its corre... Remove this comment to see the full error message
import FocusTrap from 'focus-trap-react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Modal' was resolved to '/Users/esjaastad... Remove this comment to see the full error message
import Modal from './Modal';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../ButtonGroup/ButtonGroup' was resolved t... Remove this comment to see the full error message
import ButtonGroup from '../ButtonGroup/ButtonGroup';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Icon from '../Icon/Icon';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Modal', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Modal showing>content</Modal>);
    }).not.toThrow();
  });

  it('renders nothing when showing is false', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const instance = shallow(<Modal showing={false}>content</Modal>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(instance.isEmptyRender()).toEqual(true);
  });

  it('wraps the Modal with FocusTrap by default', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const instance = mount(<Modal showing>content</Modal>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(instance.find(FocusTrap).exists()).toBe(true);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('className', () => {
    it('passes in class name', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal showing className="my-class">
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.html()).toContain('my-class');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('header', () => {
    it('renders a header if title is set', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal showing title="Modal Title">
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find({ as: 'header' })).toHaveLength(1);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('footer', () => {
    it('renders a footer if set', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal
          showing
          className="my-class"
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          footer={<div>footer</div>}
        >
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find({ as: 'footer' })).toHaveLength(1);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find(ButtonGroup).children()).toHaveLength(1);
    });
    it('renders an array of nodes', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal
          showing
          className="my-class"
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          footer={[<div>1</div>, <div>2</div>]}
        >
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find(ButtonGroup).children()).toHaveLength(2);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('icon', () => {
    it('is rendered if set title and icon is set', () => {
      const instance = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal showing icon="remove-circle" title="title">
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        instance
          .find(Icon)
          .at(0)
          .prop('name'),
      ).toBe('remove-circle');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('notDismissable', () => {
    it('closeBtn will not render when notDismissable is true', () => {
      const instance = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal showing notDismissable>
          content
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find('.modal-close-btn')).toHaveLength(0);
    });

    it('focus will not be added to focusable elements within modal', () => {
      const instance = mount(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Modal showing notDismissable>
          {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
          <button type="button">Click me</button>
        </Modal>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(instance.find(FocusTrap).exists()).toBe(false);
    });
  });
});
