import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dimensionType } from '../../Types';

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
   * A valid css width (%, px, em, rem).
   *
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  width: '100%',
};

/**
 * Display tabular data in a grid
 *
 * ---
 */

function Table({ children, className, width, ...rest }) {
  const classes = classNames('table', className);

  return (
    <Block
      border="all"
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

export default Table;
