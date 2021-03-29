// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import { dimensionType } from '../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Label/Label' was resolved to '/Users/es... Remove this comment to see the full error message
import Block from '../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Input/Input' was resolved to '/Users/es... Remove this comment to see the full error message
import Label from '../Label/Label';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Text/Text' was resolved to '/Users/esja... Remove this comment to see the full error message
import Input from '../Input/Input';
import Text from '../Text/Text';

import './FieldText.scss';

const propTypes = {
  /**
   * Specifies whether or not an input field should have autocomplete enabled
   */
  autoComplete: PropTypes.oneOf(['on', 'off']),
  /**
   * Automatically focus the input
   */
  autoFocus: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Callback for a button to clear the input value
   */
  clearBtnFunc: PropTypes.func,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * Name attribute of the input
   */
  name: PropTypes.string,
  /**
   * Callback function when input is blurred
   */
  onBlur: PropTypes.func,
  /**
   * Callback function when input is changed
   */
  // @ts-expect-error ts-migrate(2749) FIXME: 'dimensionType' refers to a value, but is being us... Remove this comment to see the full error message
  onChange: PropTypes.func,
  /**
   * Callback function when input is focused
   */
  onFocus: PropTypes.func,
  /**
   * A short hint that is displayed when there is no value
   */
  placeholder: PropTypes.string,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string.isRequired,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'FieldText... Remove this comment to see the full error message
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Additional hint displayed beneath the input
   */
  helpText: PropTypes.node,
  /**
   * Visually hide the label
   */
  hideLabel: PropTypes.bool,
  /**
   * The [spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute of the input
   // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'FieldText... Remove this comment to see the full error message
   */
  ignoreSpellCheck: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Type attribute of the input
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'FieldText... Remove this comment to see the full error message
  type: PropTypes.oneOf([
    'email',
    'password',
    'search',
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    'tel',
    'text',
    'url',
  ]),
  /**
   * Text or node to display before the value
   */
  prefix: PropTypes.node,
  /**
   * If the input should be required.
   */
  required: PropTypes.bool,
  /**
   * Text or node to display after the value
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'FieldText... Remove this comment to see the full error message
  suffix: PropTypes.node,
  /**
   * Text to display if the input is invalid.
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
  /**
   * A valid css width (%, px, em, rem).
   *
   // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'FieldText... Remove this comment to see the full error message
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  autoComplete: 'off',
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'defaultProps' does not exist on type 'ty... Remove this comment to see the full error message
  autoFocus: false,
  clearBtnFunc: undefined,
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message
  disabled: false,
  isInvalid: false,
  hideLabel: false,
  ignoreSpellCheck: false,
  isReadOnly: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  required: false,
  size: 'medium',
  type: 'text',
  width: '100',
};

/**
 * Stateless text fields.
 *
 * ---
 */

class FieldText extends React.PureComponent {
  getLabel() {
    const {
      isInvalid,
      disabled,
      id,
      hideLabel,
      label,
      required,
    } = this.props;

    return (
      <Label
        id={id}
        invalid={isInvalid}
        disabled={disabled}
        hide={hideLabel}
        required={required}
      >
        {label}
      </Label>
    );
  }

  getValidationTextMarkup() {
    const { isInvalid, validationText } = this.props;

    if (!isInvalid || validationText === undefined) return;

    return (
      <Text
        appearance="danger"
        size="6"
        className="field-text-validation pt-2"
      >
        {validationText}
      </Text>
    );
  }

  getHelpTextMarkup() {
    const { helpText } = this.props;

    if (helpText) {
      return (
        <Text size="6" className="db mt-2">
          {helpText}
        </Text>
      );
    }
    return null;
  }

  renderChildren() {
    const {
      className,
      hideLabel,
      label,
      ignoreSpellCheck,
      required,
      ...rest
    } = this.props;

    const ariaLabelValue = hideLabel ? label : '';

    const shouldSpellCheck = !ignoreSpellCheck;

    return (
      <Input
        ariaLabel={ariaLabelValue}
        required={required}
        spellCheck={shouldSpellCheck}
        {...rest}
      />
    );
  }

  render() {
    const { className, width } = this.props;

    const classes = classNames('field-text', className);

    return (
      <Block direction="column" className={classes} width={width}>
        {this.getLabel()}
        {this.renderChildren()}
        {this.getHelpTextMarkup()}
        {this.getValidationTextMarkup()}
      </Block>
    );
  }
}

FieldText.defaultProps = defaultProps;
FieldText.propTypes = propTypes;
FieldText.displayName = 'FieldText';

export default FieldText;
