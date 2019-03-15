import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FormField.scss';

import Block from '../Block/Block';
import Input from '../Input/Input';

class FormField extends React.Component {
  renderChildren() {
    const {
      children,
      ...rest
    } = this.props;

    if (children) {
      return children;
    }

    return (
      <Input
        {...rest}
      />
    );
  }

  render() {
    const {
      className,
      label,
    } = this.props;

    const classes = classNames('form-field', className)

    return (
      <Block direction="column" className={classes}>
        {label
          && (
          <label
            className="form-field-label"
            htmlFor="input-text"
          >
            {label}
          </label>
          )
        }
        {this.renderChildren()}
      </Block>
    );
  }
}

FormField.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
  name: PropTypes.string,
};

export default FormField;
