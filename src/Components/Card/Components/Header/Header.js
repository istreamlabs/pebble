import '../../Card.scss';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Heading from '../../../Heading/Heading';

const propTypes = {
  /**
   * button(s) to be displayed on the right side
   */
  actions: PropTypes.node,
  /**
   * Contents of the card title
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add to card title
   */
  className: PropTypes.string,
};

const defaultProps = {
  actions: null,
  children: null,
};

function Header({ actions, children, className }) {
  const classes = classNames('card-title', className);

  return (
    <div className={classes}>
      {children && (
        <Heading element={2} size="4" className="card-title-heading">
          {children}
        </Heading>
      )}
      {actions && <div>{actions}</div>}
    </div>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = 'CardHeader';

export default Header;
