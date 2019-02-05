import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button/Button';
import Card from './Card';
import Header from './Components/Header';
import Section from './Components/Section';


describe('Card', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Card>hello</Card>); }).not.toThrow();
  });

  it('allows for custom classes', () => {
    const wrapper = shallow(<Card className="myClass">test</Card>);
    expect(wrapper.find('div').prop('className')).toContain('myClass');
  });

  it('renders sectioned children', () => {
    const wrapper = mount(<Card sectioned>test</Card>);
    expect(wrapper.contains(Section)).toBeTruthy();
  });

  describe('Header', () => {
    it('has a header tag when the title is a string', () => {
      const wrapper = mount(<Card title="Card Title">test</Card>);
      expect(wrapper.find('h2').text()).toEqual('Card Title');
    });
    it('renders header actions', () => {
      const wrapper = mount(<Header actions={<Button>action button</Button>}>test</Header>);
      expect(wrapper.contains(Button)).toBeTruthy();
    });
  });
});
