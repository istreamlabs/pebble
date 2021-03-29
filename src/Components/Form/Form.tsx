// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../FormLayout/FormLayout' was resolved to ... Remove this comment to see the full error message
import classNames from 'classnames';

import FormLayout from '../FormLayout/FormLayout';

const propTypes = {
  /**
   * Contents of the form
   */
  children: PropTypes.node,
  /**
   * Additional css classes to apply to the Form
   */
  className: PropTypes.string,
  /**
   * Method used to submit the form
   */
  method: PropTypes.oneOf(['post', 'get']),
  /**
   * A unique name for the Form
   */
  name: PropTypes.string,
  /**
   * Callback function when the Form is changed
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
  onChange: PropTypes.func,
  /**
   // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Form'.
   * Callback function when the Form is reset
   */
  onReset: PropTypes.func,
  /**
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'event' implicitly has an 'any' type.
   * Callback function when the Form is submitted
   */
  // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Form'.
  onSubmit: PropTypes.func,
  /**
   * Decrease the vertical and horizontal spacing between inputs
   */
  tight: PropTypes.bool,
};

/**
 * A wrapper component that handles submission of a form
 // @ts-expect-error ts-migrate(2339) FIXME: Property 'props' does not exist on type 'Form'.
 * and automatically wraps its children in [FormLayout](/#/Components/FormLayout).
 *
 * ---
 */

class Form extends React.PureComponent {
  handleSubmit = event => {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(event);
  };

  handleReset = event => {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    const { onReset } = this.props;
    event.preventDefault();
    // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
    onReset(event);
  };

  // @ts-expect-error ts-migrate(2339) FIXME: Property 'displayName' does not exist on type 'typ... Remove this comment to see the full error message
  render() {
    const {
      children,
      className,
      method,
      name,
      onReset,
      onSubmit,
      onChange,
      tight,
      ...rest
    } = this.props;

    return (
      <form
        className={classNames(className, 'w-100')}
        method={method}
        name={name}
        onChange={onChange}
        onReset={this.handleReset}
        onSubmit={this.handleSubmit}
        {...rest}
      >
        <FormLayout tight={tight}>{children}</FormLayout>
      </form>
    );
  }
}

Form.propTypes = propTypes;
Form.displayName = 'Form';

export default Form;
