import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

const propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Content to display inside a row
   */
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
  /**
   * Decrease the vertical and horizontal spacing between inputs
   */
  tight: PropTypes.bool,
};

const defaultProps = {
  direction: ['column', 'row']
};


function FormLayoutRow({
  className,
  children,
  direction,
  tight
}) {
  const itemMarkup = React.Children.map(children, child => React.cloneElement(
    child,
    {
      className: classNames(child.props.className, {
        'w-100': child.props.className === undefined && child.props.width === undefined
      })
    }
  ));

  return (
    <Block
      flex
      direction={direction}
      itemSpacing={tight ? 3 : 5}
      className={className}
    >
      {itemMarkup}
    </Block>
  );
}

FormLayoutRow.propTypes = propTypes;
FormLayoutRow.defaultProps = defaultProps;

export default FormLayoutRow;
