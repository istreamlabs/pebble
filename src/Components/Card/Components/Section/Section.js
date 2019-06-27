import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../../Card.scss';

const propTypes = {
  /**
   * Additional ClassNames to add
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

const defaultProps = {
  className: undefined,
  children: null,
  subdued: false,
};

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

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;

export default Section;
