import React from 'react';
import { shallow } from 'enzyme';

import { ToastAlert, useToast } from './UseToast';

describe('ToastAlert', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<ToastAlert title="Product updated" />); }).not.toThrow();
  });

  describe('type', () => {
    it('defaults to default', () => {
      expect(ToastAlert.defaultProps.type).toBe('default');
    });
  });
});

describe('Hooks > UseToast', () => {
  it('calls react-notify toast with the correct options', () => {
    const instance = useToast({
      title: 'New Features Added',
      type: 'info',
      autoClose: 1000,
    });
  });
});
