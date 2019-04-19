import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dimensionType } from '../../Types';

import TableCell from './Components/TableCell';
import TableRow from './Components/TableRow';

import Block from '../Block/Block';

const propTypes = {
  /**
   * Content of the component
   */
  children: PropTypes.node,
  /**
   * Additional css classes to apply
   */
  className: PropTypes.string,
  /**
   * The column header labels
   */
  columns: PropTypes.arrayOf(PropTypes.node),
  /**
   * The width of each column in the Table
   */
  columnWidths: PropTypes.arrayOf(PropTypes.string),
  /**
   * Tabular data
   */
  data: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  /**
   * Change the background of a row on hover
   */
  hoverHighlight: PropTypes.bool,
  /**
   * A valid css width (%, px, em, rem).
   *
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  hoverHighlight: true,
  width: '100%',
};

/**
* Display tabular data in a grid
*
* ---
*/

function Table({
  children,
  className,
  columns,
  columnWidths,
  data,
  hoverHighlight,
  width,
  ...rest
}) {
  const classes = classNames('table', className);
  const hasColumnWidths = Array.isArray(columnWidths) && !!columnWidths.length;

  const renderColumnHeaders = () => (
    <TableRow hoverHighlight={false} background="white">
      {columns.map((column, index) => (
        <TableCell
          key={index}
          role="columnheader"
          flex={!(hasColumnWidths && columnWidths[index])}
          basis={hasColumnWidths && columnWidths[index] ? columnWidths[index] : '100%'}
          className="fw-700 fs-6"
          aria-colindex={index + 1}
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
        <TableRow hoverHighlight={hoverHighlight} key={i}>
          {Object.keys(row).forEach((key, j) => {
            rowCells.push(
              <TableCell
                key={key}
                flex={!(hasColumnWidths && columnWidths[j])}
                basis={hasColumnWidths && columnWidths[j] ? columnWidths[j] : '100%'}
                aria-colindex={j + 1}
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
      width={width}
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
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
