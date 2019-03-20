import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const RadioIcon = (
  { isSelected, ...props }
) => {
  if (isSelected) {
    return <Icon {...props} className="blue" name="radio-selected" />;
  }
  return <Icon {...props} className="neutral-500" name="radio" />;
};

RadioIcon.propTypes = {
  isSelected: PropTypes.bool,
};

const Radio = ({
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
}) => {
  const handleChange = () => {
    if (onChange == null) {
      return;
    }
    onChange(value);
  };

  const labelMarkup = () => (
    <Block as="label" htmlFor={id} className="relative">
      <RadioIcon
        isSelected={isSelected}
        size="20"
      />
      <Block
        direction="column"
        className="ml-2"
      >
        <span className="fs-6">{label}</span>
        {helpText
          && (
          <Text size="7" appearance="muted" className="db mt-1">
            {helpText}
          </Text>
          )}
      </Block>
    </Block>
  );

  const classes = classNames('relative', className);

  return (
    <Block marginBottom="3" className={classes} alignItems="start">
      <input
        id={id}
        checked={isSelected}
        disabled={disabled}
        name={name}
        onChange={handleChange}
        onFocus={onFocus}
        onBlur={onBlur}
        type="radio"
        value={value}
        className="absolute o-0"
      />
      {labelMarkup()}
    </Block>
  );
};

Radio.defaultPros = {
  disabled: false,
  isSelected: false,
};

Radio.propTypes = {
  className: PropTypes.string,
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string,
  /**
   * Set the radio as selected
   */
  isSelected: PropTypes.bool,
  label: PropTypes.string.isRequired,
  helpText: PropTypes.string,
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

export default Radio;
