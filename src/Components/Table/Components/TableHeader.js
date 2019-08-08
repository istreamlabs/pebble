import React from 'react';
import PropTypes from 'prop-types';

import { useMobileLayout } from '../../../Hooks';

import { borderType } from '../../../Types';

import Block from '../../Block/Block';
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
   * `color` [color identifier](/#/Styles/Color) of the border color
   */
  border: borderType,
  /**
   * Contents of the component
   */
  children: PropTypes.node,
  /**
   * Text to replace column headers
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

  if (isMobileLayout && mobileLabel === undefined) {
    return null;
  }

  return (
    <Block
      role="row"
      width="100%"
      background="white"
      border={border}
      direction={isMobileLayout ? 'column' : 'row'}
      style={{ flexShrink: 0, minHeight: '50px' }}
      justify={isMobileLayout ? 'center' : 'start'}
      padding={isMobileLayout ? '4' : null}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableHeader.propTypes = propTypes;
TableHeader.defaultProps = defaultProps;

export default TableHeader;
