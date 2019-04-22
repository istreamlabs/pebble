import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useMobileLayout } from '../../../Hooks';

import './TableRow.scss';

import Block from '../../Block/Block';

const propTypes = {
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

function TableRow({
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
      'bb b-neutral-300 pb-4': isMobileLayout
    },
    className
  );

  const childrenMarkup = () => (
    React.Children.map(children, (child, i) => React.cloneElement(
      child,
      {
        'aria-colindex': i + 1
      }
    ))
  );

  return (
    <Block
      role="row"
      className={classes}
      direction={isMobileLayout ? 'column' : 'row'}
      marginTop={isMobileLayout ? '4' : null}
      width="100%"
      styles={{ flexShrink: 0 }}
      {...rest}
    >
      {childrenMarkup()}
    </Block>
  );
}

TableRow.propTypes = propTypes;

export default TableRow;
