import React from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import Alert from '../Components/Alert/Alert';

const defaultProps = {
  type: 'default',
  position: 'bottom',
};

const propTypes = {
  /**
   * The title of the notification
   */
  title: PropTypes.string.isRequired,
  /**
   * Type of message to be displayed
   * @type {PropTypes.Requireable<'default' | 'info' | 'warn' | 'danger' | 'success'>}
   */
  type: PropTypes.oneOf([
    'default',
    'info',
    'warn',
    'danger',
    'success',
  ]),
};

export const ToastAlert = ({ title, type }) => (
  <Alert type={type} className="mb-0" title={title} />
);

ToastAlert.propTypes = propTypes;
ToastAlert.defaultProps = defaultProps;

/**
 * A toast is used to give feedback to users about an event.
 * It can be dismissed and sits on top of a view.
 * Each toast can be colored to fit its status type (neutral, warn, danger, success)
 *
 * ---
 */

export default () => {
  function notify({ title, type, autoClose, onClose, containerId }) {
    toast(<ToastAlert title={title} type={type} />, {
      className: 'p-0 bg-transparent',
      autoClose,
      onClose,
      containerId,
    });
  }

  return notify;
};
