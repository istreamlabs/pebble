import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

/**
 * A row container in a table/grid
 *
 * ---
 */

const TableRow = (
  { children, className, ...rest }
) => {
  const classes = classNames('flex w-100 bg-hover bg-blue-lighter-hover', className);
  return (
    <Block role="row" flex={false} className={classes} {...rest}>
      {children}
    </Block>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TableRow;
