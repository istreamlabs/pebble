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
   * If the selection is required.
   */
  required: PropTypes.bool,
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
  hideLabel: false,
  isInvalid: false,
  isSelected: false,
  onChange: undefined,
  required: false,
  toggle: false,
};

/**
 * A way to allow users to make a range of selections (zero, one or many).
 *
 * ---
 */

function FieldCheckbox({
  className,
  disabled,
  helpText,
  hideLabel,
  id,
  isInvalid,
  isSelected,
  label,
  onChange,
  required,
  toggle,
  validationText,
  value,
  ...rest
}) {
  const labelSpan = (
    <span className={classNames({ 'required-input': required })}>
      {label}
    </span>
  );
  const checkboxMarkup = () => {
    const ariaLabelValue = hideLabel ? label : '';
    return (
      <Checkbox
        aria-label={ariaLabelValue}
        aria-required={required}
        className={toggle ? 'toggle-input' : null}
        disabled={disabled}
        id={id}
        isInvalid={isInvalid}
        isSelected={isSelected}
        key={id}
        onChange={onChange}
        required={required}
        toggle={toggle}
        value={value}
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
            {!hideLabel && labelSpan}
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
        <Block direction="column" className="ml-2" width="100%">
          <label htmlFor={id} className={labelClasses}>
            {labelSpan}
            <div>{helpTextMarkup()}</div>
            <div>{getValidationTextMarkup()}</div>
          </label>
        </Block>
      );
    }
  };

  const helpTextMarkup = () => {
    if (helpText === undefined || helpText === '') return;
    return (
      <Text size="6" className="db mt-1">
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
