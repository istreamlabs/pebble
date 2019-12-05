import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Block from '../Block/Block';
import Checkbox from './Components/Checkbox';
import Text from '../Text/Text';

const propTypes = {
  /**
   * Additional classes to add
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
   * Visually hide the label
   */
  hideLabel: PropTypes.bool,
  /**
   * The id attribute of the checkbox
   */
  id: PropTypes.string.isRequired,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * Set the checkbox as selected
   */
  isSelected: PropTypes.bool,
  /**
   * The label for the checkbox
   */
  label: PropTypes.string.isRequired,
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
  /**
   * Currently selected option value
   */
  value: PropTypes.string,
};

const defaultProps = {
  disabled: false,
  isInvalid: false,
  isSelected: false,
  onChange: undefined,
  toggle: false,
  hideLabel: false,
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
  hideLabel,
  value,
  onChange,
  disabled,
  toggle,
  validationText,
  ...rest
}) {
  const checkboxMarkup = () => {
    const ariaLabelValue = hideLabel ? label : '';

    return (
      <Checkbox
        aria-label={ariaLabelValue}
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
  };

  const labelMarkup = () => {
    if (toggle) {
      const labelClasses = classNames('flex', {
        'items-center': toggle && !isInvalid,
        red: isInvalid,
      });

      return (
        <label className={labelClasses} htmlFor={id}>
          <div
            className="flex-shrink-0 toggle-switch"
            aria-hidden="true"
          >
            <div
              className="toggle-text-left relative text-center fw-700 text-transform-uppercase"
              aria-hidden="true"
            >
              on
            </div>
            <div
              className="toggle-text-right relative text-center fw-700 text-transform-uppercase"
              aria-hidden="true"
            >
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

    if (!hideLabel) {
      // normal checkbox
      const labelClasses = classNames('db', {
        red: isInvalid,
      });
      return (
        <Block direction="column" className="ml-2">
          <label htmlFor={id} className={labelClasses}>
            {label}
            {helpTextMarkup()}
            {getValidationTextMarkup()}
          </label>
        </Block>
      );
    }
  };

  const helpTextMarkup = () => {
    if (helpText === undefined || helpText === '') return;
    return (
      <Text size="6" appearance="muted" className="db mt-1">
        {helpText}
      </Text>
    );
  };

  const getValidationTextMarkup = () => {
    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="db pt-2">
        {validationText}
      </Text>
    );
  };

  const classes = classNames(
    'relative',
    {
      toggle,
      invalid: isInvalid,
      'o-50': disabled,
    },
    className,
  );

  return (
    <Block className={classes}>
      {checkboxMarkup()}
      {labelMarkup()}
    </Block>
  );
}

FieldCheckbox.propTypes = propTypes;
FieldCheckbox.defaultProps = defaultProps;
FieldCheckbox.displayName = 'FieldCheckbox';

export default FieldCheckbox;
