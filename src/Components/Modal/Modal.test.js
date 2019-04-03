import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from './Modal';
import Icon from '../Icon/Icon';

describe('Modal', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Modal showing>content</Modal>); }).not.toThrow();
  });

  describe('className', () => {
    it('passes in class name', () => {
      const instance = shallow(<Modal showing className="my-class">content</Modal>);
      expect(instance.html()).toContain('my-class');
    });
  });

  describe('header', () => {
    it('renders a header if title is set', () => {
      const instance = shallow(<Modal showing title="Modal Title">content</Modal>);
      expect(instance.find({ as: 'header' })).toHaveLength(1);
    });
  });

  describe('footer', () => {
    it('renders a footer if set', () => {
      const instance = shallow(<Modal showing className="my-class" footer={<div>footer</div>}>content</Modal>);
      expect(instance.find({ as: 'footer' })).toHaveLength(1);
    });
  });

  describe('icon', () => {
    it('is rendered if set title and icon is set', () => {
      const instance = mount(<Modal showing icon="remove-circle" title="title">content</Modal>);
      expect(instance.find(Icon).at(0).prop('name')).toBe('remove-circle');
    });
  });
});
