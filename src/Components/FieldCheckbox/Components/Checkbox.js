import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../../Icon/Icon';

import './Checkbox.scss';

const Checkbox = ({
  className,
  disabled,
  id,
  isSelected,
  isInvalid,
  onChange,
  value,
  toggle,
  ...rest
}) => {
  const handleChange = () => {
    onChange(!isSelected);
  };

  const checkboxIconMarkup = () => {
    if (!toggle) {
      const iconProps = {
        classes: 'neutral-500 neutral-700-hover',
        name: 'checkbox'
      };
      if (isSelected && disabled) {
        iconProps.classes = 'blue';
        iconProps.name = 'checkbox-checked';
      }
      if (isSelected) {
        iconProps.classes = 'blue blue-dark-hover';
        iconProps.name = 'checkbox-checked';
      }
      if (isInvalid) {
        iconProps.classes = 'red';
      }
      const checkboxIconClasses = classNames(iconProps.classes, 'checkbox-icon');
      return <Icon size="20" className={checkboxIconClasses} name={iconProps.name} />;
    }
  };

  const inputClasses = classNames('checkbox absolute o-0', className);

  return (
    <>
      <input
        id={id}
        checked={isSelected || false}
        disabled={disabled}
        onChange={handleChange}
        type="checkbox"
        className={inputClasses}
        value={value}
        {...rest}
      />
      {checkboxIconMarkup()}
    </>
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
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
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
  /**
   * Make the checkbox look like a toggle switch
   */
  toggle: PropTypes.bool
};

export default Checkbox;
