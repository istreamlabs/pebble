import React from 'react';
import PropTypes from 'prop-types';
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
  subdued: false,
};

function Section({ children, className }) {
  const classes = classNames('card-section', className);

  return (
    <Block
      displayBlock
      paddingHorizontal={[3, 4, 5]}
      paddingVertical={[3, 4]}
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
