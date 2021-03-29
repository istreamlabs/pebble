// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Button/Button' was resolved to '/Users/... Remove this comment to see the full error message
import Button from '../Button/Button';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Popover/Popover' was resolved to '/User... Remove this comment to see the full error message
import Popover from '../Popover/Popover';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
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
   // @ts-expect-error ts-migrate(2749) FIXME: 'colorType' refers to a value, but is being used a... Remove this comment to see the full error message
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
   // @ts-expect-error ts-migrate(2705) FIXME: An async function or method in ES5/ES3 requires th... Remove this comment to see the full error message
   * [Color identifier](/#/Styles/Color) of the text color
   * @type {PropTypes.Requireable<Color>}
   */
  popoverColor: colorType,
  /**
   * Additional classNames to add to popover
   */
  popoverClassName: PropTypes.string,
  /**
   // @ts-expect-error ts-migrate(2345) FIXME: Argument of type 'string | undefined' is not assig... Remove this comment to see the full error message
   * Changes the size of the button, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   */
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
