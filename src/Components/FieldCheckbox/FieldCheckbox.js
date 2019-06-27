import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Checkbox from './Components/Checkbox';
import Text from '../Text/Text';

const propTypes = {
  /**
   * The id attribute of the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.node,
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
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
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
  /**
   * Make the checkbox look like a toggle switch
   */
  toggle: PropTypes.bool,
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
};

const defaultProps = {
  className: undefined,
  disabled: false,
  helpText: undefined,
  isInvalid: false,
  isSelected: false,
  onChange: undefined,
  toggle: false,
  validationText: undefined,
  value: undefined
};

/**
 * A way to allow users to make a range of selections (zero, one or many).
 *
 * ---
 */

function FieldCheckbox({
  id,
  label,
  isSelected,
  isInvalid,
  className,
  helpText,
  value,
  onChange,
  disabled,
  toggle,
  validationText,
  ...rest
}) {
  const checkboxMarkup = () => (
    <Checkbox
      toggle={toggle}
      key={id}
      id={id}
      isSelected={isSelected}
      isInvalid={isInvalid}
      onChange={onChange}
      value={value}
      disabled={disabled}
      className={toggle ? 'toggle-input' : null}
      {...rest}
    />
  );

  const labelMarkup = () => {
    if (toggle) {
      const labelClasses = classNames(
        'flex', {
          'items-center': toggle && !isInvalid,
          red: isInvalid,
        }
      );

      return (
        <label className={labelClasses} htmlFor={id}>
          <div className="toggle-switch" aria-hidden="true">
            <div className="toggle-text-left relative text-center fw-700 text-transform-uppercase" aria-hidden="true">
              on
            </div>
            <div className="toggle-text-right relative text-center fw-700 text-transform-uppercase" aria-hidden="true">
              off
            </div>
          </div>
          <div className="ml-2">
            {label}
            {helpTextMarkup()}
            {getValidationTextMarkup()}
          </div>
        </label>
      );
    }

    // normal checkbox
    const labelClasses = classNames(
      'db mb-2', {
        red: isInvalid,
      }
    );

    return (
      <Block direction="column" className="ml-2">
        <label htmlFor={id} className={labelClasses}>
          {label}
          {helpTextMarkup()}
          {getValidationTextMarkup()}
        </label>
      </Block>
    );
  };

  const helpTextMarkup = () => {
    if (helpText === undefined || helpText === '') return;
    return (
      <Text size="6" appearance="muted" className="db mt-1">{helpText}</Text>
    );
  };

  const getValidationTextMarkup = () => {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">{validationText}</Text>
    );
  };

  const classes = classNames('relative',
    {
      toggle,
      invalid: isInvalid,
      'o-50': disabled
    },
    className);

  return (
    <Block className={classes}>
      {checkboxMarkup()}
      {labelMarkup()}
    </Block>
  );
}

FieldCheckbox.propTypes = propTypes;
FieldCheckbox.defaultProps = defaultProps;

export default FieldCheckbox;
