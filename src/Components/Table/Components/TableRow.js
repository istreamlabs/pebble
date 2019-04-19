import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

const propTypes = {
  /**
   * Contents of the component
   */
  children: PropTypes.node,
  /**
   * Additional css classes to add
   */
  className: PropTypes.string,
  /**
   * Change the background of the row on hover
   */
  hoverHighlight: PropTypes.bool,
};

/**
 * A row container in a table/grid
 *
 * ---
 */

function TableRow({
  children,
  className,
  hoverHighlight,
  ...rest
}) {
  const classes = classNames(
    'flex w-100',
    { 'bg-hover bg-blue-lighter-hover': hoverHighlight },
    className
  );
  return (
    <Block role="row" flex={false} className={classes} {...rest}>
      {children}
    </Block>
  );
}

TableRow.propTypes = propTypes;

export default TableRow;
