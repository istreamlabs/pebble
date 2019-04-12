import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Block from '../../Block/Block';

const FormLayoutRow = ({
  className,
  children,
  tight
}) => {
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
};

export default FormLayoutRow;

FormLayoutRow.propTypes = {
  /**
   * Additional classNames to add
   */
  className: PropTypes.string,
  /**
   * Content to display inside a row
   */
  children: PropTypes.node,
  /**
   * Decrease the vertical spacing between rows of inputs
   */
  tight: PropTypes.bool,
};
