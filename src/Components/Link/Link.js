import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

import './Link.scss';

/**
 * A Link is a wrapper for Links from react-router-dom that applies Pebble styling.
 * Pebble assumes your application uses `react-router-dom`,
 * therefore we have optimized for this usecase.
 *
 * ---
 */

const Link = (
  {
    children,
    className,
    external,
    href,
    unstyled,
    ...rest
  }
) => {
  const classes = classNames({ link: !unstyled }, className);

  return external ? (
    <a
      className={classes}
      href={href}
      {...rest}
    >
      {children}
    </a>
  ) : (
    <RouterLink
      className={classes}
      to={href}
      {...rest}
    >
      {children}
    </RouterLink>
  );
};

Link.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * render an `<a>` for links to external sites
   */
  external: PropTypes.bool,
  /**
   * Partial or full url the Link goes to
   */
  href: PropTypes.string,
  /**
   * Do not apply default styling
   */
  unstyled: PropTypes.bool,
};

export default Link;
