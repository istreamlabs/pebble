import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './List.scss';

/**
 * A typographical item to be nested in a `<List>`
 */

const ListItem = (
  {
    children,
    className,
  }
) => {
  const classes = classNames('list-item',
    className);

  return (
    <li
      className={classes}
    >
      {children}
    </li>
  );
};

ListItem.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
};

export default ListItem;
