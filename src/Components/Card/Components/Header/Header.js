import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Heading from '../../../Heading/Heading';

import '../../Card.scss';

const propTypes = {
  /**
   * button(s) to be displayed on the right side
   */
  actions: PropTypes.node,
  /**
   * Additional classNames to add to card title
   */
  className: PropTypes.string,
  /**
   * Contents of the card title
   */
  children: PropTypes.node,
};

const defaultProps = {
  actions: null,
  className: undefined,
  children: null,
};

const Header = (
  {
    actions,
    children,
    className,
  }
) => {
  const classes = classNames('card-title', className);

  return (
    <div className={classes}>
      <Heading element={2} size="4" className="card-title-heading">
        {children}
      </Heading>
      {actions && (
        <div>
          {actions}
        </div>
      )}
    </div>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
