// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module './Components/Checkbox' was resolved to '/U... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  onChange: PropTypes.func,
  /**
   * If the selection is required.
   */
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  required: PropTypes.bool,
  /**
   * Make the checkbox look like a toggle switch
   */
  toggle: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  required,
  toggle,
  validationText,
  value,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  ...rest
}) {
  const labelSpan = (
    <span className={classNames({ 'required-input': required })}>
      {label}
    {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
    </span>
  );
  const checkboxMarkup = () => {
    const ariaLabelValue = hideLabel ? label : '';
    return (
      <Checkbox
        aria-label={ariaLabelValue}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        aria-required={required}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        className={toggle ? 'toggle-input' : null}
        disabled={disabled}
        id={id}
        isInvalid={isInvalid}
        isSelected={isSelected}
        key={id}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        onChange={onChange}
        // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
        required={required}
        toggle={toggle}
        value={value}
        {...rest}
      />
    );
  };

  const labelMarkup = () => {
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    if (toggle) {
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      const labelClasses = classNames('flex', {
        'items-center': toggle && !isInvalid,
        red: isInvalid,
      });

      return (
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <label className={labelClasses} htmlFor={id}>
          <div
            // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
            className="flex-shrink-0 toggle-switch"
            aria-hidden="true"
          >
            <div
              // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
              className="toggle-text-left relative text-center fw-700 text-transform-uppercase"
              aria-hidden="true"
            >
              on
            </div>
            <div
              // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
              className="toggle-text-right relative text-center fw-700 text-transform-uppercase"
              aria-hidden="true"
            >
              off
            </div>
          </div>
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
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
        // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        red: isInvalid,
      });
      return (
        <Block direction="column" className="ml-2">
          <label htmlFor={id} className={labelClasses}>
            {labelSpan}
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
