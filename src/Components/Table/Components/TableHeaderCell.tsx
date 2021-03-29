// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useMobileLayout } from '../../../Hooks';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import { dimensionType, spacingType } from '../../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button/Button' was resolved to '/Use... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Icon/Icon' was resolved to '/Users/e... Remove this comment to see the full error message
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';

const propTypes = {
  /**
   * Contents of the TableCell
   */
  children: PropTypes.node,
  /**
   * Additional classes to apply
   */
  // @ts-expect-error ts-migrate(2749) FIXME: 'spacingType' refers to a value, but is being used... Remove this comment to see the full error message
  className: PropTypes.string,
  /**
   // @ts-expect-error ts-migrate(2749) FIXME: 'dimensionType' refers to a value, but is being us... Remove this comment to see the full error message
   * Callback function when a TableHeader cell is pressed
   */
  onSort: PropTypes.func,
  /**
   * Direction the column should be sorted
   */
  sortDirection: PropTypes.oneOf(['ASC', 'DESC', null]),
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
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

const defaultProps = {
  padding: [0, 0, 4],
  onSort: null,
  sortDirection: null,
  width: '100%',
};

/**
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * A column header in a Table
 *
 * ---
 */

function TableHeaderCell({
  children,
  className,
  onSort,
  sortDirection,
  padding,
  width,
  ...rest
}) {
  const isMobileLayout = useMobileLayout();

  const isSortable = onSort !== null;

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const baseClasses = 'word-wrap fw-700 fs-6';

  const classes = classNames(baseClasses, className);

  const getSortDirectionArrow = () => {
    if (sortDirection === 'ASC') {
      return (
        <Icon
          name="arrow-small-up"
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          accessibilityLabel="sort ascending"
          className="mr-1"
        />
      );
    }

    if (sortDirection === 'DESC') {
      return (
        <Icon
          name="arrow-small-down"
          accessibilityLabel="sort descending"
          className="mr-1"
        />
      );
    }

    return null;
  };

  const onSortClick = () => {
    onSort && onSort();
  };

  if (isSortable) {
    return (
      <Block
        role="columnheader"
        alignItems="center"
        className={classes}
        padding={padding}
        flex={width === '100%' ? 'grow' : undefined}
        width={isMobileLayout ? '100%' : width}
        {...rest}
      >
        <Button
          plain
          onClick={onSortClick}
          width="100%"
          className={baseClasses}
        >
          {getSortDirectionArrow()}
          {children}
        </Button>
      </Block>
    );
  }

  return (
    <Block
      role="columnheader"
      alignItems="center"
      flex={width === '100%' ? 'grow' : undefined}
      width={
        isMobileLayout ? '100%' : width !== '100%' ? width : null
      }
      className={classes}
      padding={padding}
      {...rest}
    >
      {children}
    </Block>
  );
}

TableHeaderCell.propTypes = propTypes;
TableHeaderCell.defaultProps = defaultProps;
TableHeaderCell.displayName = 'TableHeaderCell';

export default TableHeaderCell;
