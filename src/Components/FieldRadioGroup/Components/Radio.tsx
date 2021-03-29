// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Text/Text' was resolved to '/Users/e... Remove this comment to see the full error message
import Icon from '../../Icon/Icon';
import Text from '../../Text/Text';

const propTypes = {
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * additional classNames to add
   */
  className: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.node,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string.isRequired,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * Set the radio as selected
   */
  isSelected: PropTypes.bool,
  // @ts-expect-error ts-migrate(2722) FIXME: Cannot invoke an object which is possibly 'undefin... Remove this comment to see the full error message
  /**
   * The label for the radio
   */
  label: PropTypes.string.isRequired,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * The name attribute of the input
   */
  name: PropTypes.string,
  /**
   * Callback function when input is blurred
   */
  onBlur: PropTypes.func,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Callback function when input is changed
   */
  onChange: PropTypes.func,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Callback function when input is focused
   */
  onFocus: PropTypes.func,
  /**
   * If the selection is required.
   */
  required: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * The value of the input
   */
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  isSelected: false,
  onChange: undefined,
  required: false,
};

function Radio({
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  className,
  disabled,
  helpText,
  id,
  isSelected,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  label,
  name,
  onChange,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  onFocus,
  onBlur,
  required,
  value,
}) {
  const handleChange = () => {
    onChange(value);
  };

  const radioIconMarkup = () => {
    if (isSelected) {
      return (
        <Icon
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          size="20"
          className={disabled ? 'neutral-500' : 'blue'}
          // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
          name="radio-selected"
        />
      );
    }
    if (disabled) {
      return <Icon size="20" className="neutral-300" name="radio" />;
    }
    return (
      <Icon
        size="20"
        className="neutral-500 neutral-700-hover"
        name="radio"
      />
    );
  };

  const helpTextMarkup = () => {
    if (helpText) {
      return (
        <Text
          size="7"
          appearance="muted"
          className="db mt-1"
          id={`${id}HelpText`}
        >
          {helpText}
        </Text>
      );
    }
    return null;
  };

  const labelMarkup = () => (
    <Block as="label" htmlFor={id} className="relative">
      {radioIconMarkup()}
      <Block direction="column" className="ml-2">
        <span className="fs-6">{label}</span>
        {helpTextMarkup()}
      </Block>
    </Block>
  );

  const describedBy = helpText ? `${id}HelpText` : undefined;
  const classes = classNames('relative', className);

  return (
    <Block margin="0 0 3" className={classes} alignItems="start">
      <input
        id={id}
        required={required}
        checked={isSelected || false}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="radio"
        className="absolute o-0"
        value={value}
        aria-describedby={describedBy}
      />
      {labelMarkup()}
    </Block>
  );
}

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;
Radio.displayName = 'Radio';

export default Radio;
