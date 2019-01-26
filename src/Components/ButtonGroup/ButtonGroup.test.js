import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button/Button';
import ButtonGroup from './ButtonGroup';

describe('Button', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<ButtonGroup>hello</ButtonGroup>); }).not.toThrow();
  });

  describe('children', () => {
    it('renders child elements', () => {
      const buttonGroup = shallow(
        <ButtonGroup>
          <Button>button</Button>
          <Button primary>save</Button>
        </ButtonGroup>
      );
      expect(buttonGroup.find(Button)).toHaveLength(2);
    });
  });

  describe('className', () => {
    it('passes in class name', () => {
      const buttonGroup = shallow(<ButtonGroup className="my-class">foo</ButtonGroup>);
      expect(buttonGroup.html()).toContain('btn-group');
      expect(buttonGroup.html()).toContain('my-class');
    });
  });

  it('applies fullwidth', () => {
    const buttonGroup = shallow(<ButtonGroup fullWidth>foo</ButtonGroup>);
    expect(buttonGroup.html()).toContain('btn-group-fullwidth');
  });

  it('applies toolbar styles', () => {
    const buttonGroup = shallow(
      <ButtonGroup toolbar>
        <Button>button 1</Button>
        <Button>button 2</Button>
      </ButtonGroup>
    );
    expect(buttonGroup.find('div.btn-toolbar-item')).toHaveLength(2);
  });

  it('applies size to child button', () => {
    const buttonGroup = mount(
      <ButtonGroup size="large">
        <Button>button 1</Button>
      </ButtonGroup>
    );
    expect(buttonGroup.find(Button).prop('size')).toBe('large');
  });
});
