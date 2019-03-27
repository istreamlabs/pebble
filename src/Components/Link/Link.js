import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

import './Link.scss';

/**
 * A Pebble Link is a wrapper for Links from react-router-dom.
 * It renders an `<a>` or a custom component with styles, for navigation between application views.
 * Pebble assumes your application uses `react-router-dom`,
 * therefore we have optimized for this usecase.
 *
 * ---
 */

const Link = (
  {
    children,
    className,
    as,
    href,
    unstyled,
    ...rest
  }
) => {
  const classes = classNames({ link: !unstyled }, className);

  if (as === undefined) {
    return (
      <RouterLink
        className={classes}
        to={href}
        {...rest}
      >
        {children}
      </RouterLink>
    );
  }

  const Component = as;

  return (
    <Component
      className={classes}
      href={href}
      {...rest}
    >
      {children}
    </Component>
  );
};

Link.propTypes = {
  /**
   * Use a custom component or a regular `a` tag
   */
  as: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
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
