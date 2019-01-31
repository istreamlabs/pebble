import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Heading.scss';

export const parseSize = (size, element) => {
  if (typeof size !== 'number') {
    size = parseInt(size, 10);
  }
  if (isNaN(size) || size < 1 || size > 6) {
    const defaultSize = element;
    size = defaultSize;
  }
  return size;
};

export const parseElement = (element) => {
  if (typeof element !== 'number') {
    element = parseInt(element, 10);
  }
  if (isNaN(element) || element < 1 || element > 6) {
    const { element: defaultElement } = Heading.defaultProps;
    element = defaultElement;
  }
  return element;
};

const Heading = (
  {
    children,
    className,
    element,
    responsive,
    textAlign,
    truncate,
    size,
  }
) => {
  const parsedElement = parseElement(element);
  const Element = `h${parsedElement}`;

  const parsedSize = size ? parseSize(size, parsedElement) : parsedElement;
  const headingSizeClass = responsive ? `heading-${parsedSize}-responsive` : `heading-${parsedSize}`;

  const classes = classNames('heading', headingSizeClass, {
    truncate,
    [`text-${textAlign}`]: textAlign
  }, className);

  return (
    <Element className={classes}>
      {children}
    </Element>
  );
};

Heading.defaultProps = {
  element: 2,
  responsive: true,
};

Heading.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Contents of the heading
   */
  children: PropTypes.node.isRequired,
  /**
   * Semantic heading level, can passed as int or string
   */
  element: PropTypes.PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']).isRequired,
  /**
   * should the font size be reduced for smaller viewports
   */
  responsive: PropTypes.bool,
  /**
   * text alignment
   */
  textAlign: PropTypes.oneOf(['center', 'right', 'left']),
  /**
   * Restrict the heading text to a single line and truncate with ellipsis if it is too long to all fit.
   */
  truncate: PropTypes.bool,
  /**
   * appearance level, can passed as int or string
   */
  size: PropTypes.PropTypes.oneOf([1, 2, 3, 4, 5, 6, '1', '2', '3', '4', '5', '6']),
};

export default Heading;
