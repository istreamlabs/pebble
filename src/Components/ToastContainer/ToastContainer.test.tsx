// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module './ToastContainer' was resolved to '/Users/... Remove this comment to see the full error message
import ToastContainer from './ToastContainer';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-toastify' or its corresp... Remove this comment to see the full error message
import { ToastContainer as ToastifyContainer } from 'react-toastify';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('react-toastify');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ToastContainer', () => {
  // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'beforeEach'.
  beforeEach(() => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
    jest.resetAllMocks();
  });

  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => {
      // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      shallow(<ToastContainer />);
    }).not.toThrow();
  });

  it('calls toastify under the covers', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<ToastContainer />);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
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
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<ToastContainer {...props} />);
    const toasty = wrapper.find(ToastifyContainer);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('position')).toEqual('top-left');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('autoClose')).toEqual(6000);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('pauseOnHover')).toEqual(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('enableMultiContainer')).toEqual(true);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('containerId')).toEqual('myContainerId');
    // Values that cannot be overrode
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('closeButton')).toEqual(false);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toasty.prop('hideProgressBar')).toEqual(true);
  });
});
