import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

/**
* Displays tabular data in a Table
*
* ---
*/

const Table = (
  {
    children,
    className,
    columns,
    data,
    ...rest,
  }
) => {
  const classes = classNames('table', className);

  return (
    <Block
      className={classes}
      width={rest.width ? rest.width : '100%'}
      {...rest}
    >
      <div role="grid" aria-colcount={columns && columns.length} aria-rowcount={data && data.length} className="w-100">
        {columns && (
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                role="columnheader"
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        )}
        {data && data.map((row, index) => (
          <TableRow key={index}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))
        }
        {children}
      </div>
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
  data: PropTypes.array,
};

export default Table;

export const TableRow = (
  { children, className, ...rest }
) => {
  const classes = classNames('flex w-100', className);
  return (
    <div role="row" className={classes} {...rest}>
      {children}
    </div>
  );
};

TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
 * Used for <td> and <th> elements
 *
 * ---
 */

export const TableCell = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('pv-3 ph-3 bb b-neutral-300 w-100', className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

TableCell.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
