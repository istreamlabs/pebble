import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { dimensionType } from '../../Types';

import Block from '../Block/Block';
import FormLayoutRow from './Components/FormLayoutRow';

/**
 * Arranges input fields within a [Form](/#/Components/Form) with standard spacing.
 *
 */
class FormLayout extends React.Component {
  render() {
    const {
      children,
      className,
      direction,
      tight,
      ...rest
    } = this.props;

    return (
      <Block
        direction={direction}
        itemSpacing={tight ? 3 : 5}
        className={classNames(className)}
        {...rest}
      >
        {React.Children.map(children, (child) => {
          if (child.type === FormLayoutRow) {
            return React.cloneElement(child, { tight });
          }
          return child;
        })}
      </Block>
    );
  }
}

FormLayout.defaultProps = {
  direction: 'column',
  width: '100',
};

FormLayout.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Content to display inside the form
   */
  children: PropTypes.node,
  /**
   * Decrease the spacing between inputs
   */
  tight: PropTypes.bool,
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
   * A valid css width (%, px, em, rem).
   *
   * Or one of: 1, 2, 3, 4, 5, 6, 7, 8, 9, '1', '2', '3', '4', '5', '6', '7', '8', '9', 10, 20, 25, 30, 33, 34, 40, 50, 60, 70, 75, 80, 90, 100, '10', '20', '25', '30', '33', '34', '40', '50', '60', '70', '75', '80', '90', '100'
   *
   * For responsive behavior, pass an array with length up to 4, with one of the above values.
   */
  width: dimensionType,
};

export default FormLayout;
