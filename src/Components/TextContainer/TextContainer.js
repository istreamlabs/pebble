import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';

import './TextContainer.scss';

/**
 * The TextContainer wraps text elements such as [Headings](/#/Components/Heading),
 * paragraphs and lists to apply the proper vertical
 * spacing between them. This vertical spacing is
 * known as "vertical rhythm".
 */

const TextContainer = (
  {
    children,
    className,
    tight,
    size,
  }
) => {
  const parsedSize = size ? parseTextSize(size) : null;

  const classes = classNames('text-container', {
    [`fs-${parsedSize}`]: parsedSize,
    'text-container-tight': tight
  }, className);

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

TextContainer.propTypes = {
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
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, '1', '2', '3', '4', '5', '6', '7']),
  /**
   * color of the text
   */
  tight: PropTypes.bool,
};

export default TextContainer;
