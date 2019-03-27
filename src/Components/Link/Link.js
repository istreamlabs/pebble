import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Link.scss';

/**
 * Renders an `<a>` or a custom component,
 * for navigation between web pages
 *
 * ---
 */

const Link = (
  {
    children,
    className,
    component,
    href,
    unstyled,
    ...rest
  }
) => {
  const classes = classNames({ link: !unstyled }, className);

  const Component = component || 'a';

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
   * Use a custom component (e.g. a react-router-dom Link)
   */
  component: PropTypes.element,
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
