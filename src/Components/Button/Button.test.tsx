// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Button' was resolved to '/Users/esjaasta... Remove this comment to see the full error message
import Button from './Button';

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Button', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<Button>hello</Button>);
    }).not.toThrow();
  });
  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('children', () => {
    it('renders child elements', () => {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const children = <span>Hello, World!</span>;
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button>{children}</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.contains(children)).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('disabled', () => {
    it('defaults to false', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('disabled')).toBeFalsy();
    });
    it('renders <button disabled>', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button disabled>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('disabled')).toBeTruthy();
    });
  });

  it('id is passed into button', () => {
    const id = 'myId';
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const button = shallow(<Button id={id}>foo</Button>);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button.find('button').prop('id')).toBe(id);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('type', () => {
    it('defaults to button', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('type')).toBe('button');
    });
    it('is set to type prop value', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button type="submit">foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('type')).toBe('submit');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('className', () => {
    it('passes in class name', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button className="my-class">foo</Button>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.html()).toContain('btn');
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.html()).toContain('my-class');
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('loading', () => {
    it('loading renders <button disabled>', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button loading>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('disabled')).toBe(true);
    });

    it('renders a spinner into the button', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button loading>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('Icon').prop('className')).toBe(
        'btn-loading-spinner',
      );
    });

    it('sets aria-busy on the button', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button loading>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('aria-busy')).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onClick()', () => {
    it('passes in onClick', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button onClick={mockFunc}>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('onClick')).toBe(mockFunc);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onFocus()', () => {
    it('passes in onFocus', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button onFocus={mockFunc}>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('onFocus')).toBe(mockFunc);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('onBlur()', () => {
    it('passes in onBlur', () => {
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      const mockFunc = jest.fn();
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button onBlur={mockFunc}>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('onBlur')).toBe(mockFunc);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('tabIndex', () => {
    it('is passed into button', () => {
      const myTabIndex = 5;
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button tabIndex={myTabIndex}>foo</Button>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('tabIndex')).toBe(myTabIndex);
    });
  });

  it('sets an aria-label on the button', () => {
    const label = 'This creates a thing';
    const button = shallow(
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Button accessibilityLabel={label}>foo</Button>,
    );
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(button.find('button').prop('aria-label')).toBe(label);
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('ariaControls', () => {
    it('sets an aria-controls on the button', () => {
      const id = 'panel1';
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button ariaControls={id}>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('aria-controls')).toBe(id);
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('ariaExpanded', () => {
    it('sets an aria-expended on the button', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button ariaExpanded>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(
        button.find('button').prop('aria-expanded'),
      ).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('ariaPressed', () => {
    it('sets an aria-pressed on the button', () => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      const button = shallow(<Button ariaPressed>foo</Button>);
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('button').prop('aria-pressed')).toBeTruthy();
    });
  });

  // @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
  describe('icon', () => {
    it('sets the correct icon', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button icon="add-circle">add button</Button>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('Icon').prop('name')).toBe('add-circle');
    });
    it('sets the correct icon size', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button icon="add-circle" size="large">
          add button
        </Button>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('Icon').prop('size')).toBe(20);
    });
    it('it places icon to left of button text', () => {
      const button = shallow(
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button icon="add-circle">add button</Button>,
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
        <Button iconAfterText="add-circle">add button</Button>,
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
        <Button icon="add-circle" iconAfterText="add-circle">
          add button
        </Button>,
      );
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
      expect(button.find('.btn-icon')).toHaveLength(2);
    });
  });
});
