// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-toastify' or its corresp... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Components/Alert/Alert' was resolved to... Remove this comment to see the full error message
import { toast } from 'react-toastify';

import Alert from '../Components/Alert/Alert';

const defaultProps = {
  type: 'default',
  position: 'bottom'
};

const propTypes = {
  /**
   * The title of the notification
   */
  title: PropTypes.string.isRequired,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Type of message to be displayed
   * @type {PropTypes.Requireable<'default' | 'info' | 'warn' | 'danger' | 'success'>}
   */
  type: PropTypes.oneOf(['default', 'info', 'warn', 'danger', 'success']),
};

export const ToastAlert = ({
  title, type
}) => (
  <Alert
    type={type}
    className="mb-0"
    title={title}
  />
);

ToastAlert.propTypes = propTypes;
// @ts-expect-error ts-migrate(7031) FIXME: Binding element 'title' implicitly has an 'any' ty... Remove this comment to see the full error message
ToastAlert.defaultProps = defaultProps;

/**
 // @ts-expect-error ts-migrate(7031) FIXME: Binding element 'onClose' implicitly has an 'any' ... Remove this comment to see the full error message
 * A toast is used to give feedback to users about an event.
 * It can be dismissed and sits on top of a view.
 * Each toast can be colored to fit its status type (neutral, warn, danger, success)
 *
 * ---
 */

export default () => {
  function notify({
    title,
    type,
    autoClose,
    onClose,
    containerId,
  }) {
    toast(
      <ToastAlert
        title={title}
        type={type}
      />,
      {
        className: 'p-0 bg-transparent',
        autoClose,
        onClose,
        containerId,
      }
    );
  }

  return notify;
};
