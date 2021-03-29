// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useMobileLayout } from '../../../Hooks';

import { borderType } from '../../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import './TableRow.scss';

// @ts-expect-error ts-migrate(2749) FIXME: 'borderType' refers to a value, but is being used ... Remove this comment to see the full error message
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
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
   * Additional css classes to add
   */
  className: PropTypes.string,
  /**
   * Change the background of the row on hover
   */
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
