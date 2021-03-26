import { fireEvent, render } from '@testing-library/react';

import Copy from './Copy';
import React from 'react';
import { shallow } from 'enzyme';

jest.mock('popper.js', () => {
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

describe('Copy', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Copy value="test" />);
    }).not.toThrow();
  });

  describe('children', () => {
    it('renders child elements', () => {
      const children = <span>Hello, World!</span>;
      const component = shallow(<Copy value="test">{children}</Copy>);
      expect(component.contains(children)).toBeTruthy();
    });
  });

  describe('disabled', () => {
    it('defaults to false', () => {
      const component = shallow(<Copy value="test" />);
      expect(component.find('Button').prop('disabled')).toBeFalsy();
    });
    it('renders <button disabled>', () => {
      const component = shallow(<Copy disabled value="test" />);
      expect(component.find('Button').prop('disabled')).toBeTruthy();
    });
  });

  describe('className', () => {
    it('passes in class name to button', () => {
      const component = shallow(
        <Copy className="my-class" value="test" />,
      );
      expect(component.find('Button').prop('className')).toContain(
        'my-class',
      );
    });
  });

  it('sets an aria-label on the button', () => {
    const label = 'This creates a thing';
    const component = shallow(
      <Copy accessibilityLabel={label} value="test" />,
    );
    expect(component.find('Button').prop('accessibilityLabel')).toBe(
      label,
    );
  });

  describe('icon', () => {
    it('defaults', () => {
      const component = shallow(<Copy value="test" />);
      expect(component.find('Button').prop('icon')).toBe('copy');
    });

    it('sets the correct icon', () => {
      const component = shallow(
        <Copy icon="add-circle" value="test" />,
      );
      expect(component.find('Button').prop('icon')).toBe(
        'add-circle',
      );
    });
  });

  describe('button styles', () => {
    it('sets primary', () => {
      const component = shallow(<Copy primary value="test" />);
      expect(component.find('Button').prop('primary')).toBeTruthy();
    });

    it('sets danger', () => {
      const component = shallow(<Copy danger value="test" />);
      expect(component.find('Button').prop('danger')).toBeTruthy();
    });

    it('sets plain', () => {
      const component = shallow(<Copy plain value="test" />);
      expect(component.find('Button').prop('plain')).toBeTruthy();
    });

    it('sets danger & primary', () => {
      const component = shallow(<Copy primary danger value="test" />);
      expect(component.find('Button').prop('primary')).toBeTruthy();
      expect(component.find('Button').prop('danger')).toBeTruthy();
    });
  });

  it('passes unknown props to button', () => {
    const component = shallow(<Copy foo="bar" value="test" />);
    expect(component.find('Button').prop('foo')).toBe('bar');
  });

  describe('onClick', () => {
    const oldClipboard = navigator.clipboard;
    beforeEach(() => {
      navigator.clipboard = {
        writeText: jest.fn(),
      };
    });

    afterAll(() => {
      navigator.clipboard = oldClipboard;
    });

    it('calls api when clicked', () => {
      const { getByRole } = render(<Copy value="test">click</Copy>);
      fireEvent.click(getByRole('button'));
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        'test',
      );
    });
  });

  describe('popover', () => {
    it('defaults', () => {
      const component = shallow(<Copy value="test" />);
      expect(component.find('Popover').prop('closeAfter')).toBe(1000);
      const popoverContent = component
        .find('Popover')
        .prop('content');

      expect(popoverContent.props.displayBlock).toBeTruthy();
      expect(popoverContent.props.padding).toBe('3');
      expect(popoverContent.props.radius).toBe('2');
      expect(popoverContent.props.className).toBe('shadow-2');
      expect(popoverContent.props.children).toBe('Copied!');
      expect(popoverContent.props.background).toBe('white');
      expect(popoverContent.props.color).toBeUndefined();
    });

    it('overrides', () => {
      const component = shallow(
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

      expect(popoverContent.props.className).toBe(
        'shadow-2 shadow-5',
      );
      expect(popoverContent.props.children).toBe('hello');
      expect(popoverContent.props.background).toBe('blue');
      expect(popoverContent.props.color).toBe('red');
    });
  });
});
