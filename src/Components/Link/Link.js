import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Link.scss';

/**
 * A `Link` renders an `<a>` for navigation between web pages.
 *
 * ---
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
   * indicates to screenreaders that the link is
   * also the current page (i.e. currently
   * selected item in a navigation menu)
   */
  ariaCurrent: PropTypes.bool,
  /**
   * Make the link `display: block`
   */
  block: PropTypes.bool,
  /**
   * Use for links that navigate to a different website
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
