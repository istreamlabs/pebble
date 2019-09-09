import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dimensionType } from '../../Types';

import Block from '../Block/Block';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Text from '../Text/Text';

const propTypes = {
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
  /**
   * Additional hint displayed beneath the input
   */
  helpText: PropTypes.node,
  /**
   * Visually hide the label
   */
  hideLabel: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Text or node to display before the value
   */
  prefix: PropTypes.node,
  /**
   * Text or node to display after the value
   */
  suffix: PropTypes.node,
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
  /**
   * A valid css width (%, px, em, rem).
   *
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  autoFocus: false,
  clearBtnFunc: undefined,
  disabled: false,
  isInvalid: false,
  hideLabel: false,
  isReadOnly: false,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  size: 'medium',
  width: '100',
};

/**
 * Stateless number input field.
 *
 * ---
 */

class FieldNumber extends React.PureComponent {
  getLabel() {
    const { isInvalid, disabled, id, hideLabel, label } = this.props;

    return (
      <Label
        id={id}
        invalid={isInvalid}
        disabled={disabled}
        hide={hideLabel}
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
    const { className, hideLabel, label, ...rest } = this.props;

    const ariaLabelValue = hideLabel ? label : '';

    return (
      <Input ariaLabel={ariaLabelValue} type="number" {...rest} />
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

FieldNumber.defaultProps = defaultProps;

FieldNumber.propTypes = propTypes;

export default FieldNumber;
