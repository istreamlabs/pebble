import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useMobileLayout } from '../../../Hooks';

import { borderType } from '../../../Types';

import './TableRow.scss';

import Block from '../../Block/Block';

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

const defaultProps = {
  border: 'bottom',
};

function TableRow({
  border,
  children,
  className,
  hoverHighlight,
  ...rest
}) {
  const isMobileLayout = useMobileLayout();

  const classes = classNames(
    'table-row',
    'flex w-100',
    {
      'bg-hover bg-blue-lighter-hover': hoverHighlight,
    },
    className,
  );

  const childrenMarkup = () =>
    React.Children.map(
      children,
      (child, i) =>
        child &&
        React.cloneElement(child, {
          'aria-colindex': i + 1,
        }),
    );

  return (
    <Block
      border={border}
      role="row"
      className={classes}
      direction={isMobileLayout ? 'column' : 'row'}
      margin={['4 0 0 0', '0']}
      width="100%"
      style={{ flexShrink: 0 }}
      padding={['0 4 4 4', '4', '0']}
      {...rest}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableRow.propTypes = propTypes;
TableRow.defaultProps = defaultProps;
TableRow.displayName = 'TableRow';

export default TableRow;
