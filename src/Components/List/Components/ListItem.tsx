import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ListItem.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
};

/**
 * A typographical item to be nested in a [List](/#/Components/List)
 */

function ListItem({ children, className }) {
  const classes = classNames('list-item', className);

  return <li className={classes}>{children}</li>;
}

ListItem.propTypes = propTypes;

export default ListItem;
