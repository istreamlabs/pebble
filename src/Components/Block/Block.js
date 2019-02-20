import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';

/**
 * A `<Block>` is a layout component to build UIs with consistent
 * padding and vertical spacing between components. Use it to also
 * set `font-size`.
 *
 * By using a `<Block>` component instead of a `div` for layouts,
 * you'll be able to maintain consistent component spacing by
 * using the padding and bottomSpacing props instead
 * of custom CSS.
 */

const Block = (
  {
    children,
    className,
    textSize,
    marginTop,
    marginBottom,
    padding,
    paddingHorizontal,
    paddingVertical,
    textAlign,
    truncate,
    ...props,
  }
) => {
  const parsedTextSize = textSize ? parseTextSize(textSize) : null;

  const classes = classNames('block', {
    [`fs-${parsedTextSize}`]: parsedTextSize,
    [`text-${textAlign}`]: textAlign,
    [`mt-${marginTop}`]: marginTop,
    [`mb-${marginBottom}`]: marginBottom,
    [`p-${padding}`]: padding,
    [`ph-${paddingHorizontal}`]: paddingHorizontal,
    [`pv-${paddingVertical}`]: paddingVertical,
    truncate,
  }, className);

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

Block.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * font size to apply to apply to all child text elements without explicitly set sizes, based on the [typograhy scale](/#/Styles/Typography
   */
  textSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7']),
  /**
   * Margin spacing to be added above this block.
   */
  marginTop: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * Margin spacing to be added below this block.
   */
  marginBottom: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * Padding to be added uniformly within this block.
   */
  padding: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * Padding to be added to the left and right. Will override a `padding` value.
   */
  paddingHorizontal: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * Padding to be added to the top and bottom. Will override a `padding` value.
   */
  paddingVertical: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * Text alignment within this block.
   */
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  /**
   * Restrict the heading text to a single line and truncate with ellipsis if it is too long to all fit.
   */
  truncate: PropTypes.bool,
};

export default Block;
