import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Button>hello</Button>); }).not.toThrow();
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
      const button = shallow(<Button className="my-class">foo</Button>);
      expect(button.html()).toContain('btn');
      expect(button.html()).toContain('my-class');
    });
  });

  describe('loading', () => {
    it('loading renders <button disabled>', () => {
      const button = shallow(<Button loading>foo</Button>);
      expect(button.find('button').prop('disabled')).toBe(true);
    });

    const spinnerSvg = (
      <span className="btn-loading-spinner">
        <svg viewBox="0 0 16 16" width="16" height="16">
          <title>loading</title>
          <g>
            <path fill="currentColor" d="M8,16c-1.644043,0-3.2236328-0.4951172-4.5683594-1.4321289 c-0.453125-0.3154297-0.5644531-0.9389648-0.2485352-1.3920898c0.3164062-0.4521484,0.9399414-0.5644531,1.3920898-0.2485352 C5.5825195,13.6289062,6.7670898,14,8,14c3.3085938,0,6-2.6914062,6-6s-2.6914062-6-6-6S2,4.6914062,2,8 c0,0.5844727,0.0834961,1.1616211,0.2490234,1.7158203c0.1577148,0.5292969-0.1435547,1.0864258-0.6728516,1.2441406 c-0.5283203,0.1572266-1.0864258-0.1435547-1.2441406-0.6728516C0.1118164,9.5473633,0,8.777832,0,8c0-4.4111328,3.5888672-8,8-8 s8,3.5888672,8,8S12.4111328,16,8,16z" transform="rotate(106.50399999320507 8 8)" />
          </g>
        </svg>
      </span>
    );

    it('renders a spinner into the button', () => {
      const button = shallow(<Button loading>foo</Button>);
      expect(button.contains(spinnerSvg)).toBeTruthy();
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
      const button = shallow(<Button tabIndex={myTabIndex}>foo</Button>);
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
      expect(button.find('button').prop('aria-expanded')).toBeTruthy();
    });
  });

  describe('ariaPressed', () => {
    it('sets an aria-pressed on the button', () => {
      const button = shallow(<Button ariaPressed>foo</Button>);
      expect(button.find('button').prop('aria-pressed')).toBeTruthy();
    });
  });
});
