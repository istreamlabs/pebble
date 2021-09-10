import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import FocusTrap from 'focus-trap-react';

import Button from '../Button/Button';
import ConditionalWrapper from '../ConditionalWrapper/ConditionalWrapper';
import FieldText from '../FieldText/FieldText';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Contents of the button
   */
  children: PropTypes.node,
  /**
   * Name of the [icon](/#/Components/Icon) to place before the button label text and in the title of the modal
   */
  icon: PropTypes.string,
  /**
   * Name of the [icon](/#/Components/Icon) to add after the button label text and in the title of the modal
   * note: if icon is provide it will be used in title of the modal
   */
  iconAfterText: PropTypes.string,
  /**
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Additional classNames to add to button
   */
  className: PropTypes.string,
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * Make the button have more visual weight to identify the primary call to action
   */
  primary: PropTypes.bool,
  /**
   * Indicate a destructive action
   */
  danger: PropTypes.bool,
  /**
   * Render the button as inline text without padding
   */
  plain: PropTypes.bool,
  /**
   * optional title of the modal. If set, a header will be added to the dialog
   */
  title: PropTypes.string,
  /**
   * Callback after the user has successfully confirmed their intent.
   */
  onConfirm: PropTypes.func.isRequired,
  /**
   * Callback after the user does NOT confirm their intent
   */
  onCancel: PropTypes.func,
  /**
   * Contents of the confirm button in the modal
   */
  confirmButtonContent: PropTypes.node,
  /**
   * Contents of the cancel button in the modal
   */
  cancelButtonContent: PropTypes.node,
  /**
   * If provided, the user must type this before they can confirm.
   */
  confirmValue: PropTypes.string,
  /**
   * Elements to be rendered as children of the modal
   */
  confirmationContent: PropTypes.node,
  /**
   * When comparing what a user types to the value should case be ignored.
   */
  ignoreCase: PropTypes.bool,
  /**
   * Whether the menu should use a portal, and where it should attach
   *
   * An example can be found https://react-select.com/advanced#portaling
   */
  portalTarget: PropTypes.any,
  /**
   * Boolean flag used to make the modal not dismissable by the user when true
   */
  notDismissable: PropTypes.bool,
};

const defaultProps = {
  cancelButtonContent: 'Cancel',
  confirmButtonContent: 'Confirm',
  ignoreCase: false,
  title: 'Are you sure?',
};

function Confirm({
  cancelButtonContent,
  children,
  className,
  confirmationContent,
  confirmButtonContent,
  confirmValue,
  danger,
  disabled,
  icon,
  iconAfterText,
  ignoreCase,
  notDismissable,
  onCancel,
  onConfirm,
  plain,
  portalTarget,
  primary,
  title,
  ...rest
}) {
  const requiresTyping = confirmValue !== undefined;

  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  if (!confirmationContent) {
    if (requiresTyping) {
      confirmationContent = (
        <p>
          Please confirm you are sure by entering{' '}
          <Text appearance="code">{confirmValue}</Text> into the input
          below.
        </p>
      );
    } else {
      confirmationContent = <p>Are you sure you want to continue?</p>;
    }
  }

  const internalOnConfirm = () => {
    setShowModal(false);
    onConfirm();
  };

  const internalOnCancel = () => {
    setShowModal(false);
    if (onCancel) {
      onCancel();
    }
  };

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setConfirmed(
      ignoreCase
        ? value.toLowerCase() === confirmValue.toLowerCase()
        : value === confirmValue,
    );
  };

  const modal = (
    <ConditionalWrapper
      condition={!notDismissable}
      wrapper={children => (
        <FocusTrap
          active={showModal}
          FocusTrapOptions={{
            clickOutsideDeactivates: false,
          }}
        >
          {children}
        </FocusTrap>
      )}
    >
      <Modal
        footer={[
          <Button
            danger={danger}
            primary
            disabled={requiresTyping && !confirmed}
            onClick={internalOnConfirm}
          >
            {confirmButtonContent}
          </Button>,
          <Button onClick={internalOnCancel}>
            {cancelButtonContent}
          </Button>,
        ]}
        icon={icon || iconAfterText}
        notDismissable
        onRequestClose={internalOnCancel}
        showing={showModal}
        title={title}
        type={danger ? 'danger' : 'default'}
      >
        {confirmationContent}
        {requiresTyping && (
          <FieldText
            autofocus
            hideLabel
            id="confirmInput"
            label="Type the value to confirm your action"
            onChange={handleInputChange}
            placeholder={confirmValue}
          />
        )}
      </Modal>
    </ConditionalWrapper>
  );

  return (
    <>
      <Button
        className={className}
        danger={danger}
        disabled={disabled}
        icon={icon}
        iconAfterText={iconAfterText}
        onClick={() => setShowModal(true)}
        plain={plain}
        primary={primary}
        {...rest}
      >
        {children}
      </Button>
      {portalTarget
        ? ReactDOM.createPortal(modal, portalTarget)
        : modal}
    </>
  );
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
