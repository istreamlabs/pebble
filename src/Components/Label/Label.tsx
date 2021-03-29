// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import classNames from 'classnames';

import Block from '../Block/Block';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

const propTypes = {
  /**
   * Contents of the label
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional css classes to add
   */
  className: PropTypes.string,
  /**
   * If the  should be disabled and not focusable
   */
  disabled: PropTypes.bool,
  /**
   * Visually hide the label but keep it accessible to screenreaders
   */
  hide: PropTypes.bool,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * The unique identifier for field this label is for
   */
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  id: PropTypes.string.isRequired,
  /**
   // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
   * Applies styling to indicate the input is invalid
   */
  invalid: PropTypes.bool,
  /**
   * If the input should be required.
   */
  required: PropTypes.bool,
};

const defaultProps = {
  disabled: false,
  hide: false,
  isInvalid: false,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  required: false,
};

/**
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * Renders an html label element
 *
 * ---
 */

function Label({
  children,
  className,
  // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
  disabled,
  hide,
  id,
  invalid,
  required,
}) {
  if (hide) {
    return (
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      <VisuallyHidden>
        {/* @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message */}
        <label id={`${id}Label`} htmlFor={id}>
          {children}
        </label>
      </VisuallyHidden>
    );
  }

  const labelClasses = classNames(
    'db',
    'mb-2',
    'fs-6',
    'fw-700',
    {
      'neutral-500': disabled,
      red: invalid,
    },
    className,
  );

  return (
    <Block direction="column">
      <label id={`${id}Label`} htmlFor={id} className={labelClasses}>
        <span className={classNames({ 'required-input': required })}>
          {children}
        </span>
      </label>
    </Block>
  );
}

Label.defaultProps = defaultProps;
Label.propTypes = propTypes;
Label.displayName = 'Label';

export default Label;
