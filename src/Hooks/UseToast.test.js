import React from 'react';
import { shallow } from 'enzyme';

import { ToastAlert, default as useToast } from './UseToast';
import Alert from '../Components/Alert/Alert';
import { toast } from 'react-toastify';

jest.mock('react-toastify');

describe('ToastAlert', () => {
  it('renders without crashing', () => {
    expect(() => {
      shallow(<ToastAlert title="Product updated" />);
    }).not.toThrow();
  });
  it('defaults', () => {
    expect(ToastAlert.defaultProps.type).toBe('default');
    expect(ToastAlert.defaultProps.position).toBe('bottom');
  });
  it('calls alert component', () => {
    const wrapper = shallow(
      <ToastAlert type="warn" title="Product updated" />,
    );
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
  it('calls react-notify toast with autoClose and onClose', () => {
    const options = {
      title: 'New Features Added',
      type: 'info',
      autoClose: 1000,
      onClose: jest.fn(),
    };
    useToast()(options);
    const param1 = (
      <ToastAlert title="New Features Added" type="info" />
    );
    const param2 = {
      className: 'p-0 bg-transparent',
      autoClose: options.autoClose,
      onClose: options.onClose,
    };

    expect(toast).toHaveBeenCalledWith(param1, param2);
  });

  it('calls react-notify toast without autoClose and onClose', () => {
    const options = {
      title: 'New Features Added',
      type: 'info',
    };
    useToast()(options);
    const param1 = (
      <ToastAlert title="New Features Added" type="info" />
    );
    const param2 = {
      className: 'p-0 bg-transparent',
    };

    expect(toast).toHaveBeenCalledWith(param1, param2);
  });
});
