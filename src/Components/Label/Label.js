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
};

/**
* Renders an html label element
*
* ---
*/

function Label({
  className,
  children,
  disabled,
  hide,
  id,
  invalid,
}) {
  if (hide) {
    return (
      <VisuallyHidden>
        <label id={`${id}Label`} htmlFor={id}>{children}</label>
      </VisuallyHidden>
    );
  }

  const labelClasses = classNames(
    'db',
    'mb-2',
    'fs-6',
    'fw-700', {
      'neutral-500': disabled,
      red: invalid,
    },
    className,
  );

  return (
    <Block direction="column">
      <label id={`${id}Label`} htmlFor={id} className={labelClasses}>
        {children}
      </label>
    </Block>
  );
}

Label.propTypes = propTypes;

export default Label;
