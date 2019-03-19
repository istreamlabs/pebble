import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Button from '../Button/Button';
import Text from '../Text/Text';

import './Input.scss';


/**
 * Input field that people can type values into.
 *
 * ---
 */

class Input extends React.Component {
  onBlur = (event) => {
    const { onBlur } = this.props;
    if (onBlur !== undefined) {
      onBlur(event);
    }
  };

  onFocus = (event) => {
    const { onFocus } = this.props;
    if (onFocus !== undefined) {
      onFocus(event);
    }
  };

  onChange = (event) => {
    const { onChange } = this.props;
    if (onChange !== undefined) {
      onChange(event);
    }
  };

  getInputProps = () => {
    const {
      ariaLabel,
      ariaLabelledby,
      ariaDescribedBy,
      autoFocus,
      className,
      disabled,
      isInvalid,
      isReadOnly,
      id,
      maxLength,
      name,
      placeholder,
      size,
      spellCheck,
      type,
      value,
    } = this.props;

    const classes = classNames('input',
      {
        'input-error': isInvalid,
        'input-s': size === 'small',
        'input-m': size === 'medium',
        'input-l': size === 'large',
        'bg-neutral-200': isReadOnly,
      },
      className);

    return {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': !!isInvalid,
      autoFocus,
      className: classes,
      disabled,
      id,
      maxLength,
      name,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      placeholder,
      readOnly: isReadOnly,
      spellCheck,
      type,
      value,
    };
  };

  getPrefixMarkup = prefix => (
    <div className="input-prefix">
      {prefix}
    </div>
  )

  getSuffixMarkup = suffix => (
    <div className="input-suffix">
      {suffix}
    </div>
  )

  getClearBtnMarkup() {
    const { clearBtnFunc, value } = this.props;

    if (value !== '' && value !== null) {
      return (
        <Button
          plain
          icon="remove-circle"
          onClick={clearBtnFunc}
          accessibilityLabel="clear input value"
          className="input-clear-btn"
        />
      );
    }
  }

  getCharacterCountMarkup() {
    const { maxLength, value } = this.props;

    const charValue = value !== '' ? value : '';
    const characterCount = charValue.length;

    const characterCountText = !maxLength
      ? characterCount
      : `${characterCount}/${maxLength}`;

    return (
      <Text size="6" className="pt-2">{characterCountText}</Text>
    );
  }

  render() {
    const {
      clearBtnFunc, prefix, suffix, showCharacterCount
    } = this.props;

    return (
      <>
        <Block alignItems="stretch" className="w-100 relative">
          {prefix && this.getPrefixMarkup(prefix)}
          <input
            {...this.getInputProps()}
          />

          {suffix && this.getSuffixMarkup(suffix)}
          {clearBtnFunc && this.getClearBtnMarkup()}
        </Block>
        {showCharacterCount && this.getCharacterCountMarkup()}
      </>
    );
  }
}

Input.defaultProps = {
  ariaLabel: null,
  ariaLabelledby: null,
  ariaDescribedBy: null,
  autoFocus: false,
  disabled: false,
  isInvalid: false,
  name: '',
  placeholder: '',
  required: false,
  size: 'medium',
  spellCheck: true,
  type: 'text',
};

Input.propTypes = {
  /**
   * Sets aria-label attribute.
   */
  ariaLabel: PropTypes.string,
  /**
   * Sets aria-labelledby attribute.
   */
  ariaLabelledby: PropTypes.string,
  /**
   * Sets aria-describedby attribute.
   */
  ariaDescribedBy: PropTypes.string,
  /**
   * The autofocus attribute of the input
   */
  autoFocus: PropTypes.bool,
  /**
   * If the input should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * If the input should appear invalid
   */
  isInvalid: PropTypes.bool,
  /**
   * If the value of the input can be read, but not changed
   */
  isReadOnly: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string,
  /**
   * Maximum length the input value can be
   */
  maxLength: PropTypes.number,
  /**
   * The name attribute of the input
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
   * Text to display before the value
   */
  prefix: PropTypes.string,
  /**
   * The [spellcheck](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/spellcheck) attribute of the input
   */
  spellCheck: PropTypes.bool,
  /**
   * Text to display after the value
   */
  suffix: PropTypes.string,
  /**
   * Changes the size of the input, giving it more or less padding and font size
   * @type {PropTypes.Requireable<Size>}
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input type attribute
   */
  type: PropTypes.string,
  /**
   * The value of the input on mount
   */
  defaultValue: PropTypes.string,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node,
  /**
   * The value of the input
   */
  value: PropTypes.string,
  /**
   * If defined, a clear button will be rendered and will call this function when pressed
   */
  clearBtnFunc: PropTypes.func,
  /**
   * Display character count of the input value
   */
  showCharacterCount: PropTypes.bool,
};

export default Input;
