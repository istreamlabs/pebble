import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../Block/Block';

/**
 * Arranges fields with a form using standard spacing.
 *
 */
class FormLayout extends React.Component {
  render() {
    const {
      children,
      className,
      direction,
      ...rest
    } = this.props;

    return (
      <Block direction={direction} itemSpacing="5" className={classNames(className)} {...rest}>
        {children}
      </Block>
    );
  }
}

FormLayout.defaultProps = {
  direction: 'column'
};

FormLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  /**
   * Orientation to layout children
   *
   * For responsive behavior, pass an array with length up to 4, with 'row' or 'column' as the value for each element.
   * @type {PropTypes.Requireable<Direction>}
   */
  direction: PropTypes.oneOfType([
    PropTypes.oneOf(['row', 'column']),
    PropTypes.array,
  ]),
};

export default FormLayout;
