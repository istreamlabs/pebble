import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

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
      error,
      id,
      name,
      placeholder,
      size,
      type,
      value,
    } = this.props;

    const classes = classNames('input',
      {
        'input-disabled': disabled,
        'input-error': error,
        'input-s': size === 'small',
        'input-m': size === 'medium',
        'input-l': size === 'large',
      },
      className);

    return {
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      'aria-describedby': ariaDescribedBy,
      'aria-invalid': !!error,
      autoFocus,
      className: classes,
      disabled,
      id,
      name,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onChange: this.onChange,
      placeholder,
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

  render() {
    const { prefix, suffix } = this.props;

    return (
      <Block alignItems="stretch" className="input-container">
        {prefix && this.getPrefixMarkup(prefix)}
        <input
          {...this.getInputProps()}
        />

        {suffix && this.getSuffixMarkup(suffix)}
      </Block>
    );
  }
}

Input.defaultProps = {
  ariaLabel: null,
  ariaLabelledby: null,
  ariaDescribedBy: null,
  autoFocus: false,
  disabled: false,
  error: false,
  name: '',
  overrides: {},
  placeholder: '',
  required: false,
  size: 'medium',
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
   * If the input should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * If the input should appear in error
   */
  error: PropTypes.bool,
  /**
   * The id attribute of the input
   */
  id: PropTypes.string,
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
  prefix: PropTypes.node,
  /*
   * Text to display after the value
   */
  suffix: PropTypes.node,
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
};

export default Input;
