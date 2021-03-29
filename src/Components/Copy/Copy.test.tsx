// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@testing-library/react' or its... Remove this comment to see the full error message
import { fireEvent, render } from '@testing-library/react';

// @ts-expect-error ts-migrate(6142) FIXME: Module './Copy' was resolved to '/Users/esjaastad/... Remove this comment to see the full error message
import Copy from './Copy';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('popper.js', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
  const PopperJS = jest.requireActual('popper.js');

  return class {
    static placements = PopperJS.placements;

    constructor() {
      return {
        destroy: () => {},
        scheduleUpdate: () => {},
      };
    }
  };
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Copy', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Copy value="test" />);
    }).not.toThrow();
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('children', () => {
    it('renders child elements', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const children = <span>Hello, World!</span>;
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy value="test">{children}</Copy>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.contains(children)).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('disabled', () => {
    it('defaults to false', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('disabled')).toBeFalsy();
    });
    it('renders <button disabled>', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy disabled value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('disabled')).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('className', () => {
    it('passes in class name to button', () => {
      const component = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Copy className="my-class" value="test" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('className')).toContain(
        'my-class',
      );
    });
  });

  it('sets an aria-label on the button', () => {
    const label = 'This creates a thing';
    const component = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Copy accessibilityLabel={label} value="test" />,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(component.find('Button').prop('accessibilityLabel')).toBe(
      label,
    );
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('icon', () => {
    it('defaults', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('icon')).toBe('copy');
    });

    it('sets the correct icon', () => {
      const component = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Copy icon="add-circle" value="test" />,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('icon')).toBe(
        'add-circle',
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('button styles', () => {
    it('sets primary', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy primary value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('primary')).toBeTruthy();
    });

    it('sets danger', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy danger value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('danger')).toBeTruthy();
    });

    it('sets plain', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy plain value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('plain')).toBeTruthy();
    });

    it('sets danger & primary', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy primary danger value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('primary')).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Button').prop('danger')).toBeTruthy();
    });
  });

  it('passes unknown props to button', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const component = shallow(<Copy foo="bar" value="test" />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(component.find('Button').prop('foo')).toBe('bar');
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onClick', () => {
    const oldClipboard = navigator.clipboard;
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
    beforeEach(() => {
      // @ts-expect-error ts-migrate(2540) FIXME: Cannot assign to 'clipboard' because it is a read-... Remove this comment to see the full error message
      navigator.clipboard = {
        // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
        writeText: jest.fn(),
      };
    });

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'afterAll'.
    afterAll(() => {
      // @ts-expect-error ts-migrate(2540) FIXME: Cannot assign to 'clipboard' because it is a read-... Remove this comment to see the full error message
      navigator.clipboard = oldClipboard;
    });

    it('calls api when clicked', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const { getByRole } = render(<Copy value="test">click</Copy>);
      fireEvent.click(getByRole('button'));
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        'test',
      );
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('popover', () => {
    it('defaults', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const component = shallow(<Copy value="test" />);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(component.find('Popover').prop('closeAfter')).toBe(1000);
      const popoverContent = component
        .find('Popover')
        .prop('content');

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.displayBlock).toBeTruthy();
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.padding).toBe('3');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.radius).toBe('2');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.className).toBe('shadow-2');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.children).toBe('Copied!');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.background).toBe('white');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.color).toBeUndefined();
    });

    it('overrides', () => {
      const component = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Copy
          value="test"
          popoverClassName="shadow-5"
          popoverBackground="blue"
          popoverColor="red"
          successMessage="hello"
        />,
      );

      const popoverContent = component
        .find('Popover')
        .prop('content');

      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.className).toBe(
        'shadow-2 shadow-5',
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.children).toBe('hello');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.background).toBe('blue');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(popoverContent.props.color).toBe('red');
    });
  });
});
