import React from 'react';
import { shallow } from 'enzyme';

import { ToastAlert, default as useToast } from './UseToast';
import Alert from '../Components/Alert/Alert';
import { toast } from 'react-toastify';

jest.mock('react-toastify');

describe('ToastAlert', () => {
  it('renders without crashing', () => {
    expect(() => { shallow(<ToastAlert title="Product updated" />); }).not.toThrow();
  });
  it('defaults', () => {
    expect(ToastAlert.defaultProps.type).toBe('default');
    expect(ToastAlert.defaultProps.position).toBe('bottom');
  });
  it('', () => {
    const wrapper = shallow(<ToastAlert type="warn" title="Product updated" />);
    // renders single element
    expect(wrapper.children().length).toEqual(0);
    const alert = wrapper.find(Alert);
    expect(alert).toBeDefined();
    expect(alert.prop('type')).toEqual('warn');
    expect(alert.prop('className')).toEqual('mb-0');
    expect(alert.prop('title')).toEqual('Product updated');
  });
});

describe('Hooks > UseToast', () => {
  it('calls react-notify toast with the correct options', () => {
    const hook = useToast()({
      title: 'New Features Added',
      type: 'info',
      autoClose: 1000,
    });
    console.log(hook);
    expect(toast).toHaveBeenCalled();
  });
});
