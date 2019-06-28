import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';
import { fontSizeType } from '../../Types';

import './Text.scss';

const propTypes = {
  /**
   * color of the text
   * @type {PropTypes.Requireable<'success'|'warn'|'danger'|'muted'|'info'|'code'>}
   */
  appearance: PropTypes.oneOf(['success', 'warn', 'danger', 'muted', 'info', 'code']),
  /**
   * Give the text a bold appearance
   */
  bold: PropTypes.bool,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * set font size based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: fontSizeType,
};

const defaultProps = {
  bold: false,
  size: 5,
};

/**
 * The Text component renders a span. It is a convenient
 * way to enforce consistency of supported text colors
 * and font-sizes. By default, it does not apply styling
 * so it can inherit styles of its parent.
 */

function Text({
  bold,
  children,
  className,
  appearance,
  size,
  ...rest
}) {
  const parsedSize = parseTextSize(size);

  const Element = appearance === 'code' ? 'code' : 'span';

  const classes = classNames('text', {
    [`fs-${parsedSize}`]: parsedSize,
    'fw-700': bold,
    [`appearance-${appearance}`]: appearance,
  }, className);

  return (
    <Element className={classes} {...rest}>
      {children}
    </Element>
  );
}

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
