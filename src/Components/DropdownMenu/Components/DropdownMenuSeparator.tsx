// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
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
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
