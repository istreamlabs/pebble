import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FocusTrap from 'focus-trap-react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Heading from '../Heading/Heading';
import Icon from '../Icon/Icon';
import Overlay from '../Overlay/Overlay';
import TextContainer from '../TextContainer/TextContainer';

import { useWindowSize, useLockBodyScroll } from '../../Hooks';

import './Modal.scss';

const HEADER_STYLES_MAP = {
  default: 'b-neutral-200',
  info: 'bg-blue-lighter b-blue-light',
  warn: 'bg-yellow-lighter b-yellow-light',
  danger: 'bg-red-lighter b-red-light',
  success: 'bg-green-lighter b-green-light',
  special: 'bg-indigo-lighter b-indigo-light'
};

/**
 * A modal, sometimes referred to as a "dialog", is used to display information that requires the user's immediate attention or response.
 *
 * ---
 */

const Modal = (
  {
    children,
    className,
    footer,
    icon,
    mobileFullScreen,
    showing,
    onRequestClose,
    title,
    type,
  }
) => {
  useLockBodyScroll();

  const closeBtn = (
    <Button
      icon="close"
      size="large"
      plain
      accessibilityLabel="close modal"
      onClick={onRequestClose}
      className={classNames('modal-close-btn', { 'modal-close-btn-no-title': title === undefined })}
    />
  );

  const headerMarkup = () => {
    const headerClass = HEADER_STYLES_MAP[type];

    const headerClasses = classNames({
      bb: title,
    }, headerClass);

    return title ? (
      <Block
        as="header"
        justify={title ? 'between' : 'end'}
        alignItems="start"
        paddingHorizontal={[4, 5]}
        paddingVertical="4"
        className={title ? headerClasses : 'bg-white'}
      >
        <Block className="mr-3">
          {icon && <Icon name={icon} size="24" className="mr-3" />}
          {title && <Heading element="4" responsive={false}>{title}</Heading>}
        </Block>
        {closeBtn}
      </Block>
    ) : closeBtn;
  };

  const windowSize = useWindowSize();

  const footerMarkup = () => {
    let footerMarkup = null;
    const hasFooter = footer !== undefined;

    if (hasFooter) {
      footerMarkup = (
        <Block
          as="footer"
          background="neutral-100"
          justify="end"
          paddingHorizontal={[4, 5]}
          paddingVertical="4"
        >
          <ButtonGroup fullWidth={windowSize.innerWidth <= 480}>
            {footer}
          </ButtonGroup>
        </Block>
      );
    }
    return footerMarkup;
  };

  const classes = classNames(
    'modal',
    'shadow-1',
    'neutral-700',
    {
      'mobile-full-screen': mobileFullScreen
    },
    className
  );

  return (
    <Overlay
      className="modal-container"
      justify="center"
    >
      <FocusTrap
        active={showing}
        focusTrapOptions={{
          clickOutsideDeactivates: false,
        }}
      >
        <Block
          direction="column"
          background="neutral-100"
          className={classes}
          radius={[0, 3]}
          overflow="hidden"
          role="dialog"
          aria-modal="true"
        >
          {headerMarkup()}
          <Block
            flex
            direction="column"
            padding={[4, 5]}
            background="white"
            overflow={{ vertical: 'auto' }}
          >
            <TextContainer>{children}</TextContainer>
          </Block>
          {footerMarkup()}
        </Block>
      </FocusTrap>
    </Overlay>
  );
};

Modal.defaultProps = {
  type: 'default'
};

Modal.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * A button, or an array of buttons. If an array, the nodes render right to left.
   */
  footer: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
  /**
   * Specify an [icon](/#/Components/Icon) in the header of the modal before the title
   */
  icon: PropTypes.string,
  /**
   * Is the modal visible
   */
  showing: PropTypes.bool,
  /**
   * When open, take up the entire screen on a mobile device
   */
  mobileFullScreen: PropTypes.bool,
  /**
   * optional title of the modal. If set, a header will be added to the dialog
   */
  title: PropTypes.string,
  /**
   * Type of message to be displayed
   * @type {PropTypes.Requireable<AppearanceType>}
   */
  type: PropTypes.oneOf(['default', 'info', 'warn', 'danger', 'success', 'special']),
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
