import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormLayout from '../FormLayout/FormLayout';

class Form extends React.Component {
  render() {
    const {
      children, className, ...rest
    } = this.props;

    return (
      <form className={classNames(className, 'form')} {...rest} onReset={this.onReset} onSubmit={this.onSubmit}>
        <FormLayout>
          {children}
        </FormLayout>
      </form>
    );
  }
}

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onChange: PropTypes.func,
  onReset: PropTypes.func,
  onSubmit: PropTypes.func,
  /**
   * An object representing all of the data in the form
   */
  value: PropTypes.object,
};

export default Form;
