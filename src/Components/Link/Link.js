import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Link as RouterLink } from 'react-router-dom';

import './Link.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node.isRequired,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
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

const defaultProps = {
  external: false,
  unstyled: false,
};

/**
 * A Link is a wrapper for Links from react-router-dom that applies Pebble styling.
 * Pebble assumes your application uses `react-router-dom`,
 * therefore we have optimized for this usecase.
 *
 * ---
 */

const Link = forwardRef((props, ref) => {
  const {
    children,
    className,
    external,
    href,
    unstyled,
    ...rest
  } = props;
  const classes = classNames({ link: !unstyled }, className);

  return external ? (
    <a ref={ref} className={classes} href={href} {...rest}>
      {children}
    </a>
  ) : (
    <RouterLink ref={ref} className={classes} to={href} {...rest}>
      {children}
    </RouterLink>
  );
});

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;

export default Link;
