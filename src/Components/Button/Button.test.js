import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Button>hello</Button>); }).not.toThrow();
  });
  it('renders child elements', () => {
    const children = <span>Hello, World!</span>;
    const wrapper = shallow(<Button>{children}</Button>);
    expect(wrapper.contains(children)).toBeTruthy();
  });
  it('defaults to type button', () => {
    const wrapper = shallow(<Button>foo</Button>);
    expect(wrapper.html()).toContain('type="button"');
  });
  it('sets type to prop value', () => {
    const wrapper = shallow(<Button type="submit">foo</Button>);
    expect(wrapper.html()).toContain('type="submit"');
  });
  it('will add passed in class name', () => {
    const wrapper = shallow(<Button className="my-class">foo</Button>);
    expect(wrapper.html()).toContain('btn');
    expect(wrapper.html()).toContain('my-class');
  });
});
