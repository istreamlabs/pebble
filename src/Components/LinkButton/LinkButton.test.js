import React from 'react';
import { shallow } from 'enzyme';
import LinkButton from './LinkButton';

describe('LinkButton', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<LinkButton href="#">hello</LinkButton>); }).not.toThrow();
  });

  it('renders child elements', () => {
    const children = <span>Hello, World!</span>;
    const linkButton = shallow(<LinkButton href="#">{children}</LinkButton>);
    expect(linkButton.contains(children)).toBeTruthy();
  });

  it('id is passed into button', () => {
    const id = 'myId';
    const linkButton = shallow(<LinkButton href="#" id={id}>foo</LinkButton>);
    expect(linkButton.find('a').prop('id')).toBe(id);
  });

  it('disable renders <a> without a href', () => {
    const linkButton = shallow(<LinkButton href="#" disabled>test</LinkButton>);
    expect(linkButton.find('a').prop('href')).toBeFalsy();
  });

  it('passes in class name', () => {
    const linkButton = shallow(<LinkButton href="#" className="my-class">foo</LinkButton>);
    expect(linkButton.html()).toContain('btn');
    expect(linkButton.html()).toContain('my-class');
  });

  it('sets an aria-label on the button', () => {
    const label = 'This a label';
    const linkButton = shallow(
      <LinkButton href="#" accessibilityLabel={label}>foo</LinkButton>,
    );
    expect(linkButton.find('a').prop('aria-label')).toBe(label);
  });
});