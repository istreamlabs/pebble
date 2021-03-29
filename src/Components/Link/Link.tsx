// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React, { forwardRef } from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
import classNames from 'classnames';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react-router-dom' or its corre... Remove this comment to see the full error message

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
   // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'props' implicitly has an 'any' type.
   */
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'ref' implicitly has an 'any' type.
  unstyled: PropTypes.bool,
};

const defaultProps = {
  external: false,
  unstyled: false,
};

/**
 * A Link is a wrapper for Links from react-router-dom that applies Pebble styling.
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * Pebble assumes your application uses `react-router-dom`,
 // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
 * therefore we have optimized for this usecase.
 *
 // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
    <RouterLink
      innerRef={ref}
      className={classes}
      to={href}
      {...rest}
    >
      {children}
    </RouterLink>
  );
});

Link.propTypes = propTypes;
Link.defaultProps = defaultProps;
Link.displayName = 'Link';

export default Link;
