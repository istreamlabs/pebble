// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
import PropTypes from 'prop-types';

import { useMobileLayout } from '../../../Hooks';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import { borderType } from '../../../Types';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Heading/Heading' was resolved to '/U... Remove this comment to see the full error message
import Block from '../../Block/Block';
// @ts-expect-error ts-migrate(2749) FIXME: 'borderType' refers to a value, but is being used ... Remove this comment to see the full error message
import Heading from '../../Heading/Heading';

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
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * `color` [color identifier](/#/Styles/Color) of the border color
   */
  border: borderType,
  /**
   * Contents of the component
   */
  children: PropTypes.node,
  /**
   // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
   * Text to replace column headers at mobile viewports
   */
  mobileLabel: PropTypes.string,
};

/**
 * A wrapper for Table headers
 *
 * ---
 */

const defaultProps = {
  border: 'bottom',
};

function TableHeader({ border, children, mobileLabel }) {
  const isMobileLayout = useMobileLayout();

  if (isMobileLayout && mobileLabel === undefined) {
    return null;
  }

  const childrenMarkup = () => {
    if (isMobileLayout) {
      return (
        <Heading element="4" size="3">
          {mobileLabel}
        </Heading>
      );
    }
    return children;
  };

  return (
    <Block
      role="row"
      width="100%"
      background="white"
      border={border}
      direction={['column', 'column', 'row']}
      style={{ flexShrink: 0, minHeight: '50px' }}
      justify={['center', 'center', 'start']}
      padding={[4, 4, 0]}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;
TableHeader.displayName = 'TableHeader';

export default TableHeader;
