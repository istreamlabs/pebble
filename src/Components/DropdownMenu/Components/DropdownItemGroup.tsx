// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Block/Block' was resolved to '/Users... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Heading/Heading' was resolved to '/U... Remove this comment to see the full error message
import Block from '../../Block/Block';
import Heading from '../../Heading/Heading';

const propTypes = {
  /**
   * The content of the item
   */
  children: PropTypes.any,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Text that appears as header of the group
   */
  title: PropTypes.string,
};

const defaultProps = {
  children: null,
};

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
 * Used to group related [DropdownItems](/#/Components/DropdownItem) together.
 *
 * ---
 */

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
function DropdownItemGroup({ children, className, title }) {
  const classes = classNames('dropdown-item-group', className);
  return (
    <Block
      margin="0 0 4"
      direction="column"
      className={classes}
      role="menu"
    >
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
}

DropdownItemGroup.propTypes = propTypes;
DropdownItemGroup.defaultProps = defaultProps;

export default DropdownItemGroup;
