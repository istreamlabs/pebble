import React, { useState } from 'react';
import { motion } from 'framer-motion';

import Block from '../Block/Block';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Additional classes to apply to container
   */
  className: PropTypes.string,
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * The text for the confirmation button, visible after the initial button is pressed.
   * Clicking the button with this label with confirm the action and execute the `handleConfirmation` function.
   */
  confirmBtnLabel: PropTypes.string.isRequired,
  /**
   * Name of the [icon](/#/Components/Icon) to place before the button label text
   */
  icon: PropTypes.string,
  /**
   * Name of the [icon](/#/Components/Icon) to add after the button label text
   */
  iconAfterText: PropTypes.string,
  /**
   * The text for the rejection button, visible after the initial button is pressed.
   * Clicking the button with this label will result in no action being taken.
   */
  rejectBtnLabel: PropTypes.string.isRequired,
  /**
   * The text displayed after the initial button is pressed.
   */
  confirmationText: PropTypes.string.isRequired,
  /**
   * The function to execute if the confirmation button is pressed.
   */
  handleConfirmation: PropTypes.func.isRequired,
  /**
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Indicate that the button will perform a destructive action
   */
  danger: PropTypes.bool,
  /**
   * Contents of the initial button
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  disabled: false,
  confirmBtnLabel: 'Yes',
  rejectBtnLabel: 'No',
  confirmationText: 'Are you sure?',
};

const variants = {
  popUp: custom => {
    return {
      opacity: [0, 1],
      x: [24, 0],
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    };
  },
};

const InlineConfirmationButton = React.forwardRef((props, ref) => {
  const {
    disabled,
    className,
    confirmBtnLabel,
    rejectBtnLabel,
    confirmationText,
    handleConfirmation,
    icon,
    iconAfterText,
    size,
    primary,
    danger,
    children,
  } = props;
  const [initiated, setInitiated] = useState(false);
  if (!initiated) {
    return (
      <Button
        size={size}
        primary={primary || danger}
        danger={danger}
        disabled={disabled}
        icon={icon}
        iconAfterText={iconAfterText}
        onClick={() => setInitiated(true)}
        className={className}
      >
        {children}
      </Button>
    );
  }
  return (
    // TODO: make style options configurable
    <motion.div
      style={{ opacity: 0 }}
      animate="popUp"
      variants={variants}
    >
      <Block alignItems="center" itemSpacing="2">
        <Text size={size === 'small' ? 6 : size === 'large' ? 4 : 5}>
          {confirmationText}
        </Text>
        <ButtonGroup>
          <Button size={size} onClick={() => setInitiated(false)}>
            {rejectBtnLabel}
          </Button>
          <Button
            size={size}
            primary
            danger={danger}
            onClick={() => {
              handleConfirmation();
              setInitiated(false);
            }}
          >
            {confirmBtnLabel}
          </Button>
        </ButtonGroup>
      </Block>
    </motion.div>
  );
});

InlineConfirmationButton.propTypes = propTypes;
InlineConfirmationButton.defaultProps = defaultProps;
InlineConfirmationButton.displayName = 'InlineConfirmationButton';

export default InlineConfirmationButton;
