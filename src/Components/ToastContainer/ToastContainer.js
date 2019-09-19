import React from 'react';
import PropTypes from 'prop-types';

import { ToastContainer as ToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const propTypes = {
  /**
   * Location where the toast will appear. Can be overridden
   * on each toast message.
   */
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  /**
   * Length the toast notifications is displayed in milliseconds.
   * Can be overridden on each toast message.
   */
  autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  /**
   * Pause `autoClose` timer when user hovers over message.
   */
  pauseOnHover: PropTypes.bool,
  /**
   * Allow for multiple containers per page. e.g. top-left and
   * top-middle for different types of toast messages. The
   * toast message `containerId` will be used to place it in
   * the appropriate container.
   */
  enableMultiContainer: PropTypes.bool,
  /**
   * When using multiple container you must give each container an ID.
   */
  containerId: PropTypes.string,
};

/**
 * In order to use `useToast` the page must have a toastContainer on it.
 * If you are using the `Frame` component one is added automatically.
 * However, if the application is not using the `frame` component
 * and/or there is a need for multiple containers `ToastContainer`
 * can be used.
 */
const ToastContainer = ({
  position = 'top-right',
  autoClose = 5000,
  pauseOnHover = true,
  enableMultiContainer = false,
  containerId,
}) => (
  <ToastifyContainer
    position={position}
    autoClose={autoClose}
    hideProgressBar
    pauseOnHover={pauseOnHover}
    closeButton={false}
    enableMultiContainer={enableMultiContainer}
    containerId={containerId}
  />
);

ToastContainer.propTypes = propTypes;
ToastContainer.displayName = 'ToastContainer';

export default ToastContainer;
