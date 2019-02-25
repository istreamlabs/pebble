import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseTextSize } from '../../Utils';
import { fontSizeType } from '../../Types';

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
   * font size to apply to all child text elements without explicitly set sizes, based on the [typography scale](/#/Styles/Typography)
   * @type {PropTypes.Requireable<FontSizeLike>}
   */
  size: fontSizeType,
  /**
   * spacing of related components
   */
  tight: PropTypes.bool,
};

export default TextContainer;
