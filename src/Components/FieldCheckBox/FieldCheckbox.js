import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Checkbox from './Components/Checkbox';
import Text from '../Text/Text';

/**
 * A way to allow users to make a range of selections (zero, one or many).
 *
 * ---
 */

const FieldCheckbox = (
  {
    id,
    label,
    isSelected,
    className,
    helpText,
    value,
    onChange,
    disabled
  }
) => {
  const checkboxMarkup = () => (
    <Checkbox
      key={id}
      id={id}
      isSelected={isSelected}
      onChange={onChange}
      value={value}
      disabled={disabled}
    />
  );

  const helpTextMarkup = () => {
    if (helpText === undefined) return;
    return (
      <Text size="6" appearance="muted" className="db fs-7 mt-1">{helpText}</Text>
    );
  };

  const classes = classNames('field-radio-group', className);

  const labelClasses = classNames('db mb-2', {
    'neutral-400': disabled
  });

  return (
    <Block className={classes}>
      {checkboxMarkup()}
      <Block direction="column" className="ml-2">
        <label htmlFor={id} className={labelClasses}>
          {label}
          {helpTextMarkup()}
        </label>
      </Block>
    </Block>
  );
};

FieldCheckbox.propTypes = {
  /**
   * The id attribute of the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  /**
   * The label for the checkbox
   */
  label: PropTypes.string.isRequired,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Set the checkbox as selected
   */
  isSelected: PropTypes.bool,
  /**
   * Currently selected option value
   */
  value: PropTypes.string,
  /**
   * Additional classes to add
   */
  className: PropTypes.string,
  /**
   * Callback function when a checkbox is changed
   */
  onChange: PropTypes.func,
};

export default FieldCheckbox;
