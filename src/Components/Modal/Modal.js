import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import Overlay from '../Overlay/Overlay';

import './Modal.scss';

/**
 * A modal, sometimes referred to as a "dialog", is used to display information that requires the user's immediate attention or response.
 *
 * ---
 */

const Modal = (
  {
    children,
    className,
    isOpen,
    onRequestClose,
    title
  }
) => {
  const classes = classNames(
    'modal',
    'br-3',
    className
  );

  const closeBtn = (
    <Button
      icon="close"
      plain
      accessibilityLabel="close modal"
      onClick={onRequestClose}
      className="mr-3"
    />
  );

  const headerMarkup = (
    <Block
      justify={title ? 'between' : 'end'}
      paddingHorizontal={[4, 5]}
      paddingVertical="4"
      className="bb b-neutral-300"
    >
      {title && <Heading element="4">{title}</Heading>}
      {closeBtn}
    </Block>
  );

  return (
    <Overlay
      className="modal-container"
      justify="center"
    >
      <FocusTrap
        active={isOpen}
        focusTrapOptions={{
          clickOutsideDeactivates: false,
        }}
      >
        <Block direction="column" background="neutral-100" className={classes} radius={[0, 3]}>
          {headerMarkup}
          <Block direction="column" padding={[4, 5]}>
            {children}
          </Block>
        </Block>
      </FocusTrap>
    </Overlay>
  );
};

Modal.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Is the modal visible
   */
  isOpen: PropTypes.bool,
  /**
   * optional title of the modal. If set, a header will be added to the dialog
   */
  title: PropTypes.string,
  /**
   * callback function when modal is closed
   */
  onRequestClose: PropTypes.func,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
};

export default Modal;
