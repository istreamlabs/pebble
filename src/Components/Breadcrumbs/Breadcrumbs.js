import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';
import Icon from '../Icon/Icon';

import './Breadcrumbs.scss';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

/**
* Secondary form of navigation that helps orient users in an application with hierarchical content.
*
* ---
*/

function Breadcrumb({
  className,
  children,
}) {
  const classes = classNames('breadcrumbs', className);
  const childrenWithDividers = [];
  const numChildren = React.Children.count(children);

  React.Children.forEach(children, (child, index) => {
    child && childrenWithDividers.push(child);

    if (index !== numChildren - 1) {
      childrenWithDividers.push(<Icon key={`separator-${index}`} name="arrow-small-right" className="ml-2 mr-2 neutral-500" />);
    }
  });

  return (
    <Block
      as="nav"
      direction="row"
      aria-label="breadcrumb"
      alignItems="center"
      className={classes}
      wrap
    >
      {childrenWithDividers}
    </Block>
  );
}

Breadcrumb.propTypes = propTypes;

export default Breadcrumb;
