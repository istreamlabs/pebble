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

import { useKeyBoardEvent, useWindowSize, useLockBodyScroll } from '../../Hooks';
import { requiresOtherProp } from '../../Types';

import './Modal.scss';

const HEADER_STYLES_MAP = {
  default: '',
  info: 'bg-blue-lighter',
  warn: 'bg-yellow-lighter',
  danger: 'bg-red-lighter',
};

const ICON_COLOR_MAP = {
  default: 'neutral-400',
  warn: 'yellow',
  danger: 'red',
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
    large,
    mobileFullScreen,
    showing,
    onRequestClose,
    title,
    type,
  }
) => {
  useLockBodyScroll();
  useKeyBoardEvent('Escape', onRequestClose);

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
    }, headerClass);

    const iconClass = ICON_COLOR_MAP[type];

    const iconClasses = classNames('mr-3', iconClass);

    return title ? (
      <Block
        as="header"
        justify="between"
        alignItems="start"
        paddingHorizontal={[4, 5]}
        paddingVertical="4"
        className={headerClasses}
      >
        <Block className="mr-3">
          {icon && <Icon name={icon} size="24" className={iconClasses} />}
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

    const footerContent = Array.isArray(footer)
      ? footer.map((item, i) => (React.cloneElement(item, { key: i })
      )) : footer;

    if (hasFooter) {
      footerMarkup = (
        <Block
          as="footer"
          background="neutral-200"
          justify="end"
          paddingHorizontal={[4, 5]}
          paddingVertical="4"
        >
          <ButtonGroup fullWidth={windowSize.innerWidth <= 480}>
            {footerContent}
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
      'mobile-full-screen': mobileFullScreen,
      'modal-large': large
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
          background="white"
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
  footer: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * Specify an [icon](/#/Components/Icon) in the header of the modal before the title
   */
  icon: requiresOtherProp('title'),
  /**
   * increase the height and width of the modal
   */
  large: PropTypes.bool,
  /**
   * Controls whether the modal is showing or not
   */
  showing: PropTypes.bool.isRequired,
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
  type: PropTypes.oneOf(['default', 'warn', 'danger']),
  /**
   * callback function when modal is closed
   * the `escape` key is also automatically assigned this callback when the modal is showing
   */
  onRequestClose: PropTypes.func,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
};

export default Modal;
