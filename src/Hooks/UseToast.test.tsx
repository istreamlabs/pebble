// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'enzyme' or its corresponding t... Remove this comment to see the full error message
import { shallow } from 'enzyme';

// @ts-expect-error ts-migrate(6142) FIXME: Module './UseToast' was resolved to '/Users/esjaas... Remove this comment to see the full error message
import { ToastAlert, default as useToast } from './UseToast';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Components/Alert/Alert' was resolved to... Remove this comment to see the full error message
import Alert from '../Components/Alert/Alert';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-toastify' or its corresp... Remove this comment to see the full error message
import { toast } from 'react-toastify';

// @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
jest.mock('react-toastify');

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('ToastAlert', () => {
  it('renders without crashing', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(() => { shallow(<ToastAlert title="Product updated" />); }).not.toThrow();
  });
  it('defaults', () => {
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(ToastAlert.defaultProps.type).toBe('default');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(ToastAlert.defaultProps.position).toBe('bottom');
  });
  it('calls alert component', () => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const wrapper = shallow(<ToastAlert type="warn" title="Product updated" />);
    // renders single element
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(wrapper.children().length).toEqual(0);
    const alert = wrapper.find(Alert);
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(alert).toBeDefined();
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(alert.prop('type')).toEqual('warn');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(alert.prop('className')).toEqual('mb-0');
    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(alert.prop('title')).toEqual('Product updated');
  });
});

// @ts-expect-error ts-migrate(2582) FIXME: Cannot find name 'describe'. Do you need to instal... Remove this comment to see the full error message
describe('Hooks > UseToast', () => {
  it('calls react-notify toast with autoClose and onClose', () => {
    const options = {
      title: 'New Features Added',
      type: 'info',
      autoClose: 1000,
      // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'jest'.
      onClose: jest.fn()
    };
    useToast()(options);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const param1 = <ToastAlert title="New Features Added" type="info" />;
    const param2 = {
      className: 'p-0 bg-transparent',
      autoClose: options.autoClose,
      onClose: options.onClose
    };

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toast).toHaveBeenCalledWith(param1, param2);
  });

  it('calls react-notify toast without autoClose and onClose', () => {
    const options = {
      title: 'New Features Added',
      type: 'info',
    };
    useToast()(options);
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const param1 = <ToastAlert title="New Features Added" type="info" />;
    const param2 = {
      className: 'p-0 bg-transparent',
    };

    // @ts-expect-error ts-migrate(2304) FIXME: Cannot find name 'expect'.
    expect(toast).toHaveBeenCalledWith(param1, param2);
  });
});
