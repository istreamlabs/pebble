// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { colorType, textAlignType } from '../../Types';

// @ts-expect-error ts-migrate(7006) FIXME: Parameter 'size' implicitly has an 'any' type.
import './Heading.scss';

export const parseSize = (size, element) => {
  if (typeof size !== 'number') {
    size = parseInt(size, 10);
  }
  if (isNaN(size) || size < 1 || size > 6) {
    const defaultSize = element;
    size = defaultSize;
  }
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'element' implicitly has an 'any' type.
  return size;
};

export const parseElement = element => {
  if (typeof element !== 'number') {
    element = parseInt(element, 10);
  }
  if (isNaN(element) || element < 1 || element > 6) {
    const { element: defaultElement } = Heading.defaultProps;
    element = defaultElement;
  }
  return element;
};

const propTypes = {
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'colorType' refers to a value, but is being used a... Remove this comment to see the full error message
   * Contents of the heading
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * [Color identifier](/#/Styles/Color) of the text color
   // @ts-expect-error ts-migrate(2749) FIXME: 'textAlignType' refers to a value, but is being us... Remove this comment to see the full error message
   * @type {PropTypes.Requireable<Color>}
   */
  color: colorType,
  /**
   * Semantic heading level, can passed as int or string
   * @type {PropTypes.Requireable<ElementSizeLike>}
   */
  element: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ]).isRequired,
  /**
   * should the font size be reduced for smaller viewports
   */
  responsive: PropTypes.bool,
  /**
   * appearance level, can passed as int or string
   * @type {PropTypes.Requireable<ElementSizeLike>}
   */
  size: PropTypes.oneOf([
    1,
    2,
    3,
    4,
    5,
    6,
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
  ]),
  /**
   * text alignment
   * @type {PropTypes.Requireable<TextAlign>}
   */
  textAlign: textAlignType,
  /**
   * Restrict the heading text to a single line and truncate with ellipsis if it is too long to all fit.
   */
  truncate: PropTypes.bool,
};

const defaultProps = {
  color: 'neutral-700',
  element: 2,
  responsive: true,
  textAlign: 'left',
};

/**
 * Headings are labels for sections or areas that make up an interface.
 * They can label an entire page, or sections of related content.
 * Our `Heading` component allows you to select an appropriate semantic
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * element (h1-h6) and independently set its size so that it is
 * appropriate for the surrounding content.

 * If you do not pass an explicit size, the Heading will pick the
 * size based on the element. By default headings will scale for mobile,
 * tablet and desktop [viewports](.//#/Styles/Media%20Query).
 *
 * ---
 */

function Heading({
  children,
  className,
  color,
  element,
  responsive,
  textAlign,
  truncate,
  size,
}) {
  const parsedElement = parseElement(element);
  const Element = `h${parsedElement}`;

  const parsedSize = size
    ? parseSize(size, parsedElement)
    : parsedElement;
  const headingSizeClass = responsive
    ? `heading-${parsedSize}-responsive`
    : `heading-${parsedSize}`;

  const classes = classNames(
    'heading',
    color,
    headingSizeClass,
    {
      truncate,
      [`text-${textAlign}`]: textAlign,
    },
    className,
  );

  return <Element className={classes}>{children}</Element>;
}

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;
Heading.displayName = 'Heading';

export default Heading;
