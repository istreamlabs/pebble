import React from 'react';
import PropTypes from 'prop-types';

import { useMobileLayout } from '../../../Hooks';

import Block from '../../Block/Block';
import Heading from '../../Heading/Heading';

const propTypes = {
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

function TableHeader({
  children,
  mobileLabel,
}) {
  const isMobileLayout = useMobileLayout();

  const childrenMarkup = () => {
    if (isMobileLayout) {
      return (
        <Heading element="4" size="3">{mobileLabel}</Heading>
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
      className={isMobileLayout ? 'bb b-neutral-300' : undefined}
      direction={isMobileLayout ? 'column' : 'row'}
      styles={{ flexShrink: 0, minHeight: '50px' }}
      justify={isMobileLayout ? 'center' : 'start'}
      padding={isMobileLayout ? '4' : null}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableHeader.propTypes = propTypes;

export default TableHeader;
