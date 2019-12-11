import React, { useState } from 'react';

import Block from '../Block/Block';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import PropTypes from 'prop-types';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Disables the button, making it inoperable
   */
  disabled: PropTypes.bool,
  /**
   * The text for the confirmation button, visible after the initial button is clicked.
   * Clicking the button with this label with confirm the action and execute the `handleConfirmation` function.
   */
  confirmBtnLabel: PropTypes.string,
  /**
   * The text for the rejection button, visible after the initial button is clicked.
   * Clicking the button with this label will result in no action being taken.
   */
  rejectBtnLabel: PropTypes.string,
  /**
   * The question displayed after the initial button is clicked.
   */
  confirmationQuestion: PropTypes.string,
  /**
   * The function to execute if the confirmation button is clicked.
   */
  handleConfirmation: PropTypes.func,
  /**
   * Contents of the button
   */
  children: PropTypes.node,
};

const defaultProps = {
  disabled: false,
};

const InlineConfirmationButton = React.forwardRef((props, ref) => {
  const {
    disabled,
    confirmBtnLabel,
    rejectBtnLabel,
    confirmationQuestion,
    handleConfirmation,
    children,
  } = props;
  const [initiated, setInitiated] = useState(false);
  if (!initiated) {
    return (
      <Button disabled={disabled} onClick={() => setInitiated(true)}>
        {children}
      </Button>
    );
  }
  return (
    // TODO: make style options configurable
    <Block alignItems="center" itemSpacing="1" paddingHorizontal="5">
      <Text bold>{confirmationQuestion}</Text>
      <ButtonGroup>
        <Button onClick={() => setInitiated(false)}>
          {rejectBtnLabel}
        </Button>
        <Button
          primary
          danger
          onClick={() => {
            handleConfirmation();
            setInitiated(false);
          }}
        >
          {confirmBtnLabel}
        </Button>
      </ButtonGroup>
    </Block>
  );
});

InlineConfirmationButton.propTypes = propTypes;
InlineConfirmationButton.defaultProps = defaultProps;
InlineConfirmationButton.displayName = 'InlineConfirmationButton';

export default InlineConfirmationButton;
