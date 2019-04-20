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
   * Decrease the vertical and horizontal spacing between inputs
   */
  tight: PropTypes.bool,
};


function FormLayoutRow({
  className,
  children,
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
      direction={['column', 'row']}
      itemSpacing={tight ? 3 : 5}
      className={className}
    >
      {itemMarkup}
    </Block>
  );
}

FormLayoutRow.propTypes = propTypes;

export default FormLayoutRow;
