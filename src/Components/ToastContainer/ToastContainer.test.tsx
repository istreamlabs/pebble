import React from 'react';
import ToastContainer from './ToastContainer';
import { shallow } from 'enzyme';
import { ToastContainer as ToastifyContainer } from 'react-toastify';

jest.mock('react-toastify');

describe('ToastContainer', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    expect(() => {
      shallow(<ToastContainer />);
    }).not.toThrow();
  });

  it('calls toastify under the covers', () => {
    const wrapper = shallow(<ToastContainer />);
    expect(wrapper.find(ToastifyContainer).length).toEqual(1);
  });

  it('sets the right properties on toastify', () => {
    const props = {
      position: 'top-left',
      autoClose: 6000,
      pauseOnHover: false,
      enableMultiContainer: true,
      containerId: 'myContainerId',
      hideProgressBar: false,
      closeButton: true,
    };
    const wrapper = shallow(<ToastContainer {...props} />);
    const toasty = wrapper.find(ToastifyContainer);
    expect(toasty.prop('position')).toEqual('top-left');
    expect(toasty.prop('autoClose')).toEqual(6000);
    expect(toasty.prop('pauseOnHover')).toEqual(false);
    expect(toasty.prop('enableMultiContainer')).toEqual(true);
    expect(toasty.prop('containerId')).toEqual('myContainerId');
    // Values that cannot be overrode
    expect(toasty.prop('closeButton')).toEqual(false);
    expect(toasty.prop('hideProgressBar')).toEqual(true);
  });
});
