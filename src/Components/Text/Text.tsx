import React, { forwardRef, Ref } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import classNames from 'classnames';
import parseTextSize from '../../Utils/ParseTextSize';
import { PropsType } from '../../Utils/PropsType';
import { colorType, fontSizeType } from '../../Types';

import './Text.scss';

const propTypes = {
  /**
   * Convenience values to style the text
   * @type {PropTypes.Requireable<'success'|'warn'|'danger'|'muted'|'info'|'code'>}
   */
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
  size: 5,
};

/**
 * The Text component renders a span. It is a convenient
 * way to enforce consistency of supported text colors
 * and font-sizes. By default, it does not apply styling
 * so it can inherit styles of its parent.
 *
 * ---
 */

type Props = PropsType<typeof propTypes, typeof defaultProps>;

const Text = forwardRef(({
  appearance,
  bold,
  children,
  className,
  color,
  size,
  responsive,
  ...rest
}: InferProps<Props>, ref: Ref<any>) => {
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
