import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';
import Heading from '../../Heading/Heading';

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 * Used to group related [DropdownItems](/#/Components/DropdownItem) together.
 *
 * ---
 */

const DropdownItemGroup = (
  {
    children,
    className,
    title,
  }
) => {
  const classes = classNames('dropdown-item-group', className);
  return (
    <Block marginBottom="4" direction="column" className={classes} role="menu">
      <Heading
        element="4"
        size="6"
        className="text-transform-none
          fw-400 neutral-600 ph-3 mb-2"
      >
        {title}
      </Heading>
      {children}
    </Block>
  );
};

DropdownItemGroup.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * The content of the item
   */
  children: PropTypes.any,
  /**
   * Text that appears as header of the group
   */
  title: PropTypes.string,
};

export default DropdownItemGroup;
