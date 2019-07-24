import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Block from '../../Block/Block';
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
  /**
   * The label for the radio
   */
  label: PropTypes.string.isRequired,
  /**
   * The name attribute of the input
   */
  name: PropTypes.string,
  /**
   * Callback function when input is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback function when input is changed
   */
  onChange: PropTypes.func,
  /**
   * Callback function when input is focused
   */
  onFocus: PropTypes.func,
  /**
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
  isSelected: false,
  onChange: undefined,
};

function Radio({
  className,
  disabled,
  helpText,
  id,
  isSelected,
  label,
  name,
  onChange,
  onFocus,
  onBlur,
  value,
}) {
  const handleChange = () => {
    onChange(value);
  };

  const radioIconMarkup = () => {
    if (isSelected) {
      return (
        <Icon
          size="20"
          className={disabled ? 'neutral-500' : 'blue'}
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
    <Block marginBottom="3" className={classes} alignItems="start">
      <input
        id={id}
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

export default Radio;
