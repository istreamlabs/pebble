import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
 * Used to group related [DropdownItems](/#/Components/DropdownItem) together.
 *
 * ---
 */

function DropdownItemGroup({ children, className, title }) {
  const classes = classNames('dropdown-item-group', className);
  return (
    <Block
      marginBottom="4"
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
