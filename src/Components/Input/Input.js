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
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      value: this.props.defaultValue
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  getInputProps = () => {
    const {
      ariaLabel,
      ariaLabelledby,
      ariaDescribedBy,
      className,
      disabled,
      error,
      id,
      name,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      placeholder,
      rows,
      size,
      type,
      autoFocus,
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
      disabled,
      id,
      name,
      onBlur: this.onBlur,
      onFocus: this.onFocus,
      onKeyDown,
      onKeyPress,
      onKeyUp,
      placeholder,
      rows,
      type,
      className: classes,
      autoFocus
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
    const { value } = this.state;

    const { prefix, suffix } = this.props;

    return (
      <Block alignItems="stretch" className="input-container">
        {prefix && this.getPrefixMarkup(prefix)}
        <input
          value={value}
          onChange={this.handleChange}
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
  onBlur: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onKeyPress: () => {},
  onKeyUp: () => {},
  onFocus: () => {},
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
  autoFocus: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onKeyPress: PropTypes.func,
  onKeyUp: PropTypes.func,
  onFocus: PropTypes.func,
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
  rows: PropTypes.number,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node,
};

export default Input;
