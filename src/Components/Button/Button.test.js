import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Button>hello</Button>);
    }).not.toThrow();
  });
  describe('children', () => {
    it('renders child elements', () => {
      const children = <span>Hello, World!</span>;
      const button = shallow(<Button>{children}</Button>);
      expect(button.contains(children)).toBeTruthy();
    });
  });

  describe('disabled', () => {
    it('defaults to false', () => {
      const button = shallow(<Button>foo</Button>);
      expect(button.find('button').prop('disabled')).toBeFalsy();
    });
    it('renders <button disabled>', () => {
      const button = shallow(<Button disabled>foo</Button>);
      expect(button.find('button').prop('disabled')).toBeTruthy();
    });
  });

  it('id is passed into button', () => {
    const id = 'myId';
    const button = shallow(<Button id={id}>foo</Button>);
    expect(button.find('button').prop('id')).toBe(id);
  });

  describe('type', () => {
    it('defaults to button', () => {
      const button = shallow(<Button>foo</Button>);
      expect(button.find('button').prop('type')).toBe('button');
    });
    it('is set to type prop value', () => {
      const button = shallow(<Button type="submit">foo</Button>);
      expect(button.find('button').prop('type')).toBe('submit');
    });
  });

  describe('className', () => {
    it('passes in class name', () => {
      const button = shallow(
        <Button className="my-class">foo</Button>,
      );
      expect(button.html()).toContain('btn');
      expect(button.html()).toContain('my-class');
    });
  });

  describe('loading', () => {
    it('loading renders <button disabled>', () => {
      const button = shallow(<Button loading>foo</Button>);
      expect(button.find('button').prop('disabled')).toBe(true);
    });

    it('renders a spinner into the button', () => {
      const button = shallow(<Button loading>foo</Button>);
      expect(button.find('Icon').prop('className')).toBe(
        'btn-loading-spinner',
      );
    });

    it('sets aria-busy on the button', () => {
      const button = shallow(<Button loading>foo</Button>);
      expect(button.find('button').prop('aria-busy')).toBeTruthy();
    });
  });

  describe('onClick()', () => {
    it('passes in onClick', () => {
      const mockFunc = jest.fn();
      const button = shallow(<Button onClick={mockFunc}>foo</Button>);
      expect(button.find('button').prop('onClick')).toBe(mockFunc);
    });
  });

  describe('onFocus()', () => {
    it('passes in onFocus', () => {
      const mockFunc = jest.fn();
      const button = shallow(<Button onFocus={mockFunc}>foo</Button>);
      expect(button.find('button').prop('onFocus')).toBe(mockFunc);
    });
  });

  describe('onBlur()', () => {
    it('passes in onBlur', () => {
      const mockFunc = jest.fn();
      const button = shallow(<Button onBlur={mockFunc}>foo</Button>);
      expect(button.find('button').prop('onBlur')).toBe(mockFunc);
    });
  });

  describe('tabIndex', () => {
    it('is passed into button', () => {
      const myTabIndex = 5;
      const button = shallow(
        <Button tabIndex={myTabIndex}>foo</Button>,
      );
      expect(button.find('button').prop('tabIndex')).toBe(myTabIndex);
    });
  });

  it('sets an aria-label on the button', () => {
    const label = 'This creates a thing';
    const button = shallow(
      <Button accessibilityLabel={label}>foo</Button>,
    );
    expect(button.find('button').prop('aria-label')).toBe(label);
  });

  describe('ariaControls', () => {
    it('sets an aria-controls on the button', () => {
      const id = 'panel1';
      const button = shallow(<Button ariaControls={id}>foo</Button>);
      expect(button.find('button').prop('aria-controls')).toBe(id);
    });
  });

  describe('ariaExpanded', () => {
    it('sets an aria-expended on the button', () => {
      const button = shallow(<Button ariaExpanded>foo</Button>);
      expect(
        button.find('button').prop('aria-expanded'),
      ).toBeTruthy();
    });
  });

  describe('ariaPressed', () => {
    it('sets an aria-pressed on the button', () => {
      const button = shallow(<Button ariaPressed>foo</Button>);
      expect(button.find('button').prop('aria-pressed')).toBeTruthy();
    });
  });

  describe('icon', () => {
    it('sets the correct icon', () => {
      const button = shallow(
        <Button icon="add-circle">add button</Button>,
      );
      expect(button.find('Icon').prop('name')).toBe('add-circle');
    });
    it('sets the correct icon size', () => {
      const button = shallow(
        <Button icon="add-circle" size="large">
          add button
        </Button>,
      );
      expect(button.find('Icon').prop('size')).toBe(20);
    });
    it('it places icon to left of button text by default', () => {
      const button = shallow(
        <Button icon="add-circle">add button</Button>,
      );
      expect(
        button
          .find('.btn-content')
          .children()
          .first()
          .prop('className'),
      ).toContain('btn-icon');
    });
    it('positions the icon on the right side', () => {
      const button = shallow(
        <Button icon="add-circle" iconAfterText>
          add button
        </Button>,
      );
      expect(
        button
          .find('.btn-content')
          .children()
          .last()
          .prop('className'),
      ).toContain('btn-icon');
    });
  });
});
