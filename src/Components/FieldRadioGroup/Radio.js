import React from 'react';
import PropTypes from 'prop-types';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';

const RadioIcon = (
  { isSelected, ...props }
) => {
  if (isSelected) {
    return <Icon {...props} name="check-circle" />;
  }
  return <Icon {...props} name="warning-circle-outline" />;
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
    onChange(id);
  };

  const labelMarkup = () => (
    <label className="db" htmlFor={id}>
      <span className="fs-6 fw-700">{label}</span>
      {helpText
        && (
        <Text size="7" appearance="muted" className="db mt-1">
          {helpText}
        </Text>
        )}
    </label>
  );

  return (
    <Block marginBottom="3" className={className} alignItems="start">
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
      />
      <RadioIcon
        isSelected={isSelected}
        size="20"
      />
      <div className="ml-2">
        {labelMarkup()}
      </div>
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
