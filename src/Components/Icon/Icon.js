import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import icons from './Icons';

import './Icon.scss';

const notFoundIcon = <path fill="currentColor" d="M16 10V8h-2c-.1-.8-.3-1.5-.6-2.2l2-1.7-1.3-1.5-1.8 1.5-.9-.9C11.5 1.7 9.8 0 8 0S4.5 1.7 4.5 3.2c-.3.3-.6.5-.9.9L1.9 2.6.6 4.1l2 1.7c-.3.7-.5 1.4-.6 2.2H0v2h2c.1 1 .5 2 .9 2.9l-1.6 1.4 1.3 1.5 1.5-1.3c1 1 2.4 1.6 3.8 1.6s2.8-.6 3.8-1.6l1.5 1.3 1.3-1.5-1.6-1.4c.7-.9 1-1.9 1.1-2.9h2z" />;

export const parseSize = (size) => {
  if (typeof size !== 'number') {
    size = parseInt(size, 10);
  }
  if (isNaN(size) || size < 1 || size > 8) {
    throw new Error('Size must be 1, 2, 3, 4, 5, 6, 7, or 8');
  }
  return size;
};

const viewBoxSize = 16;

/**
 *
 * @example ./IconExamples.md
 */
const Icon = (props) => {
  const {
    name,
    size,
    ariaHidden,
    accessibilityLabel,
    className
  } = props;

  const parsedSize = parseSize(size);

  let iconElements = icons[name];
  let iconFound = true;

  if (!iconElements) {
    iconElements = notFoundIcon;
    iconFound = false;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={ariaHidden}
      className={classNames('icon', { 'not-found': !iconFound }, className)}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      height={`${parsedSize * viewBoxSize}px`}
      width={`${parsedSize * viewBoxSize}px`}
    >
      {!!accessibilityLabel && <title>{accessibilityLabel}</title>}
      {iconElements}
    </svg>
  );
};

Icon.defaultProps = {
  size: 1,
  ariaHidden: true
};

Icon.propTypes = {
  /**
   * Additional ClassNames to add to the icon
   */
  className: PropTypes.string,
  /**
   * Changes the size of the icon
   */
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, '1', '2', '3', '4', '5', '6', '7', '8']),
  /**
   * keeps the icon from being read aloud by assistive technolgies
   */
  ariaHidden: PropTypes.bool,
  /**
   * descriptive text that will not be displayed by will provide context to assistive technologies
   */
  accessibilityLabel: PropTypes.string,
  /**
   * The name of the icon to display
   */
  name: PropTypes.oneOf(Object.keys(icons))
};


export default Icon;
