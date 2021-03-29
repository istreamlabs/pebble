import '../../Card.scss';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import classNames from 'classnames';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../Block/Block' was resolved to '/Us... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../Heading/Heading' was resolved to ... Remove this comment to see the full error message
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
// @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
};

const defaultProps = {
  actions: null,
  children: null,
};

function Header({ actions, children, className }) {
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  const classes = classNames('pt-3 pt-4-ns pt-5-m', className);

  return (
    <Block
      flex
      justify="between"
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      alignItems="baseline"
      // @ts-expect-error ts-migrate(7026) FIXME: JSX element implicitly has type 'any' because no i... Remove this comment to see the full error message
      padding={['0 3', '0 4', '0 5']}
      className={classes}
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
