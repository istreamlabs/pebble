// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
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
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * A typographical item to be nested in a [List](/#/Components/List)
 */

function ListItem({ children, className }) {
  const classes = classNames('list-item', className);

  return <li className={classes}>{children}</li>;
}

ListItem.propTypes = propTypes;

export default ListItem;
