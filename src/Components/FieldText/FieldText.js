import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Input from '../Input/Input';
import Text from '../Text/Text';

import './FieldText.scss';

/**
 * Stateless text fields.
 *
 * ---
 */

class FieldText extends React.Component {
  getLabelMarkup() {
    const {
      id, label, disabled, isInvalid
    } = this.props;

    const labelClasses = classNames(
      'db',
      'mb-2',
      'fs-6',
      'fw-700',
      {
        'neutral-500': disabled,
        red: isInvalid,
      }
    );

    return (
      <label
        className={labelClasses}
        htmlFor={id}
      >
        {label}
      </label>
    );
  }

  renderChildren() {
    const {
      className,
      isLabelHidden,
      label,
      ...rest
    } = this.props;

    const ariaLabelValue = isLabelHidden ? label : '';

    return (
      <Input
        ariaLabel={ariaLabelValue}
        {...rest}
      />
    );
  }

  render() {
    const {
      className,
      helpText,
      isInvalid,
      isLabelHidden,
      label,
      validationText,
    } = this.props;

    const classes = classNames('field-text', className);

    return (
      <Block direction="column" className={classes}>
        {label && !isLabelHidden && this.getLabelMarkup()}
        {helpText && <Text size="6" className="field-text-help mb-2">{helpText}</Text>}
        {this.renderChildren()}
        {isInvalid && validationText
          && <Text appearance="danger" size="6" className="field-text-validation pt-2">{validationText}</Text>}
      </Block>
    );
  }
}

FieldText.defaultProps = {
  autoFocus: false,
  disabled: false,
  helpText: '',
  isInvalid: false,
  isLabelHidden: false,
  isReadOnly: false,
  name: '',
  placeholder: '',
  size: 'medium',
  spellCheck: true,
  type: 'text'
};

FieldText.propTypes = {
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
  id: PropTypes.string,
  /**
   * Applies styling to indicate the input is invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * Additional hint displayed beneath the label
   */
  helpText: PropTypes.string,
  /**
   * Visually hide the label
   */
  isLabelHidden: PropTypes.bool,
  /**
   * Text to display if the input is invalid.
   * The text should explain why the input is invlide.
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
  type: PropTypes.string,
  /**
   * Text to display before the value
   */
  prefix: PropTypes.string,
  /**
   * Text to display after the value
   */
  suffix: PropTypes.string,
};

export default FieldText;
