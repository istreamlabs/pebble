import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Link.scss';

/**
 * A `Link` renders an `<a>` for navigation between web pages.
 */

const Link = (
  {
    ariaCurrent,
    block,
    children,
    className,
    external,
    href,
  }
) => {
  const classes = classNames('link',
    { 'link-block': block, },
    className);

  const target = external ? '_blank' : undefined;

  return (
    <a
      href={href}
      className={classes}
      target={target}
      aria-current={ariaCurrent}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  /**
   *  indicates the link represents the current page for,
   * such as in a navigation menu
   */
  ariaCurrent: PropTypes.bool,
  /**
   * should the clickable element should be `display: block`
   */
  block: PropTypes.bool,
  /**
   * Use for a links that open a different site
   */
  external: PropTypes.bool,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * Partial or full URL that link goes to
   */
  href: PropTypes.string.isRequired,
};

export default Link;
