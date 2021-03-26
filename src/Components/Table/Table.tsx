import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { borderType, dimensionType } from '../../Types';

import Block from '../Block/Block';

const propTypes = {
  /**
   *
   * Apply a `solid 1px neutral-300` border to a specific side by passing one of the following strings:
   *
   * 'all', 'vertical', 'horizontal', 'top', 'right', 'bottom', 'left'
   *
   * or the pass the shape:
   * ```
   * {
   *   color: "neutral-300",
   *   side: "all",
   *   size: "1px",
   *   style: "solid",
   * }
   * ```
   *
   * `color` [color identifier](/#/Styles/Color) of the border color
   */
  border: borderType,
  /**
   * Content of the component
   */
  children: PropTypes.node,
  /**
   * Additional css classes to apply
   */
  className: PropTypes.string,
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
  border: 'all',
  width: '100%',
};

/**
 * Display tabular data in a grid
 *
 * ---
 */

function Table({ border, children, className, width, ...rest }) {
  const classes = classNames('table', className);

  return (
    <Block
      border={border}
      className={classes}
      width={width}
      {...rest}
      role="grid"
      direction="column"
    >
      {children}
    </Block>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;
Table.displayName = 'Table';

export default Table;
