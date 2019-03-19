import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Input from '../Input/Input';
import Text from '../Text/Text';

import './FieldText.scss';

class FieldText extends React.Component {
  getValidationMarkup() {
    const { validationText } = this.props;

    return (
      <Text appearance="danger" size="6" className="pt-2">{validationText}</Text>
    );
  }

  renderChildren() {
    const {
      children,
      className,
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
      disabled,
      helpText,
      htmlFor,
      id,
      label,
      isInvalid,
    } = this.props;

    const classes = classNames('field-text', className);
    const labelClasses = classNames(
      'db',
      'mb-2',
      'fs-5',
      'fw-700',
      {
        'neutral-500': disabled,
        red: isInvalid,
      }
    );

    const labelFor = htmlFor || id;

    return (
      <Block direction="column" className={classes}>
        {label
          && (
          <label
            className={labelClasses}
            htmlFor={labelFor}
          >
            {label}
          </label>
          )
        }
        {helpText && <Text size="6" className="mb-2">{helpText}</Text>}
        {this.renderChildren()}
        {isInvalid && this.getValidationMarkup()}
      </Block>
    );
  }
}

FieldText.defaultProps = {
  autoFocus: false,
  disabled: false,
  helpText: '',
  isInvalid: false,
  name: '',
  placeholder: '',
  required: false,
  size: 'medium',
  spellCheck: true,
};

FieldText.propTypes = {
  children: PropTypes.node,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
  required: PropTypes.bool,
  isInvalid: PropTypes.bool,
  helpText: PropTypes.string,
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
};

export default FieldText;
