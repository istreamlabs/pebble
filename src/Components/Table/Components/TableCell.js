import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

/**
 * The cell in a table/grid
 *
 * ---
 */

const TableCell = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('bb b-neutral-300 word-wrap', className, {
    'pv-4 ph-4': rest.padding === undefined
  });

  return (
    <Block
      role={rest.role ? rest.role : 'gridcell'}
      basis={rest.width ? rest.width : '100%'}
      direction="column"
      className={classes}
      {...rest}
    >
      {children}
    </Block>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default TableCell;
