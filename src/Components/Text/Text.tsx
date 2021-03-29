// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { forwardRef } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';
import { colorType, fontSizeType } from '../../Types';

import './Text.scss';

const propTypes = {
  /**
   * Convenience values to style the text
   // @ts-expect-error ts-migrate(2749) FIXME: 'colorType' refers to a value, but is being used a... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<'success'|'warn'|'danger'|'muted'|'info'|'code'>}
   */
  // @ts-expect-error ts-migrate(2749) FIXME: 'fontSizeType' refers to a value, but is being use... Remove this comment to see the full error message
  appearance: PropTypes.oneOf([
    'success',
    'warn',
    'danger',
    'muted',
    'info',
    'code',
    'mono',
  ]),
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
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
  className: PropTypes.string,
  /**
   * [Color identifier](/#/Styles/Color) of the text color
   * @type {PropTypes.Requireable<Color>}
   */
  color: colorType,
  /**
   * set font size based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: fontSizeType,
  /**
   * on smaller devices, decrease the size of the specified size
   */
  responsive: PropTypes.bool,
};

const defaultProps = {
  bold: false,
};

/**
 * The Text component renders a span. It is a convenient
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * way to enforce consistency of supported text colors
 * and font-sizes. By default, it does not apply styling
 * so it can inherit styles of its parent.
 */

const Text = forwardRef((props, ref) => {
  const {
    appearance,
    bold,
    children,
    className,
    color,
    size,
    responsive,
    ...rest
  } = props;

  const parsedSize = parseTextSize(size);

  const Element = appearance === 'code' ? 'code' : 'span';

  const classes = classNames(
    'text',
    color,
    {
      [`fs-${parsedSize}`]: parsedSize && !responsive,
      [`fs-${parsedSize}-responsive`]: parsedSize && responsive,
      'fw-700': bold,
      [`appearance-${appearance}`]: appearance,
    },
    className,
  );

  return (
    <Element className={classes} ref={ref} {...rest}>
      {children}
    </Element>
  );
});

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;
Text.displayName = 'Text';

export default Text;
