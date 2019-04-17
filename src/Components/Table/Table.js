import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

/**
* Display tabular data in a grid
*
* ---
*/

const Table = (
  {
    children,
    className,
    columns,
    columnWidths,
    data,
    ...rest,
  }
) => {
  const classes = classNames('table', className);
  const hasColumnWidths = Array.isArray(columnWidths) && !!columnWidths.length;

  return (
    <Block
      className={classes}
      width={rest.width ? rest.width : '100%'}
      height="100%"
      {...rest}
      role="grid"
      aria-colcount={columns && columns.length}
      aria-rowcount={data && data.length}
      direction="column"
    >
      {columns && (
        <TableRow background="white">
          {columns.map((column, index) => (
            <TableCell
              key={index}
              role="columnheader"
              flex={!(hasColumnWidths && columnWidths[index])}
              width={hasColumnWidths && columnWidths[index] ? columnWidths[index] : '100%'}
              className="fw-700 fs-6"
            >
              {column}
            </TableCell>
          ))}
        </TableRow>
      )}
      <Block
        role="rowgroup"
        direction="column"
        overflow={{ vertical: 'scroll', horizontal: 'scroll' }}
      >
        {children}
      </Block>
    </Block>
  );
};

Table.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  columnWidths: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
};

export default Table;

/**
 * A row container in a table/grid
 *
 * ---
 */

export const TableRow = (
  { children, className, ...rest }
) => {
  const classes = classNames('flex w-100 bg-hover bg-blue-lighter-hover', className);
  return (
    <Block role="row" className={classes} {...rest}>
      {children}
    </Block>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * The cell in a table/grid
 *
 * ---
 */

export const TableCell = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('bb b-neutral-300 word-wrap', className, {
    'pv-4 ph-4': rest.padding === undefined
  });

  return (
    <Block
      flex={(rest.width === undefined)}
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
