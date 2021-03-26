import React from 'react';
import PropTypes from 'prop-types';
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
   * The unique identifier for field this label is for
   */
  id: PropTypes.string.isRequired,
  /**
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
  required: false,
};

/**
 * Renders an html label element
 *
 * ---
 */

function Label({
  children,
  className,
  disabled,
  hide,
  id,
  invalid,
  required,
}) {
  if (hide) {
    return (
      <VisuallyHidden>
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
