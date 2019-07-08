import React from 'react';
import { shallow } from 'enzyme';

import Form from './Form';

describe('Form', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<Form />);
    }).not.toThrow();
  });

  describe('onChange', () => {
    it('passes in onChange', () => {
      const mockFunc = jest.fn();
      const wrapper = shallow(<Form onChange={mockFunc} />);
      expect(wrapper.find('form').prop('onChange')).toBe(mockFunc);
    });
  });

  describe('handleSubmit', () => {
    it('calls onSubmit', () => {
      const mockFunc = jest.fn();
      const instance = new Form({ onSubmit: mockFunc });
      instance.handleSubmit({ preventDefault: () => {} });
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });

  describe('handleReset', () => {
    it('calls onReset', () => {
      const mockFunc = jest.fn();
      const instance = new Form({ onReset: mockFunc });
      instance.handleReset({ preventDefault: () => {} });
      expect(mockFunc).toHaveBeenCalledTimes(1);
    });
  });
});
