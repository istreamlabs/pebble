import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useMobileLayout } from '../../../Hooks';
import { dimensionType, spacingType } from '../../../Types';

import Block from '../../Block/Block';

const propTypes = {
  /**
   * Contents of the TableCell
   */
  children: PropTypes.node,
  /**
   * Additional classes to apply
   */
  className: PropTypes.string,
  /**
   * Padding [space](/#/Styles/Spacing) to be added uniformly within this block.
   *
   * One of: 1, 2, 3, 4, 5, 6, 7 , 8
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   * @type {PropTypes.Requireable<Spacing>}
   */
  padding: spacingType,
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
  padding: [0, 0, 4],
  width: '100%',
};

/**
 * The cell in a table/grid
 *
 * ---
 */

function TableCell({ children, className, padding, width, ...rest }) {
  const isMobileLayout = useMobileLayout();

  const classes = classNames('word-wrap', className);

  return (
    <Block
      role="gridcell"
      flex={width === '100%' ? 'grow' : undefined}
      width={
        isMobileLayout ? '100%' : width !== '100%' ? width : null
      }
      direction="column"
      className={classes}
      padding={padding}
      {...rest}
    >
      {children}
    </Block>
  );
}

TableCell.propTypes = propTypes;
TableCell.defaultProps = defaultProps;

export default TableCell;
