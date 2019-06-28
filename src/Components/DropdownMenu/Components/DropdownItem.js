import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Button/Button';
import LinkButton from '../../LinkButton/LinkButton';

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
   * URL of the page the link goes to
   */
  href: PropTypes.string,
};

const defaultProps = {
  children: null,
  className: undefined,
  href: undefined,
};

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 * Used to render a button or link within a DropdownMenu.
 *
 * ---
 */

function DropdownItem({
  children,
  className,
  href,
  ...props
}) {
  const classes = classNames('dropdown-item', 'text-left', 'ws-normal', className);

  if (href) {
    return (
      <LinkButton
        {...props}
        role="menuitem"
        href={href}
        className={classes}
      >
        {children}
      </LinkButton>
    );
  }

  return (
    <Button
      {...props}
      role="menuitem"
      className={classes}
    >
      {children}
    </Button>
  );
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
