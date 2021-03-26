import React from 'react';
import PropTypes from 'prop-types';
import Block from '../../Block/Block';

const propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
};

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 * Used to add a visual divider between [DropdownItems](/#/Components/DropdownItem).
 *
 * ---
 */

function DropdownMenuSeparator({ className }) {
  return (
    <Block
      className={className}
      margin="2 0"
      background="neutral-200"
      height="2px"
      width="100%"
      role="separator"
    />
  );
}

DropdownMenuSeparator.propTypes = propTypes;

export default DropdownMenuSeparator;
