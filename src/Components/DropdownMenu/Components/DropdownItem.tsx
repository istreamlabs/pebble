// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../Button/Button' was resolved to '/Use... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../LinkButton/LinkButton' was resolved ... Remove this comment to see the full error message
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
};

/**
 * A child of [DropdownMenu](/#/Components/DropdownMenu).
 * Used to render a button or link within a DropdownMenu.
 *
 * ---
 */

// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
function DropdownItem({ children, className, href, ...props }) {
  const classes = classNames(
    'dropdown-item',
    'text-left',
    'ws-normal',
    className,
  );

  if (href) {
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    <Button {...props} role="menuitem" className={classes}>
      {children}
    </Button>
  );
}

DropdownItem.propTypes = propTypes;
DropdownItem.defaultProps = defaultProps;

export default DropdownItem;
