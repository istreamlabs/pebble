import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
 * A row container in a table/grid
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

    return (
      React.Children.map(children, child => React.cloneElement(
        child,
        {
          className: classNames(child.props.className, 'fw-700 fs-6'),
          role: 'columnheader',
          key: child.key,
        }
      ))
    );
  };

  return (
    <Block
      role="row"
      width="100%"
      background={!isMobileLayout ? 'white' : undefined}
      className={isMobileLayout ? 'bb b-neutral-300' : undefined}
      direction={isMobileLayout ? 'column' : 'row'}
      styles={{ flexShrink: 0, minHeight: '50px' }}
      justify={isMobileLayout ? 'center' : 'start'}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableHeader.propTypes = propTypes;

export default TableHeader;
