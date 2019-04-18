import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TableCell from './TableCell';
import TableRow from './TableRow';

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

  const renderColumnHeaders = () => (
    <TableRow background="white">
      {columns.map((column, index) => (
        <TableCell
          key={index}
          role="columnheader"
          flex={!(hasColumnWidths && columnWidths[index])}
          basis={hasColumnWidths && columnWidths[index] ? columnWidths[index] : '100%'}
          className="fw-700 fs-6"
        >
          {column}
        </TableCell>
      ))}
    </TableRow>
  );

  const renderBody = () => {
    if (data === undefined) {
      return children;
    }
    let rowCells = [];
    return data.map((row, i) => {
      rowCells = [];
      return (
        <TableRow key={i}>
          {Object.keys(row).forEach((key, j) => {
            rowCells.push(
              <TableCell
                key={key}
                flex={!(hasColumnWidths && columnWidths[j])}
                basis={hasColumnWidths && columnWidths[j] ? columnWidths[j] : '100%'}
              >
                {row[key]}
              </TableCell>
            );
          })}
          {rowCells}
        </TableRow>
      );
    });
  };

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
      {columns && renderColumnHeaders()}
      <Block
        role="rowgroup"
        direction="column"
        overflow={{ vertical: 'scroll', horizontal: 'scroll' }}
      >
        {renderBody()}
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
