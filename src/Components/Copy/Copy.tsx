import Block from '../Block/Block';
import Button from '../Button/Button';
import Popover from '../Popover/Popover';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { colorType } from '../../Types';

const propTypes = {
  /**
   * Contents of the button
   */
  children: PropTypes.node,
  /**
   * Value to be copied to the clipboard
   */
  value: PropTypes.string,
  /**
   * Name of the [icon](/#/Components/Icon) to place before the button label text
   */
  icon: PropTypes.string,
  /**
   * Contents of the temporary popover confirming copy was successful
   */
  successMessage: PropTypes.node,
  /**
   * Make the button have more visual weight to identify the primary call to action
   */
  primary: PropTypes.bool,
  /**
   * Render the button as inline text without padding
   */
  plain: PropTypes.bool,
  /**
   * Indicate pressing the button will perform a destructive action
   */
  danger: PropTypes.bool,
  /**
   * [Color identifier](/#/Styles/Color) of the background color
   * @type {PropTypes.Requireable<Color>}
   */
  popoverBackground: colorType,
  /**
   * [Color identifier](/#/Styles/Color) of the text color
   * @type {PropTypes.Requireable<Color>}
   */
  popoverColor: colorType,
  /**
   * Additional classNames to add to popover
   */
  popoverClassName: PropTypes.string,
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
   * Visually hidden text for screen readers
   */
  accessibilityLabel: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  children: null,
  icon: 'copy',
  successMessage: 'Copied!',
  popoverBackground: 'white',
  accessibilityLabel: 'copy to clipboard',
  plain: false,
  primary: false,
  danger: false,
};

const Copy = props => {
  const {
    value,
    disabled,
    icon,
    successMessage,
    primary,
    plain,
    danger,
    children,
    popoverBackground,
    popoverColor,
    popoverClassName,
    size,
    className,
    accessibilityLabel,
    ...rest
  } = props;

  const onClick = async () => {
    // In theory this can fail on older browsers but given all the browsers
    // in our support matrix support it, we aren't going to worry about
    // error handling this.
    await navigator.clipboard.writeText(value);
  };

  const popoverClassNames = classNames('shadow-2', popoverClassName);

  return (
    <Popover
      closeAfter={1000}
      content={
        <Block
          displayBlock
          background={popoverBackground}
          color={popoverColor}
          padding="3"
          radius="2"
          className={popoverClassNames}
        >
          {successMessage}
        </Block>
      }
    >
      <Button
        className={className}
        size={size}
        icon={icon}
        disabled={disabled}
        accessibilityLabel={accessibilityLabel}
        onClick={onClick}
        primary={primary}
        plain={plain}
        danger={danger}
        {...rest}
      >
        {children}
      </Button>
    </Popover>
  );
};

Copy.propTypes = propTypes;

Copy.defaultProps = defaultProps;

export default Copy;
