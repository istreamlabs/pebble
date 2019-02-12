import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';

import './Text.scss';

/**
 * The Text component renders a span. It is a convenient
 * way to enforce consistency of supported text colors
 * and font-sizes. By default, it does not apply styling
 * so it can inherit styles of its parent.
 */

const Text = (
  {
    bold,
    children,
    className,
    appearance,
    size,
  }
) => {
  const parsedSize = parseTextSize(size);

  const Element = appearance === 'code' ? 'code' : 'span';

  const classes = classNames('text', {
    [`fs-${parsedSize}`]: parsedSize,
    'fw-700': bold,
    [`appearance-${appearance}`]: appearance,
  }, className);

  return (
    <Element className={classes}>
      {children}
    </Element>
  );
};

Text.defaultProps = {
  size: 5,
};

Text.propTypes = {
  /**
   * Give the text a bold appearance
   */
  bold: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * color of the text
   */
  appearance: PropTypes.oneOf(['success', 'warn', 'danger', 'muted', 'info', 'code']),
  /**
   * A preset size based on our [typograhy scale](/#/Styles/Typography).
   */
  size: PropTypes.PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7']),
};

export default Text;
