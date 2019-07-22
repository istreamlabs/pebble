import React from 'react';
import PropTypes from 'prop-types';

import { ToastContainer as ToastifyContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

ToastContainer.propTypes = {
  position: PropTypes.oneOf([
    'top-left',
    'top-center',
    'top-right',
    'bottom-left',
    'bottom-center',
    'bottom-right',
  ]),
  autoClose: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  pauseOnHover: PropTypes.bool,
  enableMultiContainer: PropTypes.bool,
  containerId: PropTypes.string,
};

export default ToastContainer;
