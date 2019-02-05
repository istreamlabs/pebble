import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../Card.scss';


const Section = (
  {
    children,
    className,
    subdued,
  }
) => {
  const classes = classNames('card-section', className, {
    subdued,
  });

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

Section.propTypes = {
  /**
   * Additional ClassNames to add to button
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node.isRequired,
  /**
   * Make the section less visually prominent
   */
  subdued: PropTypes.bool,
};

export default Section;
