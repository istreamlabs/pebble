import '../../Card.scss';

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Block from '../../../Block/Block';
import Heading from '../../../Heading/Heading';

const propTypes = {
  /**
   * button(s) to be displayed on the right side
   */
  actions: PropTypes.node,
  /**
   * Contents of the card title
   */
  children: PropTypes.node,
  /**
   * Additional classNames to add to card title
   */
  className: PropTypes.string,
};

const defaultProps = {
  actions: null,
  children: null,
};

function Header({ actions, children, className }) {
  const classes = classNames('pt-3 pt-4-ns pt-5-m', className);

  return (
    <Block
      flex
      justify="between"
      alignItems="baseline"
      className={classes}
      paddingHorizontal={[3, 4, 5]}
    >
      {children && (
        <Heading element={2} size="4">
          {children}
        </Heading>
      )}
      {actions && <div>{actions}</div>}
    </Block>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
Header.displayName = 'CardHeader';

export default Header;
