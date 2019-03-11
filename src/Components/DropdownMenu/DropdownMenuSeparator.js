import React from 'react';
import PropTypes from 'prop-types';

import Block from '../Block/Block';

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 * Used to add a visual divider between [DropdownItems](/#/Components/DropdownItem).
 *
 * ---
 */

const DropdownMenuSeparator = (
  {
    className,
  }
) => (
  <Block
    className={className}
    marginTop="2"
    marginBottom="2"
    background="neutral-200"
    height="2px"
    width="100%"
    role="separator"
  />
);

DropdownMenuSeparator.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
};

export default DropdownMenuSeparator;
