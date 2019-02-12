import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TextContainer.scss';

/**
 * The TextContainer wraps text elements such as [Headings](/#/Components/Heading),
 * paragraphs and lists to apply the proper vertial
 * spacing between them. This vertical spacing is
 * known as "vertical rhythm".
 */

const TextContainer = (
  {
    children,
    className,
    tight,
  }
) => {
  const classes = classNames('text-container', {
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
   * color of the text
   */
  tight: PropTypes.bool,
};

export default TextContainer;
