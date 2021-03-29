// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'react' or its corresponding ty... Remove this comment to see the full error message
import React from 'react';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module 'classnames' or its correspondi... Remove this comment to see the full error message
import PropTypes from 'prop-types';
// @ts-expect-error ts-migrate(6142) FIXME: Module '../../../Block/Block' was resolved to '/Us... Remove this comment to see the full error message
import classNames from 'classnames';
import Block from '../../../Block/Block';
import '../../Card.scss';

const propTypes = {
  /**
   * Additional ClassNames to add
   */
  className: PropTypes.string,
  /**
   * Contents of the button
   */
  children: PropTypes.node.isRequired,
};

const defaultProps = {
  children: null,
  // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  subdued: false,
};

function Section({ children, className }) {
  const classes = classNames('card-section', className);

  return (
    <Block
      displayBlock
      padding={['3', '4', '4 5']}
      className={classes}
    >
      {children}
    </Block>
  );
}

Section.propTypes = propTypes;
Section.defaultProps = defaultProps;
Section.displayName = 'CardSection';

export default Section;
