import React, { useEffect, useState } from 'react';

import Button from '../Button/Button';
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
};

const defaultProps = {
  title: 'Are you sure?',
  confirmButtonContent: 'Confirm',
  cancelButtonContent: 'Cancel',
  ignoreCase: false,
};

function Confirm({
  disabled,
  primary,
  plain,
  danger,
  children,
  className,
  onConfirm,
  onCancel,
  icon,
  iconAfterText,
  title,
  confirmButtonContent,
  cancelButtonContent,
  confirmValue,
  confirmationContent,
  ignoreCase,
  ...rest
}) {
  const requiresTyping = confirmValue !== undefined;

  const [showModal, setShowModal] = useState(false);
  const [confirmed, setConfirmed] = useState(!requiresTyping);
  const [inputValue, setInputValue] = useState('');

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
    setInputValue('');
    if (onConfirm) {
      onConfirm();
    }
  };

  const internalOnCancel = () => {
    setShowModal(false);
    setInputValue('');
    if (onCancel) {
      onCancel();
    }
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (requiresTyping) {
      if (ignoreCase) {
        setConfirmed(
          inputValue.toLowerCase() === confirmValue.toLowerCase(),
        );
      } else {
        setConfirmed(inputValue === confirmValue);
      }
    }
  }, [inputValue, confirmValue, ignoreCase]);

  return (
    <>
      <Button
        primary={primary}
        danger={danger}
        plain={plain}
        className={className}
        disabled={disabled}
        onClick={() => setShowModal(true)}
        icon={icon}
        iconAfterText={iconAfterText}
        {...rest}
      >
        {children}
      </Button>
      <Modal
        type={danger ? 'danger' : 'default'}
        title={title}
        icon={icon || iconAfterText}
        onRequestClose={internalOnCancel}
        showing={showModal}
        notDismissable
        footer={[
          <Button
            danger={danger}
            primary
            disabled={!confirmed}
            onClick={internalOnConfirm}
          >
            {confirmButtonContent}
          </Button>,
          <Button onClick={internalOnCancel}>
            {cancelButtonContent}
          </Button>,
        ]}
      >
        {confirmationContent}
        {requiresTyping && (
          <FieldText
            hideLabel
            label="Type the value to confirm your action"
            id="confirmInput"
            value={inputValue}
            onChange={handleInputChange}
            placeholder={confirmValue}
          />
        )}
      </Modal>
    </>
  );
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
