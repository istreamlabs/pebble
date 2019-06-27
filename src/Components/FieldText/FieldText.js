import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dimensionType } from '../../Types';

import Block from '../Block/Block';
import Label from '../Label/Label';
import Input from '../Input/Input';
import Text from '../Text/Text';

import './FieldText.scss';

const propTypes = {
  /**
   * Automatically focus the input
   */
  autoFocus: PropTypes.bool,
  /**
   * label for the input
   */
  label: PropTypes.string.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
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
   * Text to display if the input is invalid.
   * The text should explain why the input is invalid.
   */
  validationText: PropTypes.string,
  /**
   * The [spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute of the input
   */
  spellCheck: PropTypes.bool,
  /**
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Type attribute of the input
   */
  type: PropTypes.oneOf([
    'email',
    'password',
    'search',
    'tel',
    'text',
    'url'
  ]),
  /**
   * Text to display before the value
   */
  prefix: PropTypes.string,
  /**
   * Text to display after the value
   */
  suffix: PropTypes.string,
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
  className: '',
  disabled: false,
  isInvalid: false,
  helpText: undefined,
  hideLabel: false,
  isReadOnly: false,
  name: '',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  placeholder: '',
  prefix: undefined,
  spellCheck: false,
  suffix: undefined,
  size: 'medium',
  type: 'text',
  validationText: '',
  width: '100'
};

/**
 * Stateless text fields.
 *
 * ---
 */

class FieldText extends React.Component {
  getLabel() {
    const {
      isInvalid, disabled, id, hideLabel, label
    } = this.props;

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
    const {
      isInvalid,
      validationText,
    } = this.props;

    if (!isInvalid || validationText === undefined) return;

    return (
      <Text appearance="danger" size="6" className="field-text-validation pt-2">{validationText}</Text>
    );
  }

  getHelpTextMarkup() {
    const { helpText } = this.props;

    if (helpText === undefined) return;

    return (
      <Text size="6" className="field-text-help mt-2">{helpText}</Text>
    );
  }

  renderChildren() {
    const {
      className,
      hideLabel,
      label,
      ...rest
    } = this.props;

    const ariaLabelValue = hideLabel ? label : '';

    const shouldSpellCheck = rest.type === 'text';

    return (
      <Input
        ariaLabel={ariaLabelValue}
        spellCheck={shouldSpellCheck}
        {...rest}
      />
    );
  }

  render() {
    const {
      className,
      width,
    } = this.props;

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

export default FieldText;
