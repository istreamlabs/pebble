// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../Block/Block' was resolved to '/Users/es... Remove this comment to see the full error message
import classNames from 'classnames';

// @ts-expect-error ts-migrate(6142) FIXME: Module '../Icon/Icon' was resolved to '/Users/esja... Remove this comment to see the full error message
import Block from '../Block/Block';
import Icon from '../Icon/Icon';

import './Breadcrumbs.scss';

const propTypes = {
  /**
   * Elements to be rendered as children of this component
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
};

const defaultProps = {
  children: null,
};

/**
 // @ts-expect-error ts-migrate(7034) FIXME: Variable 'childrenWithDividers' implicitly has typ... Remove this comment to see the full error message
 * Secondary form of navigation that helps orient users in an application within hierarchical content.
 *
 * ---
 */

function Breadcrumbs({ className, children, ...rest }) {
  // @ts-expect-error ts-migrate(7006) FIXME: Parameter 'child' implicitly has an 'any' type.
  const classes = classNames('breadcrumbs', className);
  const childrenWithDividers = [];
  const numChildren = React.Children.count(children);

  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  React.Children.forEach(children, (child, i) => {
    child && childrenWithDividers.push(child);

    if (i !== numChildren - 1) {
      childrenWithDividers.push(
        <Icon
          // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          key={i}
          name="arrow-small-triangle-right"
          className="ml-2 mr-2 ml-3-ns mr-3-ns neutral-500"
        />,
      );
    }
  });

  return (
    <Block
      as="nav"
      // @ts-expect-error ts-migrate(7005) FIXME: Variable 'childrenWithDividers' implicitly has an ... Remove this comment to see the full error message
      direction="row"
      aria-label="breadcrumbs navigation"
      alignItems="center"
      className={classes}
      wrap
      {...rest}
    >
      {childrenWithDividers}
    </Block>
  );
}

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;
Breadcrumbs.displayName = 'Breadcrumbs';

export default Breadcrumbs;
