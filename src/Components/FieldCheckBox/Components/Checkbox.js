import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';
import Icon from '../../Icon/Icon';

const Checkbox = ({
  className,
  disabled,
  id,
  isSelected,
  onChange,
  value,
  ...rest
}) => {
  const handleChange = () => {
    onChange(!isSelected);
  };

  const checkboxIconMarkup = () => {
    if (isSelected && disabled) {
      return <Icon size="20" className="blue-light" name="checkbox-checked" />;
    }
    if (isSelected) {
      return <Icon size="20" className="blue" name="checkbox-checked" />;
    }
    if (disabled) {
      return <Icon size="20" className="neutral-300" name="checkbox" />;
    }
    return <Icon size="20" className="neutral-500 neutral-700-hover" name="checkbox" />;
  };

  const classes = classNames('relative', className);

  return (
    <Block className={classes}>
      <input
        id={id}
        checked={isSelected || false}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
        className="absolute o-0"
        value={value}
        {...rest}
      />
      {checkboxIconMarkup()}
    </Block>
  );
};

Checkbox.defaultPros = {
  disabled: false,
  isSelected: false,
  onChange: () => {}
};

Checkbox.propTypes = {
  /**
   * Additional classes to add
   */
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
  id: PropTypes.string.isRequired,
  /**
   * Set the checkbox as selected
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function when input is changed
   */
  onChange: PropTypes.func,
  /**
   * The value of the input
   */
  value: PropTypes.string,
};

export default Checkbox;
