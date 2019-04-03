import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('Modal', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<Modal>content</Modal>); }).not.toThrow();
  });

  describe('className', () => {
    it('passes in class name', () => {
      const instance = shallow(<Modal className="my-class">content</Modal>);
      expect(instance.html()).toContain('my-class');
    });
  });

  describe('header', () => {
    it('renders a header if title if set', () => {
      const instance = shallow(<Modal className="my-class" title="Modal Title">content</Modal>);
      expect(instance.find({ as: 'header' })).toHaveLength(1);
      expect(instance.find({ justify: 'between' })).toHaveLength(1);
    });
  });

  describe('footer', () => {
    it('renders a footer if set', () => {
      const instance = shallow(<Modal className="my-class" footer={<div>footer</div>}>content</Modal>);
      expect(instance.find({ as: 'footer' })).toHaveLength(1);
    });
  });
});
